import React from "react";

import Header from "./Header";
import Start from "./Start";
import Game from "./Game";
import Result from "./Result";
import { Views, useView } from "../context/view-context";
import styled from "styled-components";
import { useQuiz } from "../context/quiz-context";

const Main = () => {
  const { view } = useView();
  const { theme } = useQuiz();

  return (
    <Wrapper
      style={{
        "--theme": theme,
      }}
    >
      <Header />
      {view === Views.START && <Start />}
      {view === Views.GAME && <Game />}
      {view === Views.RESULT && <Result />}
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  color: var(--theme);
`;
