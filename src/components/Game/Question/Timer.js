import styled from "styled-components";
import { useQuiz } from "../../../context/quiz-context";
import { useTimer } from "./question.hooks";
import questions from "../../../constants/questions";

const Timing = styled.div`
  text-align: end;
  float: right;
  padding: 0.2em 0.5em;
`;

const Timer = () => {
  const {
    quizState: {
      questionIndex,
      enabledPowerUps: { freeze },
    },
  } = useQuiz();
  const currentQuestion = questions[questionIndex];
  const timeLeft = useTimer(currentQuestion.time);

  console.log(timeLeft);
  return <Timing> {freeze ? "--:--" : secondsToMMSS(timeLeft)}</Timing>;
};

export default Timer;

const secondsToMMSS = (seconds) => {
  var m = Math.floor(seconds / 60);
  var s = seconds % 60;
  return (m < 10 ? "0" : "") + m + ":" + ("0" + s).slice(-2);
};
