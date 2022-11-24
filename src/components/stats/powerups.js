import styled from "styled-components";
import { useQuiz } from "../../context/quiz-context";
import { PowerupsHeading } from "./streakStyles";

const ButtonDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4em;
`;
const Span = styled.span`
  position: absolute;
  right: 0;
  top: 0;
`;
const Powerups = ({
  Disabled,
  PowerupsCount,
  halfEvent,
  extraTimeEvent,
  freezeEvent,
  extraLiveEvent,
}) => {
  const { theme } = useQuiz;
  const Button = styled.button`
    background: #262729;
    border: 2px solid ${theme};
    color: ${theme};
    padding: 0.4em;
    position: relative;
    &:disabled {
    }
  `;

  const buttonText = ["½", "⌛⁺", "❄️", "+1❤️"];
  const PowerupsList = [halfEvent, extraTimeEvent, freezeEvent, extraLiveEvent];
  const powerUps = [
    {
      text: "½",
      event: halfEvent,
    },
    {
      text: "⌛⁺",
      event: extraTimeEvent,
    },
    {
      text: "❄️",
      event: dispatch,
    },
  ];
  return (
    <PowerupsContainer>
      <PowerupsHeading>Powerups</PowerupsHeading>
      <ButtonDiv>
        {buttonText.map((text, index) => (
          <Button
            disabled={Disabled[index]}
            onClick={PowerupsList[index]}
            key={index}
          >
            {text}
            <Span>
              {Disabled[index] === true ? "🔒" : PowerupsCount[index]}
            </Span>
          </Button>
        ))}
      </ButtonDiv>
    </PowerupsContainer>
  );
};

export default Powerups;
