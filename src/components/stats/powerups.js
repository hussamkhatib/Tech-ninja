import React from "react";
import styled from "styled-components";
import { PowerupsHeading } from "./streakStyles";

const Powerups = ({
  Disabled,
  Active,
  PowerupsCount,
  halfEvent,
  extraTimeEvent,
  freezeEvent,
  extraLiveEvent,
}) => {
  const Button = styled.button`
    background: #262729;
    border: 2px solid ${Active};
    color: ${Active};
    padding: 0.4em;
    position: relative;
    &:disabled {
    }
  `;
  const ButtonDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4em;
  `;
  const PowerupsContainer = styled.div`
    @media screen and (max-width: 768px) {
      grid-area: 1 / 1 / 2/2;
    }
  `;
  const Span = styled.span`
    position: absolute;
    right: 0;
    top: 0;
  `;

  const buttonText = ["½", "⌛⁺", "❄️", "+1❤️"];
  const PowerupsList = [halfEvent, extraTimeEvent, freezeEvent, extraLiveEvent];
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
              {" "}
              {Disabled[index] === true ? "🔒" : PowerupsCount[index]}
            </Span>
          </Button>
        ))}
      </ButtonDiv>
    </PowerupsContainer>
  );
};

export default Powerups;
