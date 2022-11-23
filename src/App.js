import { AppProvider } from "./context/app-context.js";
import { ViewProvider } from "./context/view-context.js";
import Main from "./components/Main";

function App() {
  return (
    <AppProvider>
      <ViewProvider>
        <Main />
      </ViewProvider>
    </AppProvider>
  );
}

export default App;
