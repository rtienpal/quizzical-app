import React from "react"

export default function BeforeStart(props) {
  const [formsData, setFormsData] = React.useState({
    category: "Any Category",
    difficulty: "Any Difficulty",
    number: "5 questions",
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormsData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
  }

  React.useEffect(() => {
    generateNewLink()
  }, [formsData])

  const numberVal = {
    "5 questions": "5",
    "10 questions": "10",
    "15 questions": "15",
    "20 questions": "20",
  }

  const difficultyVal = {
    Easy: "easy",
    Medium: "medium",
    Hard: "hard",
  }

  const categoryVal = {
    "Any Category": "",
    "General Knowledge": "9",
    "Entertainment: Books": "10",
    "Entertainment: Film": "11",
    "Entertainment: Music": "12",
    "Entertainment: Musicals and Theatres": "13",
    "Entertainment: Television": "14",
    "Entertainment: Video Games": "15",
    "Entertainment: Board Games": "16",
    "Science and Nature": "17",
    "Science: Computers": "18",
    "Science: Mathematics": "19",
    Mythology: "20",
    Sports: "21",
    Geography: "22",
    History: "23",
    Politics: "24",
    Art: "25",
    Celebrities: "26",
    Animals: "27",
    Vehicles: "28",
    "Entertainment: Comics": "29",
    "Science: Gadgets": "30",
    "Entertainment: Japanese Anime and Manga": "31",
    "Entertainment: Cartoon and Animations": "32",
  }

  function generateNewLink() {
    let newLink = "https://opentdb.com/api.php?"
    let newCategoryLink = ""
    let newDifficultyLink = ""
    let newNumber = ""
    newNumber = newNumber + `amount=${numberVal[formsData.number]}`
    if (formsData.category !== "Any Category") {
      newCategoryLink =
        newCategoryLink + `&category=${categoryVal[formsData.category]}`
    }
    if (formsData.difficulty !== "Any Difficulty") {
      newDifficultyLink =
        newDifficultyLink + `&difficulty=${difficultyVal[formsData.difficulty]}`
    }
    newLink =
      newLink +
      newNumber +
      newCategoryLink +
      newDifficultyLink +
      "&type=multiple"
    props.setApiLink(newLink)
  }

  return (
    <main className="container">
      {/* <div className="blob"></div> */}
      <div className="start start--header">Quizzical</div>
      <div className="start start--description">
        Test your general knowledge! Good Luck!
      </div>
      <div className="form">
        <form>
          <div className="form-category">
            <label htmlFor="category">Select Category</label>
            <br />
            <select
              id="category"
              value={formsData.category}
              onChange={handleChange}
              name="category"
            >
              <option value="Any Category">Any Category</option>
              <option value="General Knowledge">General Knowledge</option>
              <option value="Entertainment: Books">Entertainment: Books</option>
              <option value="Entertainment: Film">Entertainment: Film</option>
              <option value="Entertainment: Music">Entertainment: Music</option>
              <option value="Entertainment: Musicals and Theatres">
                Entertainment: Musicals and Theatres
              </option>
              <option value="Entertainment: Television">
                Entertainment: Television
              </option>
              <option value="Entertainment: Video Games">
                Entertainment: Video Games
              </option>
              <option value="Entertainment: Board Games">
                Entertainment: Board Games
              </option>
              <option value="Science and Nature">Science and Nature</option>
              <option value="Science: Computers">Science: Computers</option>
              <option value="Science: Mathematics">Science: Mathematics</option>
              <option value="Mythology">Mythology</option>
              <option value="Sports">Sports</option>
              <option value="Geography">Geography</option>
              <option value="History">History</option>
              <option value="Politics">Politics</option>
              <option value="Art">Art</option>
              <option value="Celebrities">Celebrities</option>
              <option value="Animals">Animals</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Entertainment: Comics">
                Entertainment: Comics
              </option>
              <option value="Science: Gadgets">Science: Gadgets</option>
              <option value="Entertainment: Japanese Anime and Manga">
                Entertainment: Japanese Anime and Manga
              </option>
              <option value="Entertainment: Cartoon and Animations">
                Entertainment: Cartoon and Animations
              </option>
            </select>
          </div>

          <div className="form-difficulty">
            <label htmlFor="difficulty">Select Difficulty</label>
            <br />
            <select
              id="difficulty"
              value={formsData.difficulty}
              onChange={handleChange}
              name="difficulty"
            >
              <option value="Any Difficulty">Any Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="form-number">
            <label htmlFor="number">Select Number of Questions</label>
            <br />
            <select
              id="number"
              value={formsData.number}
              onChange={handleChange}
              name="number"
            >
              <option value="5 questions">5 questions</option>
              <option value="10 questions">10 questions</option>
              <option value="15 questions">15 questions</option>
              <option value="20 questions">20 questions</option>
            </select>
          </div>
        </form>
      </div>
      <button
        onClick={() => props.setIsStarted(true)}
        className="start start--button"
      >
        Start Quiz
      </button>
    </main>
  )
}
