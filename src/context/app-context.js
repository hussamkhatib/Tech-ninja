import { useState } from "react";

import { createContext } from "react";
import { colors } from "../constants";
import styled from "styled-components";

const AppContext = createContext();

function AppProvider({ children }) {
  const [rank, setRank] = useState(8);
  const theme = colors[getActiveThemeIndexFromRank(rank)];

  const Wrapper = styled.div`
    color: ${theme};
  `;

  // NOTE: you *might* need to memoize this value

  return (
    <AppContext.Provider value={{ rank, theme }}>
      <Wrapper>{children}</Wrapper>
    </AppContext.Provider>
  );
}

export { AppProvider };

function getActiveThemeIndexFromRank(rank) {
  if (rank === 8 || rank === 7) return 0;
  if (rank === 6 || rank === 5) return 1;
  if (rank === 4 || rank === 3) return 2;
  if (rank === 2 || rank === 1) return 3;
}
