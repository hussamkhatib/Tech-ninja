import { useState } from "react";

import { useContext, createContext } from "react";

// enum used to determine which view to show
const Views = {
  START: 0,
  GAME: 1,
  RESULT: 2,
};

const ViewContext = createContext();

function ViewProvider({ children }) {
  const [view, setView] = useState(Views.START);

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}

function useView() {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
}

export { ViewProvider, useView, Views };
