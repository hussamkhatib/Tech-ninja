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
          <Card Active={colors[rankIndex]} Width={'65ch'}>
        
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
      <Streak rect={curStreak}/>
      </Main>

    </Wrapper>
  );
}

export default App;
