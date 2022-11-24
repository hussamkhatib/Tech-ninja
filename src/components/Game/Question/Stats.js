import { useQuiz } from "../../../context/quiz-context";
import styled from "styled-components";
import { RankHeading } from "../../stats/streakStyles";
import Streak from "./Streak";

const StatsWrapper = styled.div`
  @media screen and (max-width: 768px) {
    grid-row: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 1em;
  }
`;
const RankWrapper = styled.div`
  display: flex;
  padding: 0.2em;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (min-width: 769px) {
    grid-column: 1;
    flex-direction: unset;
  }
`;

const Stats = () => {
  const { theme, rank } = useQuiz();
  const RankDisplay = styled.p`
    background: ${theme};
    color: #262729;
    padding: 0.4em 0.6em;
    border-radius: 20px;
    text-align: center;
    font-size: 0.8em;
  `;
  return (
    <StatsWrapper>
      <RankWrapper>
        <RankHeading>rank</RankHeading>
        <RankDisplay>{`${rank} kyu`}</RankDisplay>
      </RankWrapper>
      <Streak />
    </StatsWrapper>
  );
};

export default Stats;
