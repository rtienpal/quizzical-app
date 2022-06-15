export default function AnswersPost(props) {
    const answerElementPost = props.answers.map((answer) => {
        let answerElementPostClassName = ''
        if(answer.isPressed === true && answer.isCorrect === false) {
            answerElementPostClassName = "answer-option-incorrect"
        } else if (answer.isCorrect === true) {
            answerElementPostClassName = "answer-option-correct"
        }
        return (
            <button
            className={`answers-option ${answerElementPostClassName}`}
            key={answer.id}
            >
                {answer.answer}
                </button>
        )
    })

    
  return (
    
      <div className="quiz--element--answers">
        {answerElementPost}
      </div>
    
  )
    













}