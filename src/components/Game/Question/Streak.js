import { useQuiz } from "../../../context/quiz-context";
import styled from "styled-components";
import { StreakHeading, Wrapper } from "../../stats/streakStyles";

const SvgContainer = styled.svg`
  padding: 0.2em;
  align-items: center;
`;

const x = [0, 6.5, 13, 19.5, 0];

const Streak = () => {
  const { theme } = useQuiz();
  const {
    quizState: { currentStreak },
  } = useQuiz();
  const SvgDiv = styled.div`
    border: 1px solid ${theme};
    min-width: 120px;
    height: 40px;
    border-radius: 4px;
    display: flex;
  `;

  return (
    <Wrapper>
      <StreakHeading>streak : {currentStreak}</StreakHeading>
      <SvgDiv>
        {Array.from({ length: Math.floor(currentStreak / 5) + 1 }).map(
          (svgItem, index) => (
            <SvgContainer
              key={index}
              {...svgItem}
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="30"
            >
              {Array.from({
                length: currentStreak - index * 5 >= 5 ? 5 : currentStreak % 5,
              }).map((rectItem, rectIndex) => (
                <rect
                  key={rectIndex}
                  {...rectItem}
                  width="5"
                  height="30"
                  fill={theme}
                  rx="2.5"
                  x={x[rectIndex]}
                  transform={
                    rectIndex === 4
                      ? "matrix(0.707107 0.707107 -0.622796 0.782384 20.2665 1.83136)"
                      : undefined
                  }
                />
              ))}
            </SvgContainer>
          )
        )}
      </SvgDiv>
    </Wrapper>
  );
};

export default Streak;
