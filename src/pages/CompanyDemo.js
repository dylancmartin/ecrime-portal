import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GreyButton from "../components/greyButton";
import { useHistory } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import * as query from "../graphql/queries";
import companyBuilderForm from "../components/companyBuilder/companyBuilderForm";

const CompanyDemo = props => {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchCompanies = async () => {
      const result = await API.graphql(
        graphqlOperation(query.listSubjects, { limit: 5000 }) // FIXME: hardcoded number of companies
      );
      console.log("retrieved all the companies");
      console.log(result.data.listSubjects.items);
      setData(result.data.listSubjects.items);
    };

    fetchCompanies();
  }, [id]);

  const handleClick = id => {
    const path = "/subjectofsearch/" + id;
    history.push(path);
  };

  return data ? (
    <div>
      <GreyButton
        buttonText="Create Subject of Search"
        destination={companyBuilderForm}
        style={{ paddingTop: 10, float: "right" }}
      />
      <Title>Subjects of Search</Title>
      {data.map(c => (
        <CompanyButton onClick={() => handleClick(c.id)}>
          {c.name}
        </CompanyButton>
      ))}
    </div>
  ) : null;
};

const Title = styled.h2`
  padding-top: 20px;
`;

const CompanyButton = styled.button`
  border-radius: 10px;
  color: grey;
  border-color: grey;
  padding: 7px;
  margin: 4px;

  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;
  &:focus {
    outline: 0;
  }
  &:hover {
    border-color: black;
    color: black;
  }
`;

export default CompanyDemo;
