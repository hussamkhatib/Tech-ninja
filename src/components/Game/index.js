import React from "react";
import { useQuiz } from "../../context/quiz-context";
import Question from "./Question";
import Answer from "./Answer";

const Game = () => {
  const {
    quizState: { displayResult },
  } = useQuiz();
  return displayResult ? <Answer /> : <Question />;
};

export default Game;
