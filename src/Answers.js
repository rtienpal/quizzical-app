export default function Answers(props) {
  function handleClick(questionNumberAns, id) {
    props.setQuiz((prevState) => {
      const newArray = prevState.map((a) => {
        // console.log(a.questionNumber, parseInt(questionNumberAns))
        if (a.questionNumber === parseInt(questionNumberAns)) {
          // console.log(a);
          a.answers.map((b) => {
            // console.log(b.id, id)
            if (b.id === parseInt(id)) {
              b.isPressed = !b.isPressed;
            } else {
              b.isPressed = false;
            }
            return b;
          });
        }
        return a;
      });

      return newArray;
    });
  }

  const answerElement = props.answers.map((answer) => {
    return (
      <button
        // className={
        //   answer.isPressed
        //     ? "answers-option answers-option-pressed"
        //     : "answers-option"
        // }
        className={`answers-option ${
          answer.isPressed && "answer-option-pressed"
        }`}
        questionnumberans={answer.questionNumberAns}
        id={answer.id}
        key={answer.id}
        onClick={(event) =>
          handleClick(
            event.target.getAttribute("questionnumberans"),
            event.target.getAttribute("id")
          )
        }
      >
        {answer.answer}
      </button>
    );
  });

  return (
    // <div className="problem problem--answers">
    <div className="quiz--element--answers">{answerElement}</div>
    // </div>
  );
}
