import { useReducer, useContext, createContext } from "react";
import questions from "../constants/questions";
import { colors } from "../constants";

// NOTE: Intentionally not exporting this context
const QuizContext = createContext();

const initialState = {
  questionIndex: 0,
  currentStreak: 0,
  //   powerUps: {
  //     skip: 0,
  //     fiftyFifty: 0,
  //     doublePoints: 0,
  //   },
  totalCorrect: 0,
  totalWrong: 0,
  selected: null,
  displayResult: false,
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

      return {
        ...state,
        currentStreak: newStreak,
        totalCorrect: newTotalCorrect,
        totalWrong: newTotalWrong,
        selected,
        displayResult: true,
      };
    }
    case "NEXT_QUESTION": {
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        displayResult: false,
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
