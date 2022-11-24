import { QuizProvider } from "./context/quiz-context.js";
import { ViewProvider } from "./context/view-context.js";
import Main from "./components/Main";

function App() {
  return (
    <QuizProvider>
      <ViewProvider>
        <Main />
      </ViewProvider>
    </QuizProvider>
  );
}

export default App;
