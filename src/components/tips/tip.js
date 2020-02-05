import React, { useState } from "react";
import styled from "styled-components";
import Vote from "../Vote";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";

const Voting = props => {
  const [votes, setVotes] = useState(props.votes);

  const updateVotes = async (newVoteCount, message) => {
    setVotes(newVoteCount);
    const data = {
      id: props.id,
      votes: newVoteCount
    };
    API.graphql(graphqlOperation(mutations.updateTip, { input: data })).then(
      result => {
        console.log("SUCCESS: " + message);
        console.log(result);
      }
    );
  };

  return (
    <Vote
      votes={votes}
      upvote={() => updateVotes(parseInt(votes) + 1, "+1")}
      downvote={() => updateVotes(parseInt(votes) - 1, "-1")}
    />
  );
};

const TipContents = props => {
  return (
    <div>
      <Title>{props.headline}</Title>

      <SubTitle>{props.body}</SubTitle>
      <PostInfoContainer>
        <User>By {props.authorName}</User>
        <Source>Source: {props.source}</Source>
      </PostInfoContainer>
    </div>
  );
};

const Tip = props => {
  return (
    <Container>
      <Voting {...props} />
      <TipContents {...props} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  margin-bottom: 15px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 7px;
`;
const SubTitle = styled.p`
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 5px;
`;
const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const User = styled.p`
  color: #bfc7d4;
  font-size: 12px;
  margin: 0;
  flex: 1;
`;
const Source = styled.p`
  color: #bfc7d4;
  font-size: 12px;
  font-style: italic;
  margin: 0;
`;

export default Tip;
