import React from "react";
import styled from "styled-components";
import { useQuiz } from "../../context/quiz-context";

const Wrapper = styled.div`
  text-align: center;
`;
const GameOver = styled.h2`
  padding: 0.7em;
  font-size: 2.5em;
`;

const EndGame = () => {
  const rank = useQuiz();

  return (
    <Wrapper>
      <GameOver>Game Over</GameOver>
      <p>you finished {rank} kyu</p>
    </Wrapper>
  );
};

export default EndGame;
