import { useEffect, useState } from "react";
import { useQuiz } from "../../../context/quiz-context";

function useTimer(totalTime) {
  const {
    quizState: {
      displayResult,
      enabledPowerUps: { freeze },
    },
    quizDispatch,
  } = useQuiz();
  const [timer, setTimer] = useState(totalTime);

  useEffect(() => {
    if (displayResult) return;
    if (timer === 0) {
      quizDispatch({ type: "SUBMIT_ANSWER", selected: null });
      return;
    }
    if (!freeze) {
      const interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, displayResult, quizDispatch, freeze]);

  return displayResult ? null : timer;
}

export { useTimer };
