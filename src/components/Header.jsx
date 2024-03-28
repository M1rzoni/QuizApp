import "./style/Header.css";
import questions from "../../Questions";
import { useState } from "react";

function Header() {
 
    const [isClicked, setClickedButton] = useState(null);

 const randomIndex = Math.floor(Math.random() * questions.length);

 const randomQuestion = questions[randomIndex];

 const options = randomQuestion?.options || [];

 const handleAnswer = (event) => {
    if(randomQuestion.options == randomQuestion.correct_answers){
         event.target.classList.add("green");
    }
 }

 
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
            {options.map((option, index) => <button   onClick={handleAnswer} key={index}>{option}</button>)}
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
