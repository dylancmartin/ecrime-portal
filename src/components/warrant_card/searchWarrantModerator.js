import React, { useState } from "react";
import styled from "styled-components";
import { API, Storage, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as query from "../../graphql/queries";
import SearchWarrant from "./searchWarrant";
import SVGIcon from "./../../assets/icons/SVGIcon";

const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const ChoiceContainer = styled.div`
  width: 175px;
  height: 55px;
  border-radius: 50px;
  background: #7dd8d2;
  position: absolute;
  margin-top: 7px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2),
    inset 0px 0px 25px 0px rgba(89, 183, 177, 0.25);
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 2;
  & div:nth-child(odd) {
    flex: 1;
    cursor: pointer;
    color: white;
    font-weight: 600;
    font-size: 17px;
    padding: 10px;
    transition: 0.2s;
    & * {
      fill: white;
      width: 12px;
    }
    &:hover {
      transform: scale(1.3);
    }
  }

  & div:nth-child(even) {
    content: "";
    display: inline-block;
    width: 0px;
    height: 70%;
    border-right: 1px solid #b5f1ed;
    padding: 0;
    flex: 0;
  }
`;

const SearchWarrantModerator = props => {
  const [isVisible, setIsVisible] = useState(true);

  function reject() {
    deleteDoc("uploaded");
    deleteUnapprovedWarrantMeta();
    deleteUnapprovedJoinsToDynamoDB();
  }

  function approve() {
    deleteDoc();
    deleteUnapprovedWarrantMeta();
    deleteUnapprovedJoinsToDynamoDB();
    createApprovedWarrantMeta();
    uploadApprovedJoinsToDynamoDB();
    // props.crimes.forEach(function(element) {
    //   updateCrimeTypes(element);
    // });
  }

  // --- S3 Helpers ---
  // removes documents storaged in cag-ecrime-portal-sw/public/{FILENAME}
  async function deleteDoc(prefix) {
    Storage.remove(`${prefix}${props.id}`)
      .then(result => {
        console.log("(1) SUCCESS: deleted warrant document from s3");
        console.log(result);
      })
      .catch(err => console.log(err));
  }

  // --- Dynamo Helpers ---
  async function deleteUnapprovedWarrantMeta() {
    await API.graphql(
      graphqlOperation(mutations.deleteUnapprovedWarrant, {
        input: { id: props.id }
      })
    )
      .then(result => {
        console.log("(2) SUCCESS: removed warrant meta from UnapprovedWarrant");
        console.log(result);
        setIsVisible(false);
      })
      .catch(err => console.log(err));
  }

  const deleteUnapprovedJoinsToDynamoDB = async () => {
    const joinIds = props.joinIds;
    var curSub = 1;
    joinIds.map(id => {
      API.graphql(
        graphqlOperation(mutations.deleteSubjectUnapprovedWarrant, {
          input: { id: id }
        })
      )
        .then(result => {
          console.log(
            `(3) SUCCESS: unlinked warrant: ${curSub}/${joinIds.length}`
          );
          console.log(result);
          curSub++;
        })
        .catch(err => console.log(err));
    });
  };

  async function createApprovedWarrantMeta() {
    const warrant = {
      id: props.id,
      content: props.content,
      county: props.county,
      creationYear: props.creationYear,
      isTemplate: props.isTemplate,
      state: props.state,
      crimes: props.crimes,
      dataTypes: props.dataTypes,
      uploadTimestamp: props.uploadTimestamp,
      votes: props.votes,
      subjectNames: props.subjectNames
    };

    await API.graphql(
      graphqlOperation(mutations.createApprovedWarrant, {
        input: { ...warrant }
      })
    )
      .then(result => {
        console.log(
          "(4) SUCCESS: created warrant meta in ApprovedWarrant table"
        );
        console.log(result);
      })
      .catch(err => console.log(err));
  }

  const uploadApprovedJoinsToDynamoDB = async () => {
    const id = props.id;
    const subjects = props.subjectIds;
    var curSub = 1;
    subjects.map(subject =>
      API.graphql(
        graphqlOperation(mutations.createSubjectApprovedWarrant, {
          input: {
            subjectApprovedWarrantSubjectId: subject,
            subjectApprovedWarrantWarrantId: id
          }
        })
      )
        .then(result => {
          console.log(
            `(5) SUCCESS: linked warrant: ${curSub}/${subjects.length}`
          );
          console.log(result);
          curSub++;
        })
        .catch(err => console.log(err))
    );
  };

  //crime crime
  async function updateCrimeTypesHelper(crime) {
    await API.graphql(
      graphqlOperation(mutations.createCrime, {
        input: {
          name: crime,
          count: 0
        }
      })
    ).then(result => {
      console.log(result);
    });
  }

  // check if crime already exits then create it if not
  async function updateCrimeTypes(crime) {
    await API.graphql(
      graphqlOperation(query.listCrimes, {
        limit: 5000, // FIXME: hardcoded number of crimes
        filter: { name: { eq: crime } }
      })
    ).then(result => {
      if (!result.data.listCrimes.items[0]) {
        updateCrimeTypesHelper(crime);
      }
    });
  }

  return (
    <div>
      {isVisible ? (
        <Container>
          <SearchWarrant {...props} prefix="unapproved/" isModerator={true} />
          <ChoiceContainer>
            <div onClick={reject}>
              <SVGIcon name={"Exit"} />
            </div>
            <div></div>
            <div onClick={approve}>
              <SVGIcon name={"Checkmark"} />
            </div>
          </ChoiceContainer>
        </Container>
      ) : null}
    </div>
  );
};

export default SearchWarrantModerator;
