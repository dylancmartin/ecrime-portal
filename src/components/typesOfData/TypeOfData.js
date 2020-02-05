import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-weight: 400;
  font-size: 22px;
  font-family: Helvetica, sans-serif;
`;

const TypeOfData = props => {
  return <Title>{props.title}</Title>;
};

export default TypeOfData;
