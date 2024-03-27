import "./style/Header.css";
import questions from "../../Questions";

function Header() {

 const randomIndex = Math.floor(Math.random() * questions.length);

 const randomQuestion = questions[randomIndex];

 
  return (
    <div className="container">
      <div className="quiz-container">
        <div className="header-container">
          <h2>Quiz</h2>
          <p>Time: 60s</p>
        </div>
        <div className="question-container">
          <h1>{randomQuestion.question}</h1>
        </div>
         <div className="buttons-container">
            <button></button>
            <button>False</button>
            <button>Sometimes</button>
            <button>Everytime</button>
         </div>
         <div className="next-container">
            <p>2 of 9 Question</p>
            <button>Next</button>
         </div>
      </div>
    </div>
  );
}

export default Header;
