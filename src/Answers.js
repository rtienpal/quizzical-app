export default function Answers(props) {
  const answerElement = props.answers.map((answer) => {
    return (
      <button
        className={
          answer.isPressed
            ? "answers-option answers-option-pressed"
            : "answers-option"
        }
        id={answer.id}
        ispressed={answer.isPressed ? "true" : "false"}
        onClick={()=> props.setQuiz({
          oi: "shad",
        })}
        // onClick={() =>
        //   props.setQuiz((prevState) => ({
        //     ...prevState,

        //     answers: {
        //       id: answer.id,
        //       test: "test"
        //     },
        //   }))
        // }
      >
        {answer.answer}
      </button>
    );
  });

  return (
    <div className="problem problem--answers">
      {/* <div className="question">{quiz.question}</div> */}
      <div className="problem problem--answers answer">{answerElement}</div>
    </div>
  );
}
