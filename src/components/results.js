import React from "react";
import styled from "styled-components";

const Results = ({ nextQuestion, Active, Correct, Promoted }) => {
  const Wrapper = styled.div``;
  const BtnWrapper = styled.div`
    text-align: right;
    margin: 0.8em 0;
  `;
  const Button = styled.button`
    font-size: 0.7em;
    padding: 0.5em 1em;
    background: ${Active};
    border: none;
  `;
  const P = styled.p`
    font-size: 0.7em;
  `;
  const Answer = styled.p`
    border: 3px solid ${Active};
    padding: 0.2em;
    margin: 0.6em 0;
  `;
  const Comment = styled.h2`
    padding: 0.7em 0;
  `;
  const Promotion = styled.p`
    font-size: 0.9em;
    padding: 0 0.4em;
    display: inline;
  `;

  return (
    <Wrapper>
      {Correct[0] ? (
        <>
          <Comment>💯 Perfect !</Comment>
          <P>The answer is indeed</P>
          <Answer>{Correct[1]}</Answer>
        </>
      ) : (
        <>
          <Comment>😞 Not Perfect</Comment>
          <P>You Selected</P>
          <Answer>{Correct[1]}</Answer>
          <P>But the answer was</P>
          <Answer>{Correct[2]}</Answer>
        </>
      )}
      <BtnWrapper>
        {Promoted[0] && (
          <Promotion>you are promoted to {Promoted[1]} kyu</Promotion>
        )}
        <Button onClick={nextQuestion}>Next question</Button>
      </BtnWrapper>
    </Wrapper>
  );
};

export default Results;
