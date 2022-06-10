import Question from "./Question";
import questionsData from "./questionsData";

export default function Quiz() {
  const quiz = questionsData.results.map((question) => {
    return <Question 
            question={question.question} 
            answer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
    />;
  });

  return (
    <div className="container quiz">{quiz}</div>
  )
}