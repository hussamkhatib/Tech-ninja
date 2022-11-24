import { Main } from "../../../AppStyles";
import styled from "styled-components";
import { useQuiz } from "../../../context/quiz-context";
import questions from "../../../constants/questions";
import Stats from "./Stats";
import Options from "./Options";
import { useTimer } from "./question.hooks";
import { useState, useEffect, useMemo } from "react";
const QuestionNO = styled.div`
  display: inline-block;
  padding: 0.2em 0.5em;
`;
const Timing = styled.div`
  text-align: end;
  float: right;
  padding: 0.2em 0.5em;
`;
const QuestionWrapper = styled.div`
  padding: 1em;
  min-height: 15vh;
  display: flex;
`;
const QuestionH = styled.h2`
  font-size: 0.8em;
`;

const Question = () => {
  const {
    quizState: {
      questionIndex,
      enabledPowerUps: { freeze },
    },
    theme,
  } = useQuiz();
  const currentQuestion = questions[questionIndex];
  // const timeLeft = useTimer(currentQuestion.time);

  const {
    quizState: { displayResult },
    quizDispatch,
  } = useQuiz();
  const timeLeft = useTimer(currentQuestion.time);

  const CardWrapper = styled.div`
    border: 3px solid ${theme};
  `;
  const CardHeaderWrapper = styled.div`
    background: ${theme};
    color: #262729;
  `;

  return (
    <Main>
      <CardWrapper>
        <CardHeaderWrapper>
          <QuestionNO>
            {questionIndex + 1} of {questions.length}
          </QuestionNO>
          <Timing> {secondsToMMSS(timeLeft)}</Timing>
        </CardHeaderWrapper>
        <QuestionWrapper>
          <QuestionH>
            <pre>{currentQuestion.question}</pre>
          </QuestionH>
        </QuestionWrapper>
        <Options />
      </CardWrapper>
      <Stats />
    </Main>
  );
};

export default Question;

const secondsToMMSS = (seconds) => {
  var m = Math.floor(seconds / 60);
  var s = seconds % 60;
  return (m < 10 ? "0" : "") + m + ":" + ("0" + s).slice(-2);
};
