import React from "react";
import SearchWarrant from "../components/warrant_card/searchWarrant";
import styled from "styled-components";

/**
 * container of unapproved warrants
 */
const SearchWarrantContainer = props => {
  const data = props.data;
  return (
    <Container>
      {data.map(sw => (
        <SearchWarrant
          key={sw.id}
          id={sw.id}
          subjectName={sw.subjectName}
          state={sw.state}
          crimes={sw.crimes}
          county={sw.county}
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
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default SearchWarrantContainer;
