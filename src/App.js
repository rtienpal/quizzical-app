import "./App.css";
import React, {useState} from "react";
import ReactDOM from "react-dom";
import Quiz from "./Quiz";
import questionsData from "./questionsData";

function App() {

  

  

  
  function shuffleArray(arr) {
    return arr
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  }
// all last answers are the correct answer
  const quizOrdered = questionsData.results.map((question) => {
    return {
      question: question.question,
      answers: [{
        id: 1,
        answer: question.incorrect_answers[0],
        isCorrect: false,
        isPressed: false,
      },
      {
        id: 2,
        answer: question.incorrect_answers[1],
        isCorrect: false,
        isPressed: false,
      },
      {
        id: 3,
        answer: question.incorrect_answers[2],
        isCorrect: false,
        isPressed: false,
      },
      {
        id: 4,
        answer: question.correct_answer,
        isCorrect: true,
        isPressed: false,
      }]
    };
  });

  // correct answer is shuffled in the answers array
  const quizUnordered = quizOrdered.map(question => {
    return {
      question: question.question,
      answers: shuffleArray(question.answers)
    }
  })



  







  function clickStart() {
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <Quiz 
        quizImported={quizUnordered}/>
    )
  }

  return ( 
    
    <main className="container">
      {/* <div className="blob"></div> */}
      <div className="start start--header">Quizzical</div>
      <div className="start start--description">
        Test your general knowledge! Good Luck!
      </div>
      <button onClick={clickStart} className="start start--button">
        Start Quiz
      </button>
    </main>
  );
}

export default App;
