import React from "react";

import Header from "../../components/Header";
import Start from "../../components/Start";
import Game from "../../components/Game";
import Result from "../../components/Result";
import { StartMain } from "../../AppStyles";
import { Views, useView } from "../../context/view-context";
import styled from "styled-components";
import { useQuiz } from "../../context/quiz-context";

const Main = () => {
  const { view } = useView();
  const { theme } = useQuiz();

  // TODO: memoize this
  const Wrapper = styled.div`
    color: ${theme};
  `;

  return (
    <Wrapper>
      <Header />
      {view === Views.START && (
        <StartMain>
          <Start />
        </StartMain>
      )}
      {view === Views.GAME && <Game />}
      {view === Views.RESULT && (
        <StartMain>
          <Result />
        </StartMain>
      )}
    </Wrapper>
  );
};

export default Main;
