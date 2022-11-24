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

export default Options;
