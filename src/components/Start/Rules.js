import React from "react";
import styled from "styled-components";
import { Views, useView } from "../../context/view-context";

const GridChild = styled.li`
  list-style: none;
  padding: 0.4em;
  font-size: 0.7em;
`;

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
  padding: 0.6em 1em;
  margin: 0 0.2em;
  display: flex;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.4em 0;
`;

const Rules = ({ startGame }) => {
  const GridContainer = styled.ul`
    display: grid;
    grid-template-columns: ${(props) =>
      props.Rank ? "repeat(auto-fill, minmax(70px, 1fr))" : "1fr 1fr"};
    padding: 0.4em 0;
    gap: 1em;
  `;

  const RankDisplay = styled.p`
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
      <GridContainer Rank>
        <GridChild>
          Begineer
          <RankDisplay Begineer>8kyu</RankDisplay>
          <RankDisplay Begineer>7kyu</RankDisplay>
        </GridChild>
        <GridChild>
          Novice
          <RankDisplay Novice>6kyu</RankDisplay>
          <RankDisplay Novice>5kyu</RankDisplay>
        </GridChild>
        <GridChild>
          Competent
          <RankDisplay Competent>4kyu</RankDisplay>
          <RankDisplay Competent>3kyu</RankDisplay>
        </GridChild>
        <GridChild>
          Proficient
          <RankDisplay>2kyu</RankDisplay>
          <RankDisplay>1kyu</RankDisplay>
        </GridChild>
      </GridContainer>
      <Rule>Powerups</Rule>

      <RuleDesc>Powerups can be earned after every 5 streak</RuleDesc>
      <GridContainer>
        <GridChild>
          ½ <Span>reduce options to 2</Span>
        </GridChild>
        <GridChild>
          ⌛⁺ <Span>get 50% extra of the time</Span>
        </GridChild>
        <GridChild>
          ❄️ <Span>freeze the timer</Span>
        </GridChild>
        <GridChild>
          +1❤️ <Span>get an extra live</Span>
        </GridChild>
      </GridContainer>
      <ButtonWrapper>
        <Button onClick={() => setView(Views.GAME)}>Start</Button>
      </ButtonWrapper>
    </div>
  );
};

export default Rules;
