import { Main } from "../../AppStyles";
import styled from "styled-components";
import { useQuiz } from "../../context/quiz-context";
import questions from "../../constants/questions";

const QuestionNO = styled.div`
  display: inline-block;
  padding: 0.2em 0.5em;
`;
// const Timing = styled.div`
//   text-align: end;
//   float: right;
//   padding: 0.2em 0.5em;
// `;
const QuestionWrapper = styled.div`
  padding: 1em;
  min-height: 15vh;
  display: flex;
`;
const QuestionH = styled.h2`
  font-size: 0.8em;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1em;
  gap: 1em;
`;

const Question = () => {
  const { theme } = useQuiz();
  const {
    quizState: { questionIndex },
  } = useQuiz();

  const CardWrapper = styled.div`
    border: 3px solid ${theme};
  `;
  const CardHeaderWrapper = styled.div`
    background: ${theme};
    color: #262729;
  `;

  return (
    <Main>
      <CardWrapper>
        <CardHeaderWrapper>
          <QuestionNO>
            {questionIndex + 1} of 40
            {/*TODO: REMOVE THE HARDCODED 40  */}
          </QuestionNO>
          {/* TODO: ADD THIS TOO */}
          {/* <Timing> {secondsToMMSS(Timer)}</Timing> */}
        </CardHeaderWrapper>
        <QuestionWrapper>
          <QuestionH>
            <pre>{questions[questionIndex].question}</pre>
          </QuestionH>
        </QuestionWrapper>
        <Options />
      </CardWrapper>
    </Main>
  );
};

export default Question;

const Options = () => {
  const { theme } = useQuiz();
  const {
    quizState: { questionIndex },
    quizDispatch,
  } = useQuiz();
  const OptionElement = styled.button`
    border-radius: 3px;
    background: none;
    color: inherit;
    padding: 1em;
    border: 2px solid ${theme};
    &:hover {
      background: ${theme};
      color: #262729;
    }
  `;
  const question = questions[questionIndex];

  const options = [...question.wrong, question.answer];
  //TODO: Shuffle the options

  return (
    <Grid>
      {options.map((item) => (
        <OptionElement
          key={item}
          onClick={() =>
            quizDispatch({ type: "SUBMIT_ANSWER", selected: item })
          }
        >
          {item}
        </OptionElement>
      ))}
    </Grid>
  );
};
// const secondsToMMSS = (seconds) => {
//   var m = Math.floor(seconds / 60);
//   var s = seconds % 60;
//   return (m < 10 ? "0" : "") + m + ":" + ("0" + s).slice(-2);
// };
