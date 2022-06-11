import Answers from "./Answers";
import React from "react";

export default function Quiz(props) {
  const [quiz, setQuiz] = React.useState(props.quizImported);

  function handleSubmit() {}
  /* still working on it 
    const check = 1;
    for (let i = 0; i < quiz.length; i++) {
      sort.quiz[i] (elem=>elem.isPressed===true) ?
      
    }
    if (check === 1) {
      console.log('ok')
    } else {
      console.log('not filled')
    }
  }
*/

  const quizElement = quiz.map((question) => {
    return (
      <div className="quiz--element">
        <div className="quiz--element--question">{question.question}</div>
        <Answers
          answers={question.answers}
          setQuiz={setQuiz}
          key={question.questionNumber}
          // quiz={quiz}
        />
      </div>
    );
  });

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
      <button className="check--button" onClick={handleSubmit}>
        Check Answers
      </button>
    </div>
  );
}
