import Answers from "./Answers";
import React from "react";

export default function Quiz(props) {
  const [quiz, setQuiz] = React.useState(props.quizImported);

  const quizElement = quiz.map((question) => {
    return (
      <div className="problem">
        <div className="problem problem--question">{question.question}</div>
        <Answers
          answers={question.answers}
          setQuiz={setQuiz}
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
    <>
      <div className="container quiz">{quizElement}</div>
      <div>{JSON.stringify(quiz)}</div>
    </>
  );
}
