import React, { useState } from 'react'

import questionData from './components/questiondata'
import  Card from './components/card'
import Question from './components/question'
import Options from './components/options'
import Button from './components/button'
import CardHeader from './components/cardHeader'

import './AppStyles.js';
import Header from './components/header';
import { Wrapper,Main } from './AppStyles'
 
function App() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [hide,setHide] = useState(false);
  const [curStreak,setCurStreak] = useState(0)
  const [rankIndex,setRankIndex] = useState(0);
  
  const loadResult = (e) => {
      setHide(true)
      setQuestionIndex(questionIndex + 1)
      e.target.innerText === questionData[questionIndex].answer? setCurStreak(curStreak + 1) : setCurStreak(0)
  }
  const nextQuestion = () =>{
  setHide(false)
  }
  return (
    <Wrapper>
       <Header />
      <Main>
      <Card>
      {!hide && <CardHeader questionIndex={questionIndex} totalQuestions={questionData.length}/>}
            {!hide && <Question Question={questionData} rankIndex={rankIndex} questionIndex ={questionIndex}/>} 
            {!hide ? <Options Option={questionData} rankIndex={rankIndex} questionIndex={questionIndex} loadResult={loadResult}/>:
            <Button nextQuestion={nextQuestion}/>}
      </Card>
      </Main>

    </Wrapper>
  );
}

export default App;
