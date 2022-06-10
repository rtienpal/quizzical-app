import React from "react";

export default function Question(props) {
  const answersOptions = props.incorrectAnswers;

  React.useEffect(() => {
    answersOptions.push(props.answer);
  }, [0]);

  const [isPressed, setIsPressed] = React.useState(0);

  function shuffleArray(arr) {
    return arr
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  }

  const answers = answersOptions.map((answer, id) => {
    return (
      <button
        className="answers-option"
        id={id}
        isPressed={isPressed}
        onClick={() => setIsPressed(isPressed === 0 ? 1 : 0)}
      >
        {answer}
      </button>
    );
  });

  const shuffledanswers = shuffleArray(answers);

  return (
    <div className="quiz-item">
      <div className="question">{props.question}</div>
      <div className="answer-options">{shuffledanswers}</div>
    </div>
  );
}
