import React from "react";

import Header from "../../components/Header";
import Start from "../../components/Start";
import Game from "../../components/Game";
import Result from "../../components/Result";
import { StartMain } from "../../AppStyles";
import { Views, useView } from "../../context/view-context";

const Main = () => {
  const { view } = useView();

  return (
    <>
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
    </>
  );
};

export default Main;
