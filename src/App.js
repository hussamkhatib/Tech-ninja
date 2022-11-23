import React, { useState, useEffect } from "react";
import { StartMain, ResultsMain, Main, colors } from "./AppStyles.js";

import Header from "./components/Header";

import EndGame from "./components/startEnd/EndGame";
import Welcome from "./components/startEnd/Welcome";

import Card from "./components/questionCard/card";
import CardHeader from "./components/questionCard/cardHeader";
import Question from "./components/questionCard/question";
import Options from "./components/questionCard/options";
import { AppProvider } from "./context/app-context.js";

import Streak from "./components/stats/streak";
import Stats from "./components/stats/stats";
import Rank from "./components/stats/rank";
import Life from "./components/stats/life";
import Powerups from "./components/stats/powerups";

import questionData from "./components/data";
import Results from "./components/results";

function App() {
  const [showResults, setShowResults] = useState("startGame");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [rankIndex, setRankIndex] = useState(0);

  const [curStreak, setCurStreak] = useState({
    streak: [],
    powerups: [0, 0, 0, 0],
  });
  const { streak, powerups } = curStreak;
  const [correct, setCorrect] = useState([undefined, undefined]);

  const [lives, setLives] = useState(3);
  const [seconds, setSeconds] = useState(undefined);
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState([true, true, true, true]);

  //powerups
  const [half, setHalf] = useState(true);
  const [promoted, setPromoted] = useState([false]);
  const [random, setRandom] = useState(null);

  const startGame = () => {
    setShowResults(false);
    setSeconds(questionData[0][0].time);
    toggle();
    shuffleCards();
  };

  const loadResult = (e) => {
    toggle();
    const lenCurStreak = curStreak.streak.length;
    const { answer } = questionData[rankIndex][questionIndex];
    const five = (lenCurStreak + 1) / 5;

    if (questionIndex === 4) {
      setPromoted([true, 7 - rankIndex]);
    }

    setShowResults(true);
    setQuestionIndex(questionIndex + 1);

    if (Number.isInteger(five) && lenCurStreak !== 0) {
      setDisabled([(disabled[five - 1] = false), ...disabled].slice(1));
      setCurStreak({
        streak: [...streak],
        powerups:
          five > 4
            ? [
                (powerups[five - 5] = powerups[five - 5] + 2),
                ...powerups,
              ].slice(1)
            : [
                (powerups[five - 1] = powerups[five - 1] + 1),
                ...powerups,
              ].slice(1),
      });
    }
    if (e.target.innerText === answer) {
      setCorrect([true, e.target.innerText]);
      setCurStreak({
        streak: [...streak, streak.length],
        powerups: [...powerups],
      });
    } else {
      setCorrect([false, e.target.innerText, answer]);
      setCurStreak({
        streak: [],
        powerups: [...powerups],
      });
      if (lives - 1 === 0) {
        setShowResults("endGame");
      }
      setLives(lives - 1);
    }
  };

  const nextQuestion = () => {
    setPromoted([false]);
    setHalf(true);
    setShowResults(false);
    setIsActive(true);
    const setBtn = powerups.map((item) => (item === 0 ? true : false));
    setDisabled(setBtn);

    if (
      rankIndex === questionData.length - 1 &&
      questionIndex === questionData[questionData.length - 1].length
    ) {
      setShowResults("endGame");
    } else if (questionIndex === questionData[rankIndex].length) {
      setQuestionIndex(0);
      setRankIndex(rankIndex + 1);
      setSeconds(questionData[rankIndex + 1][0].time);
      shuffleCards(0, 1);
    } else {
      const { time } = questionData[rankIndex][questionIndex];
      setSeconds(time);
      shuffleCards();
    }
  };

  const halfEvent = () => {
    setHalf(false);
    setCurStreak({
      streak: [...streak],
      powerups: [(powerups[0] = powerups[0] - 1), ...powerups].slice(1),
    });
    setDisabled([true, ...disabled.slice(1)]);
  };

  const extraTimeEvent = () => {
    const { time } = questionData[rankIndex][questionIndex];
    setSeconds(seconds + time / 2);
    setCurStreak({
      streak: [...streak],
      powerups: [(powerups[1] = powerups[1] - 1), ...powerups].slice(1),
    });
    setDisabled([(disabled[1] = true), ...disabled].slice(1));
  };

  const freezeEvent = () => {
    setIsActive(false);
    setCurStreak({
      streak: [...streak],
      powerups: [(powerups[2] = powerups[2] - 1), ...powerups].slice(1),
    });
    if (powerups[2] === 0) {
      setDisabled([(disabled[2] = true), ...disabled].slice(1));
    }
  };

  const extraLiveEvent = () => {
    setLives(lives + 1);
    setCurStreak({
      streak: [...streak],
      powerups: [(powerups[3] = powerups[3] - 1), ...powerups].slice(1),
    });
    if (powerups[3] === 0) {
      setDisabled([(disabled[3] = true), ...disabled].slice(1));
    }
  };

  useEffect(() => {
    if (isActive) {
      const interval = setTimeout(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      if (seconds === 0) {
        setLives((lives) => lives - 1);
        setIsActive(false);
        setShowResults("false");
        setQuestionIndex((a) => a + 1);
      }
      if (lives === 0) {
        setShowResults("endGame");
      }
      return () => clearInterval(interval);
    }
  }, [isActive, seconds, lives]);

  function toggle() {
    setIsActive(!isActive);
  }
  function shuffleCards(questionNo = questionIndex, add = 0) {
    setRandom(
      [
        questionData[rankIndex + add][questionNo].answer,
        ...questionData[rankIndex + add][questionNo].wrong,
      ].sort(() => Math.random() - 0.5)
    );
  }
  const active = colors[Math.ceil((rankIndex + 1) / 2) - 1];

  return (
    <AppProvider>
      <Header />

      {showResults === "startGame" && (
        <StartMain>
          <Welcome startGame={startGame} />
        </StartMain>
      )}

      {showResults === "endGame" && (
        <StartMain>
          <EndGame />
        </StartMain>
      )}

      {!showResults && (
        <Main>
          <Card Active={active}>
            <CardHeader
              Active={active}
              questionIndex={questionIndex}
              totalQuestions={questionData[rankIndex].length}
              Timer={seconds}
            />
            <Question
              Question={questionData}
              rankIndex={rankIndex}
              questionIndex={questionIndex}
            />
            <Options
              Option={questionData[rankIndex][questionIndex]}
              loadResult={loadResult}
              Active={active}
              Random={random}
              showAll={half}
            />
          </Card>
          <Stats Active={active}>
            <Rank Active={active} RankKyu={8 - rankIndex} />
            <Streak rect={curStreak.streak} Active={active} />
            <Life Lives={lives} Active={active} />
            <Powerups
              Disabled={disabled}
              PowerupsCount={curStreak.powerups}
              halfEvent={halfEvent}
              extraTimeEvent={extraTimeEvent}
              freezeEvent={freezeEvent}
              extraLiveEvent={extraLiveEvent}
              Active={active}
            />
          </Stats>
        </Main>
      )}

      {showResults === true && (
        <ResultsMain>
          <Results
            nextQuestion={nextQuestion}
            Active={active}
            Correct={correct}
            Promoted={promoted}
          />
        </ResultsMain>
      )}
    </AppProvider>
  );
}

export default App;
