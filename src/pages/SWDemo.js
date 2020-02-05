import React, { useContext, useState, useEffect } from "react";
import Search from "../components/search/search";
import { UserContext } from "../Usercontext";
import { Auth } from "aws-amplify";
import axios from "axios";

import StatusBar from "../components/search/statusBar";
import GreyButton from "../components/greyButton";
import WarrantUploader from "../components/warrant_uploader/warrantUploader";
import SearchWarrantsResults from "../containers/SWContainerCS";
import styled from "styled-components";
import { nullLiteral } from "@babel/types";

const SWDemo = props => {
  const [data, setData] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  // const userGroup = useContext(UserContext);

  const fetchWarrants = async query => {
    const url = `https://e6qt4vf7vi.execute-api.us-west-2.amazonaws.com/dev/search/?q=${query}`;
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    const headers = {
      "Content-Type": "application/json",
      Authorization: token
    };
    console.log(headers);

    const result = await axios(url, { headers: headers });
    setData(result.data);
    setHasSearched(true);
    console.log(result);
  };

  const handleSubmit = query => {
    console.log("GET warrants: " + query);
    fetchWarrants(query);
  };

  const RenderResults = () => {
    if (hasSearched) {
      return (
        <div>
          <StatusBar
            numResults={data.hits.found}
            searchTime={data.status.timems}
          />
          <SearchWarrantsResults hits={data.hits.hit} />
        </div>
      );
    }
    return null;
  };

  return (
    <MainContainer>
      {/* <Upload>
        <GreyButton
          buttonText="Upload Search Warrant"
          destination={WarrantUploader}
        />
      </Upload> */}
      <Search handleSubmit={handleSubmit} />
      <RenderResults />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin-top: 20px;
`;

const Upload = styled.div`
  float: right;
`;

export default SWDemo;
