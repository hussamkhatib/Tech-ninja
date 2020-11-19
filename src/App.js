import React, { useState,useEffect } from 'react'

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
  
  const [questionIndex,setQuestionIndex] = useState(0);
  const [rankIndex,setRankIndex] = useState(0);
  const [showResults,setShowResults] = useState('startGame');
  const [curStreak,setCurStreak] = useState({
    streak: [],
    powerups: [0,0,0,0]
  })
  const [lives,setLives] = useState(3)
  const [seconds, setSeconds] = useState(undefined);
  const [isActive, setIsActive] = useState(false);
  const [disabled,setDisabled] = useState([true,true,true,true])
  //powerups  🔒
  const [half,setHalf] = useState(true)
  const [freeze,setFreeze] = useState(false)
  

  const startGame  = () => {
    setShowResults(false)
    setSeconds(questionData[0][0].time)
    toggle()
  }

  const loadResult = (e) => {
    toggle();
    const five = (curStreak.streak.length+1) / 5 
      setShowResults(true)     
      setQuestionIndex(questionIndex + 1)
      if(Number.isInteger(five) && curStreak.streak.length !==0){
        setDisabled([   
          disabled[(five)-1]=false
          ,...disabled]
          .slice(1))
        setCurStreak({
          streak: [...curStreak.streak],
          powerups:[curStreak.powerups[(five)-1]
          =curStreak.powerups[(five)-1]+1
          ,...curStreak.powerups]
          .slice(1)
        })
      }
      if(e.target.innerText === questionData[rankIndex][questionIndex].answer){
        setCurStreak({
          streak:([...curStreak.streak,curStreak.streak.length]),
          powerups: [...curStreak.powerups]
        })
      }
      else{
       setCurStreak({
       streak: [],
       powerups: [...curStreak.powerups] 
     })
     if(lives-1 === 0){
      setShowResults('endGame')
    }
       setLives(lives -1)
    
      }
  }

  const nextQuestion = () =>{
    setHalf(true)
    setShowResults(false)
    setIsActive(true)
  if(questionIndex === questionData[rankIndex].length) {
    setQuestionIndex(0)
    setRankIndex(rankIndex+1)
    setSeconds(questionData[rankIndex+1][0].time)
  }else{
    setSeconds(questionData[rankIndex][questionIndex].time)
  }
  }

  const halfEvent = () => {
    setHalf(false)
    setCurStreak({
      streak: [...curStreak.streak],
      powerups: [curStreak.powerups[0]=curStreak.powerups[0]-1,...curStreak.powerups].slice(1)
    })
    if(curStreak.powerups[0] === 0){
      setDisabled([true,...disabled.slice(1)])
    }
  }
  const extraTimeEvent = () =>{
    setSeconds(seconds+(questionData[rankIndex][questionIndex].time/2))
    setCurStreak({
      streak: [...curStreak.streak],
      powerups: [curStreak.powerups[1]=curStreak.powerups[1]-1,...curStreak.powerups].slice(1)
    })
    if(curStreak.powerups[1] === 0){
      setDisabled([disabled[1]=true,...disabled].slice(1))

    }
  } 
  const freezeEvent = () =>{
    setFreeze(true)
    setIsActive(false)
    setCurStreak({
      streak: [...curStreak.streak],
      powerups: [curStreak.powerups[2]=curStreak.powerups[2]-1,...curStreak.powerups].slice(1)
    })
    if(curStreak.powerups[2] === 0){
      setDisabled([disabled[2]=true,...disabled].slice(1))

    }
  } 

  const extraLiveEvent = () => {
    setLives(lives +1)
    setCurStreak({
      streak: [...curStreak.streak],
      powerups: [curStreak.powerups[3]=curStreak.powerups[3]-1,...curStreak.powerups].slice(1)
    })
    if(curStreak.powerups[3] === 0){
      setDisabled([disabled[3]=true,...disabled].slice(1))
    }
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } 
  
    return () => clearInterval(interval);
  }, [isActive]);
  useEffect(()=>{
    if (seconds === 0) {
    setLives(lives=>lives-1)
    setIsActive(false)
    setShowResults('false')
    setQuestionIndex(a=> a + 1)
  }
 
  },[seconds])
 useEffect(()=>{
  if(lives  === 0){
    setShowResults('endGame')
  } 
 },[lives])
  function toggle() {
    setIsActive(!isActive);
  }

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
    : (showResults === 'endGame') ?
    <Wrapper>
      <Header >
          <Logo Active={active}/>
      </Header> 
    </Wrapper>
    :<Wrapper>
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
            Timer={seconds}/>}
            
            {!showResults &&
            <Question 
            Question={questionData} 
            rankIndex={rankIndex} 
            questionIndex ={questionIndex}/>} 
            
            {!showResults ? <Options 
            Option={questionData[rankIndex][questionIndex]} 
            loadResult={loadResult} 
            Active={active}
            showAll={half} />
            :
            <Button nextQuestion={nextQuestion} Active={active} />}

      </Card>

      <Stats Active={active}>
        <Rank Active={active} RankKyu={8-rankIndex}/>
        <Streak rect={curStreak.streak} Active={active} />
        <Life Lives={lives} Active={active}/>
        <Powerups Disabled={disabled} PowerupsCount={curStreak.powerups} halfEvent={halfEvent} 
        extraTimeEvent={extraTimeEvent} freezeEvent={freezeEvent} extraLiveEvent={extraLiveEvent} Active={active}/>
      </Stats>
      </Main>
    </Wrapper>
  );
}

export default App;
