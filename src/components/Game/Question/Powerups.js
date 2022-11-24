import styled from "styled-components";
import { useQuiz } from "../../../context/quiz-context";
import { PowerupsHeading } from "../../stats/streakStyles";

const ButtonDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4em;
`;
const PowerupsContainer = styled.div`
  @media screen and (max-width: 768px) {
    grid-area: 1 / 1 / 2/ 2;
  }
`;
const Span = styled.span`
  position: absolute;
  right: 0;
  top: 0;
`;

const powerUpsArr = [
  {
    text: "½",
    event: "half",
  },
  {
    text: "⌛⁺",
    event: "extraTime",
  },
  {
    text: "❄️",
    event: "freeze",
  },
  {
    text: "⊘",
    event: "skip",
  },
];

const Powerups = () => {
  const {
    theme,
    quizDispatch,
    quizState: { powerUps },
  } = useQuiz();
  const Button = styled.button`
    background: #262729;
    border: 2px solid ${theme};
    color: ${theme};
    padding: 0.4em;
    position: relative;
    &:disabled {
      cursor: not-allowed;
    }
  `;

  return (
    <PowerupsContainer>
      <PowerupsHeading>Powerups</PowerupsHeading>
      <ButtonDiv>
        {powerUpsArr.map(({ text, event }, index) => {
          const disabled = powerUps[event] === 0;
          const handleClick = () => {
            if (event === "skip") {
              quizDispatch({ type: "SKIP_QUESTION" });
            } else {
              quizDispatch({ type: "USE_POWERUP", payload: event });
            }
          };
          return (
            <Button disabled={disabled} onClick={handleClick} key={index}>
              {text}
              <Span>{disabled ? "🔒" : powerUps[event]}</Span>
            </Button>
          );
        })}
      </ButtonDiv>
    </PowerupsContainer>
  );
};

export default Powerups;
