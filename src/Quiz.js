import AnswersPre from "./AnswersPre"
import React from "react"
import AnswerPost from "./AnswersPost"
import ReactDOM from "react-dom/client"
import App from "./App"

export default function Quiz(props) {
  const [quiz, setQuiz] = React.useState(props.quizImported)
  const [triggerCheck, setTriggerCheck] = React.useState(false)
  const [checkQuiz, setCheckQuiz] = React.useState(false)
  const [correctAnswers, setCorrectAnswers] = React.useState(0)

  function handleSubmit() {
    setTriggerCheck(true)
    let check = false
    check = quiz.every((question) => question.checkHasAnswer)
    if (check) {
      setCheckQuiz(true)
      correctQuiz()
    }
  }

  function correctQuiz() {
    let score = 0
    quiz.map((question) => {
      if (
        question.answers.some((answer) => answer.isPressed && answer.isCorrect)
      ) {
        score = score + 1
      }
      return question
    })
    setCorrectAnswers(score)
  }

  /*
{
    const check = quiz.every((question) => 
      question.answers.some((answer) => answer.isPressed)
    )

    console.log(check)
  } */

  const quizElement = quiz.map((question) => {
    return (
      <div className="quiz--element" key={question.questionNumber}>
        <div className="quiz--element--question">{question.question}</div>
        {checkQuiz ? (
          <AnswerPost
            key={question.questionNumber}
            answers={question.answers}
          />
        ) : (
          <AnswersPre
            answers={question.answers}
            setQuiz={setQuiz}
            key={question.questionNumber}
            checkHasAnswer={question.checkHasAnswer}
            triggerCheck={triggerCheck}
          />
        )}
      </div>
    )
  })

  /*

  const quiz = questionsData.results.map((question) => {
    return <Question 
            question={question.question} 
            answer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
    />;
  });

  */

  function restartGame() {
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<App />)
  }

  return (
    <div className="quiz--container">
      {quizElement}
      {!checkQuiz && (
        <button className="check--button" onClick={handleSubmit}>
          Check Answers
        </button>
      )}
      {checkQuiz && (
        <div className="finalscore">
          <div className="finalscore--text">
            You scored {correctAnswers}/{quiz.length} correct answers
          </div>
          <button className="restart--button" onClick={restartGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  )
}
