export default function AnswersPre(props) {
  // handleclick using declarative and imperative programming
  function handleClick(clickedQuestionNumberAns, clickedId) {
    props.setQuiz((prevState) => {
      const newArray = prevState.map((question) => {
        question.answers.map((answer) => {
          if (answer.questionNumberAns === parseInt(clickedQuestionNumberAns)) {
            if (answer.id === parseInt(clickedId)) {
              answer.isPressed = !answer.isPressed
            } else {
              answer.isPressed = false
            }
          }
          return answer
        })
        if (question.answers.some((answer) => answer.isPressed)) {
          question.checkHasAnswer = true
        } else {
          question.checkHasAnswer = false
        }
        return question
      })
      return newArray
    })
  }

  // handleclick using imperative programming
  // function handleClick(questionNumberAns, id) {
  //   props.setQuiz((prevState) => {
  //     const newArray = prevState.map((a) => {
  //       // console.log(a.questionNumber, parseInt(questionNumberAns))
  //       if (a.questionNumber === parseInt(questionNumberAns)) {
  //         // console.log(a);
  //         a.answers.map((b) => {
  //           // console.log(b.id, id)
  //           if (b.id === parseInt(id)) {
  //             b.isPressed = !b.isPressed;
  //           } else {
  //             b.isPressed = false;
  //           }
  //           return b;
  //         });
  //       }
  //       return a;
  //     });

  //     return newArray;
  //   });
  // }

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
    )
  })

  return (
    <>
      <div className="quiz--element--answers">
        {answerElement}
        {props.triggerCheck === true && props.checkHasAnswer === false && (
          <span className="quiz--element--question--needanswer">
            Please Select an Answer
          </span>
        )}
      </div>
    </>
  )
}
