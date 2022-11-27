import styled from "styled-components";
import { useQuiz } from "../../../context/quiz-context";
import { SvgHeading } from "./StreakStyles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Svg = styled.svg`
  padding: 0.2em;
`;

const Lives = () => {
  const {
    quizState: { lives },
    theme,
  } = useQuiz();

  return (
    <Wrapper>
      <SvgHeading>Lives</SvgHeading>
      <div>
        {Array.from({ length: lives }).map((item, index) => (
          <Svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={theme}
          >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </Svg>
        ))}
      </div>
    </Wrapper>
  );
};

export default Lives;
