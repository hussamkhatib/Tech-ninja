import React, { useState,useEffect,useRef } from 'react'

import styled from 'styled-components'
import  Card from './components/card'
import questionData from './components/questiondata'
import Question from './components/question'
import Options from './components/options'
import Button from './components/button'
import CardHeader from './components/cardHeader'

import Welcome from './components/welcome.js/welcome'
import StartButton from './components/welcome.js/startButton'

import './AppStyles.js';
import Header from './components/header';
import Logo from './components/logo'
import { StartMain,Main,colors } from './AppStyles'

import Streak from './components/streak'
import Stats from './components/stats'
import Rank from './components/rank/rank'
import Life from './components/life/life'
import Powerups from './components/powerups/powerups'


function App() {
  
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResults,setShowResults] = useState('startGame');
  const [curStreak,setCurStreak] = useState([])
  const [rankIndex,setRankIndex] = useState(0);
  const [lives,setLives] = useState(3)
  const [timer, setTimer] = useState(null
    );


  const startGame = () => {
    setShowResults(false)
    setTimer(questionData[0][0].time)
  }

  const loadResult = (e) => {
      setShowResults(true)
      setQuestionIndex(questionIndex + 1)
  
      if(e.target.innerText === questionData[rankIndex][questionIndex].answer){
        setCurStreak([...curStreak,curStreak.length]) 
      }
      else{
       setCurStreak([])
       setLives(lives -1)
      }
  }
  console.log(curStreak)
  const nextQuestion = () =>{
  setShowResults(false)
 
  if(questionIndex === questionData[rankIndex].length) {
    setQuestionIndex(0)
    setRankIndex(rankIndex + 1)
    setTimer(questionData[rankIndex][0].time)
  }else{
    setTimer(questionData[rankIndex][questionIndex].time)
  }
  }

  const id = useRef(null);
  const clear = () => {
     clearInterval(id.current);
  };
  useEffect(() => {
    id.current = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);
  
  useEffect(() => {
    if (timer === 0) {
      setShowResults(true)
      setQuestionIndex(prev => prev + 1)
      setLives(lives =>lives - 1)
      setCurStreak([])
      clear()
    }
  }, [timer]);
  const active = colors[rankIndex]
  
  const Wrapper = styled.div`
  color: ${active};
  `


  return (
    (showResults === 'startGame')? 
    <Wrapper>
      <Header >
          <Logo Active={active}/>
      </Header>
      <StartMain>
        <Card Width={'100%'}>
          <Welcome >
            <StartButton startGame={startGame} />
          </Welcome>
        </Card>
      </StartMain>
    </Wrapper>
    : 
    <Wrapper>
        <Header >
          <Logo Active={active}/>
        </Header>
        <Main>
          <Card Active={active} >
        
            {!showResults && 
            <CardHeader 
            Active={active} 
            questionIndex={questionIndex} 
            totalQuestions={questionData[rankIndex].length}
            Timer={timer}/>}
            
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
            Active={active}/>
            :
            <Button nextQuestion={nextQuestion} Active={active} />}

      </Card>

      <Stats Active={active}>
        <Rank Active={active} RankKyu={8-rankIndex}/>
        <Streak rect={curStreak} Active={active} />
        <Life Lives={lives} Active={active}/>
        <Powerups Disabled={true} Active={active}/>
      </Stats>
      </Main>
    </Wrapper>
  );
}

export default App;
