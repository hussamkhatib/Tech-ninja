import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  max-width: 75ch;
  margin: 0 auto;
  padding: 0 1em;
  @media screen and (min-width: 769px) {
    grid-auto-flow: column;
    grid-template-columns: 5fr 1fr;
    padding: 1em;
  }
  gap: 1em;
`;

export const ResultsMain = styled(Main)`
  max-width: 40ch;
  padding: 1.5em;
`;
