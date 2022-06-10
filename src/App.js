import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./Quiz";

function App() {

  function clickStart() {
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <Quiz />
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
