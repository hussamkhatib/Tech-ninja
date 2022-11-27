import React, { useState } from "react";
import styled from "styled-components";
import { Views, useView } from "../../context/view-context";
import Rules from "./Rules";

const Start = () => {
  const { setView } = useView();
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  return (
    <Wrapper>
      {isRulesOpen ? (
        <Rules />
      ) : (
        <>
          <StartWrapper>
            <Heading>A JavaScript Quiz</Heading>
            <Desc>
              you'll have to choose the output of code snippet given in the time
              limit.
            </Desc>
            <Button onClick={() => setIsRulesOpen(true)}>Rules</Button>
            <Button onClick={() => setView(Views.GAME)}>Start</Button>
          </StartWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Start;

const Wrapper = styled.div`
  max-width: 80ch;
  margin: 0 auto;
  padding: 1em;
`;

const Heading = styled.h2`
  padding: 0.8em;
  font-size: 3em;
`;

const Desc = styled.p`
  padding: 0.6em;
  margin-bottom: 0.2em;
`;

const Button = styled.button`
  padding: 0.4em 0.6em;
  margin: 0 0.2em;
  font-size: 0.7em;
  border-radius: 7px;
`;

const StartWrapper = styled.div`
  text-align: center;
`;
