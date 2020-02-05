import React, { useContext, useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { UserContext } from "../Usercontext";
import SearchWarrantModerator from "../components/warrant_card/searchWarrantModerator";
import styled from "styled-components";

const listUnapprovedWarrants = `query ListUnapprovedWarrants(
  $filter: ModelUnapprovedWarrantFilterInput
  $limit: Int
  $nextToken: String
) {
  listUnapprovedWarrants(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      county
      creationYear
      isTemplate
      state
      subject {
        id
        name
        requestDescription
        privacyPolicyUrl
      }
      subjects {
        items{
          id
          subject{
            id
            name
          }
        }
        nextToken
      }
      crimes
      dataTypes
      uploadTimestamp
      votes
    }
    nextToken
  }
}
`;

const SWModerator = props => {
  const user = useContext(UserContext);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUnapprovedWarrants = async () => {
      const result = await API.graphql(
        graphqlOperation(listUnapprovedWarrants)
      );
      console.log("retrieved unapproved warrants");
      console.log(result.data.listUnapprovedWarrants.items);
      setData(result.data.listUnapprovedWarrants.items);
    };

    fetchUnapprovedWarrants();
  }, []);

  const getSubjectNames = subjects => {
    var subjectNames = [];
    subjects.map(subject => subjectNames.push(subject.subject.name));
    return subjectNames;
  };

  const getSubjectIds = subjects => {
    var subjectIds = [];
    subjects.map(subject => subjectIds.push(subject.subject.id));
    return subjectIds;
  };

  const getJoinIds = subjects => {
    var joinIds = [];
    subjects.map(subject => joinIds.push(subject.id));
    return joinIds;
  };

  return (
    <div>
      {data != null && user.userGroup === "Moderator" ? (
        <Container>
          {data.map(sw => (
            <SearchWarrantModerator
              key={sw.id}
              id={sw.id}
              subjectName={sw.subjects.items[0].subject.name} // FIXME: iterate through all subjects of search
              subjectId={sw.subjects.items[0].subject.id} // FIXME: iterate through all subjects of search
              subjectNames={getSubjectNames(sw.subjects.items)}
              subjectIds={getSubjectIds(sw.subjects.items)}
              joinIds={getJoinIds(sw.subjects.items)}
              state={sw.state}
              county={sw.county}
              crimes={sw.crimes}
              dataTypes={sw.dataTypes}
              content={sw.content}
              isTemplate={sw.isTemplate}
              creationYear={sw.creationYear}
              uploadTimestamp={sw.uploadTimestamp}
              votes={sw.votes}
              relavance={0}
            />
          ))}
        </Container>
      ) : null}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default SWModerator;
