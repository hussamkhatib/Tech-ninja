import { useReducer, useContext, createContext } from "react";
import questions from "../constants/questions";
import { colors } from "../constants";

// NOTE: Intentionally not exporting this context
const QuizContext = createContext();

const initialEnabledPowerUps = {
  half: false,
  extraTime: false,
  freeze: false,
};
const initialState = {
  questionIndex: 0,
  currentStreak: 0,
  powerUps: {
    half: 1,
    resetTimer: 1,
    freeze: 1,
    skip: 1,
  },
  enabledPowerUps: initialEnabledPowerUps,
  totalCorrect: 0,
  totalWrong: 0,
  selected: null,
  displayResult: false,
  lives: 3,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SUBMIT_ANSWER": {
      const { selected } = action;
      const { questionIndex } = state;
      const currentQuestion = questions[questionIndex];

      const isCorrect = selected === currentQuestion.answer;

      const newStreak = isCorrect ? state.currentStreak + 1 : 0;
      const newTotalCorrect = isCorrect
        ? state.totalCorrect + 1
        : state.totalCorrect;
      const newTotalWrong = isCorrect ? state.totalWrong : state.totalWrong + 1;
      const newLives = isCorrect ? state.lives : state.lives - 1;

      return {
        ...state,
        currentStreak: newStreak,
        totalCorrect: newTotalCorrect,
        totalWrong: newTotalWrong,
        lives: newLives,
        selected,
        displayResult: true,
        enabledPowerUps: initialEnabledPowerUps,
      };
    }
    case "NEXT_QUESTION": {
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        displayResult: false,
      };
    }
    case "SKIP_QUESTION": {
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        powerUps: {
          ...state.powerUps,
          skip: state.powerUps["skip"] - 1,
        },
        displayResult: false,
        enabledPowerUps: initialEnabledPowerUps,
      };
    }
    case "USE_POWERUP": {
      const { payload } = action;
      return {
        ...state,
        enabledPowerUps: {
          ...state.enabledPowerUps,
          [payload]: true,
        },
        powerUps: {
          ...state.powerUps,
          [payload]: state.powerUps[payload] - 1,
        },
      };
    }
    case "DISABLE_POWERUP": {
      const { powerUp } = action;
      return {
        ...state,
        enabledPowerUps: {
          ...state.enabledPowerUps,
          [powerUp]: false,
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const value = { state, dispatch };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  const { state: quizState, dispatch: quizDispatch } = context;
  const rank = getRankFromQuestionIndex(quizState.questionIndex);
  const theme = colors[getActiveThemeIndexFromRank(rank)];

  return { rank, theme, quizState, quizDispatch };
}

export { QuizProvider, useQuiz };

function getRankFromQuestionIndex(questionIndex) {
  const rank = 8 - Math.floor(questionIndex / 5);
  return rank;
}

function getActiveThemeIndexFromRank(rank) {
  if (rank === 8 || rank === 7) return 0;
  if (rank === 6 || rank === 5) return 1;
  if (rank === 4 || rank === 3) return 2;
  if (rank === 2 || rank === 1) return 3;
}
