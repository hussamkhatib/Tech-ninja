import styled from "styled-components";
import { useQuiz } from "../../../context/quiz-context";
import questions from "../../../constants/questions";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1em;
  gap: 1em;
`;

const Options = () => {
  const {
    quizState: {
      questionIndex,
      enabledPowerUps: { half },
    },
    quizDispatch,
    theme,
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
  const wrong = half ? question.wrong.slice(0, 1) : question.wrong;

  const options = [...wrong, question.answer];
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

export default Options;
