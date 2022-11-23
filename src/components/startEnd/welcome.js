import React from "react";
import styled from "styled-components";

const Welcome = ({ children, Visible, startGame, Rules }) => {
  const Wrapper = styled.div`
    text-align: center;
    display: ${Visible};
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
    padding: 0.6em 1em;
    margin: 0 0.2em;
  `;
  return (
    <>
      <Wrapper>
        <Heading>A JavaScript Quiz</Heading>
        <Desc>
          you'll have to choose the output of code snippet given in the time
          limit.
        </Desc>
        <Button onClick={Rules}>Rules</Button>
        <Button onClick={startGame}>Start</Button>
      </Wrapper>
      {children}
    </>
  );
};

export default Welcome;
