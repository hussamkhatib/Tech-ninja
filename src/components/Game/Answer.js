import styled from "styled-components";
import { ResultsMain } from "../../AppStyles";
import { useQuiz } from "../../context/quiz-context";
import { useView, Views } from "../../context/view-context";

import questions from "../../constants/questions";

const BtnWrapper = styled.div`
  text-align: right;
  margin: 0.8em 0;
`;

const P = styled.p`
  font-size: 0.7em;
`;

const Comment = styled.h2`
  padding: 0.7em 0;
`;
const Text = styled.p`
  font-size: 0.9em;
  padding: 0 0.4em;
  display: inline;
`;

const Answer = () => {
  const { theme, rank } = useQuiz();
  const { setView } = useView();
  const {
    quizState: { selected, questionIndex, lives },
    quizDispatch,
  } = useQuiz();
  const Button = styled.button`
    font-size: 0.7em;
    padding: 0.5em 1em;
    background: ${theme};
    border: none;
  `;
  const Answer = styled.p`
    border: 3px solid ${theme};
    padding: 0.2em;
    margin: 0.6em 0;
  `;

  const currentQuestion = questions[questionIndex];
  const isCorrect = selected === currentQuestion.answer;
  return (
    <>
      <ResultsMain>
        <div>
          {isCorrect ? (
            <>
              <Comment>💯 Perfect !</Comment>
              <P>The answer is indeed</P>
              <Answer>{selected}</Answer>
            </>
          ) : (
            <>
              <Comment>😞 Not Perfect</Comment>
              {selected ? (
                <>
                  <P>You Selected</P>
                  <Answer>{selected}</Answer>
                </>
              ) : (
                <P>You did not select any option.</P>
              )}

              <P>But the answer was</P>
              <Answer>{currentQuestion.answer}</Answer>
            </>
          )}
          <BtnWrapper>
            {lives === 0 ? (
              <>
                <Text>You have no lives left.</Text>
                <Button onClick={() => setView(Views.RESULT)}>End Game</Button>
              </>
            ) : (
              <>
                {(questionIndex + 2) % 5 === 1 && (
                  <Text>you are promoted to {rank - 1} kyu</Text>
                )}
                <Button onClick={() => quizDispatch({ type: "NEXT_QUESTION" })}>
                  Next question
                </Button>
              </>
            )}
          </BtnWrapper>
        </div>
      </ResultsMain>
    </>
  );
};

export default Answer;
