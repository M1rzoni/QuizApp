import "./style/Header.css";
import questions from "../../Questions";
import { useTimer } from "react-timer-hook";


function Header() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  const options = randomQuestion?.options || [];

  const handleAnswer = (index) => {
    const clickedAnswer = options[index];

    if (Array.isArray(randomQuestion.correct_answer)) {
      if (randomQuestion.correct_answer.includes(clickedAnswer)) {
        document.getElementById(`button_${index}`).classList.add("green");
      }
    } else {
      if (clickedAnswer === randomQuestion.correct_answer) {
        document.getElementById(`button_${index}`).classList.add("green");
      }
    }
  };

  function MyTimer({ expiryTimestamp }) {
    const {
      totalSeconds,
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  

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
          {options.map((option, index) => (
            <button
              id={`button_${index}`} 
              key={index}
              onClick={() => handleAnswer(index)}
            >
              {option}
            </button>
          ))}
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
