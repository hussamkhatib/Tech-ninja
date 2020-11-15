import React, { useState } from 'react'

import styled from 'styled-components'
import  Card from './components/card'
import questionData from './components/questiondata'
import Question from './components/question'
import Options from './components/options'
import Button from './components/button'
import CardHeader from './components/cardHeader'

import './AppStyles.js';
import Header from './components/header';
import Logo from './components/logo'
import { Main,colors } from './AppStyles'

import Streak from './components/streak'
import Stats from './components/stats'
import {StreakHeading } from './components/streakStyles'
import Rank from './components/rank/rank'
import Life from './components/life/life'
import Powerups from './components/powerups/powerups'

function App() {
  
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResults,setShowResults] = useState(false);
  const [curStreak,setCurStreak] = useState([])
  const [rankIndex,setRankIndex] = useState(0);


  const loadResult = (e) => {
      setShowResults(true)
      setQuestionIndex(questionIndex + 1)
  
      e.target.innerText === questionData[rankIndex][questionIndex].answer? 
      setCurStreak([...curStreak,curStreak.length]) : setCurStreak([])
  }
  //console.log(curStreak)
  const nextQuestion = () =>{
  setShowResults(false)
  if(questionIndex === questionData[rankIndex].length) {
    setQuestionIndex(0)
    setRankIndex(rankIndex + 1)
  }
  }

  

  const Wrapper = styled.div`
  color: ${colors[rankIndex]};
  `
 
  const StreakContainer = styled.div`
  border: 1px solid ${colors[rankIndex]};
  width: 100%;
  height: 40px;
  border-radius: 4px;
  display: flex;`

  return (
    (showResults === 'startGame')? 
    <Wrapper>
      <Header >
          <Logo Active={colors[rankIndex]}/>
      </Header>
      <Main>
        <Card Width={'100%'}>
     
        </Card>
      </Main>
    </Wrapper>
    : 
    <Wrapper>
        <Header >
          <Logo Active={colors[rankIndex]}/>
        </Header>
        <Main>
          <Card Active={colors[rankIndex]} >
        
            {!showResults && 
            <CardHeader 
            Active={colors[rankIndex]} 
            questionIndex={questionIndex} 
            totalQuestions={questionData[rankIndex].length}/>}
            
            {!showResults && 
            <Question 
            Question={questionData} 
            rankIndex={rankIndex} 
            questionIndex ={questionIndex}/>} 
            
            {!showResults ? <Options 
            Option={questionData} 
            rankIndex={rankIndex} 
            questionIndex={questionIndex} 
            loadResult={loadResult} 
            Active={colors[rankIndex]}/>
            :
            <Button nextQuestion={nextQuestion} Active={colors[rankIndex]} />}

      </Card>

      <Stats Active={colors[rankIndex]}>
        <Rank Active={colors[rankIndex]} RankKyu={8-rankIndex}/>
        <StreakHeading>streak</StreakHeading>
        <StreakContainer>
          <Streak rect={curStreak} Active={colors[rankIndex]}/>
        </StreakContainer>
        <Life Lives={3} Active={colors[rankIndex]}/>
        <Powerups />
      </Stats>
      </Main>

    </Wrapper>
  );
}

export default App;
