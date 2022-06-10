import "./App.css";
import questionsData from "./questionsData";
import Start from "./Start";

function App() {
  function shuffleArray(arr) {
    return arr
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  }
  // all last answers are the correct answer
  const quizOrdered = questionsData.results.map((question, index) => {
    return {
      questionNumber: index + 1,
      question: question.question,
      answers: [
        {
          id: 1,
          answer: question.incorrect_answers[0],
          isCorrect: false,
          isPressed: false,
          questionNumberAns: index + 1,
        },
        {
          id: 2,
          answer: question.incorrect_answers[1],
          isCorrect: false,
          isPressed: false,
          questionNumberAns: index + 1,
        },
        {
          id: 3,
          answer: question.incorrect_answers[2],
          isCorrect: false,
          isPressed: false,
          questionNumberAns: index + 1,
        },
        {
          id: 4,
          answer: question.correct_answer,
          isCorrect: true,
          isPressed: false,
          questionNumberAns: index + 1,
        },
      ],
    };
  });

  // correct answer is shuffled in the answers array
  const quizUnordered = quizOrdered.map((question) => {
    return {
      questionNumber: question.questionNumber,
      question: question.question,
      answers: shuffleArray(question.answers),
    };
  });

  return <Start quizUnordered={quizUnordered} />;
}

export default App;
