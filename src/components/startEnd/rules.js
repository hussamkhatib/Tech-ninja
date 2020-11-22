import React from 'react'
import styled from 'styled-components'


const Rules = ({ Visible,startGame,Color }) => {
    const Wrapper =  styled.div`
    display:${Visible};
    `
    const GridContainer =  styled.ul`
    display: grid;
    grid-template-columns:${props =>props.Rank ? 'repeat(4,150px)' : '1fr 1fr'  } ;`
    const GridChild = styled.li`
    list-style:none;
    padding:0.4em;`
    const RankDisplay = styled.p`
    background: ${props=> props.Begineer? "#e6e6e6":props.Novice ? '#ECB613' :props.Competent? '#3C7EBB':'#866CC7'};
    color: #262729; 
    padding: .4em 0.6em;
    margin: 0.2em 0;
    border-radius: 20px;
    text-align: center;
    font-size:0.8em;
    width:max-content`
    const Span = styled.span`
    background:#303133;`
    const Rule = styled.h4`
    0.4em 0;`
    const RuleDesc = styled.p`
    font-size:.8em;
    padding: 0.2em 0;`
    const Button = styled.button`
    padding:.6em 1em;
    margin:0 .2em;
    display:flex;
    justify-content:center;
    `
    const ButtonWrapper = styled.div`
    display:flex;
    justify-content:center;`
    return (
        <Wrapper>
            <Rule>Rule</Rule>
           <RuleDesc>
           you'll have to choose the output of code snippet given in the time limit.
           </RuleDesc>
           <Rule>Ranks</Rule>
                <RuleDesc>Each question is set to a Kyu rank, based on difficulty.This system is borrowed from <a target="_blank" href="https://www.codewars.com"  rel="noreferrer">codewars</a></RuleDesc>
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
               <GridChild>½ <Span>reduce options to 2</Span></GridChild>
               <GridChild>⌛⁺ <Span>get 50% extra of the time</Span></GridChild>
               <GridChild>❄️ <Span>freeze the timer</Span></GridChild>
               <GridChild>+1❤️ <Span>get an extra live</Span></GridChild>
           </GridContainer>
           <ButtonWrapper>
           <Button onClick={startGame}>Start</Button>
           </ButtonWrapper>
        </Wrapper>
    )
}

export default Rules
