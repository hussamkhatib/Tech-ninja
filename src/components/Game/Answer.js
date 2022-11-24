import styled from "styled-components";
import { ResultsMain } from "../../AppStyles";
import { useQuiz } from "../../context/quiz-context";
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
const Promotion = styled.p`
  font-size: 0.9em;
  padding: 0 0.4em;
  display: inline;
`;

const Answer = () => {
  const { theme } = useQuiz();
  const {
    quizState: { selected, questionIndex },
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
              <P>You Selected</P>
              <Answer>{selected}</Answer>
              <P>But the answer was</P>
              <Answer>{currentQuestion.answer}</Answer>
            </>
          )}
          <BtnWrapper>
            {/* TODO: fix this */}
            {/* {Promoted[0] && (
              <Promotion>you are promoted to {Promoted[1]} kyu</Promotion>
            )} */}
            <Button onClick={() => quizDispatch({ type: "NEXT_QUESTION" })}>
              Next question
            </Button>
          </BtnWrapper>
        </div>
      </ResultsMain>
    </>
  );
};

export default Answer;
