import React, { useState,useEffect } from 'react'

import styled from 'styled-components'

import EndGame from './components/startEnd/endGame'
import Welcome from './components/startEnd/welcome'
import Rules from './components/startEnd/rules'

import Card from './components/questionCard/card'
import questionData from './components/data'
import Question from './components/questionCard/question'
import Options from './components/questionCard/options'
import Results from './components/results'
import CardHeader from './components/questionCard/cardHeader'

import './AppStyles.js';
import Header from './components/header/header';
import Logo from './components/header/logo'
import { StartMain,ResultsMain,Main,colors } from './AppStyles'

import Streak from './components/stats/streak'
import Stats from './components/stats/stats'
import Rank from './components/stats/rank'
import Life from './components/stats/life'
import Powerups from './components/stats/powerups'

function App() {
  
  const [questionIndex,setQuestionIndex] = useState(0);
  const [rankIndex,setRankIndex] = useState(0);
  const [showResults,setShowResults] = useState('startGame');
  const [visible,SetVisible] = useState(['none','block'])
  const [curStreak,setCurStreak] = useState({
    streak: [],
    powerups: [0,0,0,0]
  })
  const [correct,setCorrect] = useState([undefined,undefined]);

  const [lives,setLives] = useState(3)
  const [seconds, setSeconds] = useState(undefined);
  const [isActive, setIsActive] = useState(false);
  const [disabled,setDisabled] = useState([true,true,true,true])
  //powerups  🔒
  const [half,setHalf] = useState(true)
  const [freeze,setFreeze] = useState(false)
  const [promoted,setPromoted] = useState([false])
  const [random,setRandom] = useState(null)

  const startGame  = () => {
    setShowResults(false)
    setSeconds(questionData[0][0].time)
    toggle()
    shuffleCards()
  }

  const rules = () => {
    SetVisible(['block','none'])
  }
 
  const loadResult = (e) => {
    toggle();
    if(questionIndex === 4) {
      setPromoted([true,7 -rankIndex])
    }
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
          powerups: five > 4 ?
           [curStreak.powerups[five-5]=curStreak.powerups[five-5]+2,...curStreak.powerups].slice(1)
          :
          [curStreak.powerups[(five)-1]
          =curStreak.powerups[(five)-1]+1
          ,...curStreak.powerups]
          .slice(1)
        })
      }
      if(e.target.innerText === questionData[rankIndex][questionIndex].answer){
        setCorrect([true,e.target.innerText])
        setCurStreak({
          streak:([...curStreak.streak,curStreak.streak.length]),
          powerups: [...curStreak.powerups]
        })
      }
      else{
       setCorrect([false,e.target.innerText,questionData[rankIndex][questionIndex].answer])
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
    setPromoted([false])
    setHalf(true)
    setShowResults(false)
    setIsActive(true)
    const setBtn = curStreak.powerups.map(item=> item === 0? true:false)
    setDisabled(setBtn)
  
  if(rankIndex === questionData.length-1 && questionIndex === questionData[questionData.length-1].length){
    setShowResults('endGame')
  }
  else if(questionIndex === questionData[rankIndex].length) {
    setQuestionIndex(0)
    setRankIndex(rankIndex+1)
    setSeconds(questionData[rankIndex+1][0].time)
    shuffleCards(0,1)
  
  }else{
    setSeconds(questionData[rankIndex][questionIndex].time)
    shuffleCards()
  }
  
  }

  const halfEvent = () => {
    setHalf(false)
    setCurStreak({
      streak: [...curStreak.streak],
      powerups: [curStreak.powerups[0]=curStreak.powerups[0]-1,...curStreak.powerups].slice(1)
    })
    setDisabled([true,...disabled.slice(1)])
  
  } 
  const extraTimeEvent = () =>{
    setSeconds(seconds+(questionData[rankIndex][questionIndex].time/2))
    setCurStreak({
      streak: [...curStreak.streak],
      powerups: [curStreak.powerups[1]=curStreak.powerups[1]-1,...curStreak.powerups].slice(1)
    })
      setDisabled([disabled[1]=true,...disabled].slice(1))
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
    if (isActive) {
     const interval = setTimeout(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000); 
      if (seconds === 0) {
        setLives(lives=>lives-1)
        setIsActive(false)
        setShowResults('false')
        setQuestionIndex(a=> a + 1)
      }
      if(lives  === 0){
        setShowResults('endGame')
      } 
    return () => clearInterval(interval);
  }}, [isActive,seconds,lives]);
  
  function toggle() {
    setIsActive(!isActive);
  }
  function shuffleCards(questionNo=questionIndex,add=0){
    setRandom([questionData[rankIndex+add][questionNo].answer,...questionData[rankIndex+add][questionNo].wrong].sort(()=> Math.random() -.5 ))
  
  }
  const active = colors[Math.ceil((rankIndex+1)/2) - 1]
  //colors[rankIndex+1]
  
  const Wrapper = styled.div`
  color: ${active};
  `
  
console.log(visible)
  return (
    (showResults === 'startGame')? 
    <Wrapper>
      <Header>
          <Logo Active={active}/>
      </Header> 
      <StartMain> 
          <Welcome startGame={startGame} Rules={rules} Visible={visible[1]}>
            <Rules Visible={visible[0]} startGame={startGame}/>
          </Welcome>
      </StartMain>
    </Wrapper>
    : (showResults === 'endGame') ?
    <Wrapper>
      <Header>
          <Logo Active={active}/>
      </Header> 
      <StartMain> 
      <EndGame Rank={8-rankIndex}/>
      </StartMain>
    </Wrapper>

    :(showResults === false) ?
    <Wrapper>
      <Header>
        <Logo Active={active}/>
      </Header>
      <Main>
        <Card Active={active} >
        
          <CardHeader 
          Active={active} 
          questionIndex={questionIndex} 
          totalQuestions={questionData[rankIndex].length}
          Timer={seconds}/>
            
          <Question 
          Question={questionData} 
          rankIndex={rankIndex} 
          questionIndex ={questionIndex}/>
            
          <Options 
          Option={questionData[rankIndex][questionIndex]} 
          loadResult={loadResult} 
          Active={active}
          Random={random}
          showAll={half}/>
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
            :
    <Wrapper>
      <Header >
        <Logo Active={active}/>
      </Header>
      <ResultsMain>
        <Results nextQuestion={nextQuestion} Active={active} Correct={correct} Promoted={promoted}/>
      </ResultsMain>  
    </Wrapper>
  );
}

export default App;
