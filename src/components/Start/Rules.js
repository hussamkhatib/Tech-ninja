import React from "react";
import styled from "styled-components";
import { Views, useView } from "../../context/view-context";

const Span = styled.span`
  background: #303133;
`;
const Rule = styled.h4`
  padding: 0.4em 0;
`;
const RuleDesc = styled.p`
  font-size: 0.8em;
  padding: 0.2em 0;
`;
const Button = styled.button`
  padding: 0.4em 0.6em;
  margin: 0 0.2em;
  display: flex;
  justify-content: center;
  font-size: 0.7em;
  border-radius: 7px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.4em 0;
`;

const Rules = () => {
  const { setView } = useView();

  return (
    <div>
      <Rule>Rules</Rule>
      <RuleDesc>
        you'll have to choose the output of code snippet given in the time
        limit.
      </RuleDesc>
      <Rule>Ranks</Rule>
      <RuleDesc>
        Each question is set to a Kyu rank, based on difficulty.This system is
        borrowed from{" "}
        <a target="_blank" href="https://www.codewars.com" rel="noreferrer">
          codewars
        </a>
      </RuleDesc>
      <Ranks />
      <Powerups />
      <ButtonWrapper>
        <Button onClick={() => setView(Views.GAME)}>Start</Button>
      </ButtonWrapper>
    </div>
  );
};

export default Rules;

const Ranks = () => {
  const Chip = styled.div`
    background: ${(props) =>
      props.Begineer
        ? "#e6e6e6"
        : props.Novice
        ? "#ECB613"
        : props.Competent
        ? "#3C7EBB"
        : "#866CC7"};
    color: #262729;
    padding: 0.4em 0.6em;
    margin: 0.2em/ 0;
    border-radius: 20px;
    text-align: center;
    font-size: 0.8em;
    width: max-content;
  `;

  return (
    <RanksWrapper>
      <RanksChild>
        <span>Begineer</span>
        <Chip Begineer>8kyu</Chip>
        <Chip Begineer>7kyu</Chip>
      </RanksChild>
      <RanksChild>
        <span>Novice</span>
        <Chip Novice>6kyu</Chip>
        <Chip Novice>5kyu</Chip>
      </RanksChild>
      <RanksChild>
        <span>Competent</span>
        <Chip Competent>4kyu</Chip>
        <Chip Competent>3kyu</Chip>
      </RanksChild>
      <RanksChild>
        <span>Proficient</span>
        <Chip>2kyu</Chip>
        <Chip>1kyu</Chip>
      </RanksChild>
    </RanksWrapper>
  );
};

const RanksWrapper = styled.div`
  display: flex;
  padding: 0.4em 0;
  gap: 1em;
`;

const RanksChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4em 0;
  gap: 0.2em;
`;

const Powerups = () => {
  return (
    <>
      <Rule>Powerups</Rule>
      <RuleDesc>Powerups can be earned after every 5 streak</RuleDesc>
      <PowerupsWrapper>
        <RanksChild>
          ½ <Span>reduce options to 2</Span>
        </RanksChild>
        <RanksChild>
          ⟳ <Span>Reset Timer</Span>
        </RanksChild>
        <RanksChild>
          ❄️ <Span>freeze the timer</Span>
        </RanksChild>
        <RanksChild>
          ⊘ <Span>Skip the current question</Span>
        </RanksChild>
      </PowerupsWrapper>
    </>
  );
};

const PowerupsWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.4em 0;
  gap: 1em;
`;
