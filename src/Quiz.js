import AnswersPre from "./AnswersPre"
import React from "react"
import AnswerPost from "./AnswersPost"

export default function Quiz(props) {
  const [quiz, setQuiz] = React.useState(props.quizImported)
  const [checkQuiz, setCheckQuiz] = React.useState(false)
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  

  function handleSubmit() {
    setQuiz((prevState)=>prevState.map((question)=> {
      if (question.answers.some((answer) => answer.isPressed)) {
        return {
          ...question,
          checkHasAnswer: 3
        }
      } else {
        return {
          ...question,
          checkHasAnswer: 1
        }
      }
    }))
//have to understand why it having to click twice
    let check = false
    check = quiz.every((question) => question.checkHasAnswer === 3)
    console.log(check)
    if (check) {
    setCheckQuiz(true)
    correctQuiz()
    }
  }

  function correctQuiz() {

    let score = 0;
    quiz.map((question) => {
      if (question.answers.some((answer) => (answer.isPressed && answer.isCorrect))) {
        score = score + 1;
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
        {checkQuiz ? <AnswerPost /> : <AnswersPre
          answers={question.answers}
          setQuiz={setQuiz}
          key={question.questionNumber}
          checkHasAnswer={question.checkHasAnswer}
        />
    }
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

  return (
    <div className="quiz--container">
      {quizElement}
      {!checkQuiz && <button className="check--button" onClick={handleSubmit}>
        Check Answers
      </button>}
      {checkQuiz && <div className="finalscore">You scored 3/{correctAnswers} correct answers <button className="restart--button">Play Again</button></div>}
    </div>
  )
}
