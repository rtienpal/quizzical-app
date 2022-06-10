import { useState } from "react";
import Quiz from "./Quiz";

function BeforeStart({ setIsStarted }) {
  return (
    <main className="container">
      {/* <div className="blob"></div> */}
      <div className="start start--header">Quizzical</div>
      <div className="start start--description">
        Test your general knowledge! Good Luck!
      </div>
      <button
        onClick={() => setIsStarted(true)}
        className="start start--button"
      >
        Start Quiz
      </button>
    </main>
  );
}

export default function Start({ quizUnordered }) {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <>
      {isStarted && <Quiz quizImported={quizUnordered} />}
      {!isStarted && <BeforeStart setIsStarted={setIsStarted} />}
    </>
  );
}
