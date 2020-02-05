import React from "react";
import Tip from "../components/tips/tip";
import styled from "styled-components";

const TipsContainer = props => {
  const data = props.data;
  return (
    <Container>
      {data.map(t => (
        <Tip {...t} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export default TipsContainer;
