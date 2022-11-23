import { useContext } from "react";
import { AppContext } from "../context/app-context";

export const useRank = () => {
  const { rank } = useContext(AppContext);
  return rank;
};
