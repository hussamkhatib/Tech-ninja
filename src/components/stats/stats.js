import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    grid-row: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 1em;
  }
`;

const Stats = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Stats;
