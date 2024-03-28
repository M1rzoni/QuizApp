import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./components/style/Header.css";
import questions from "../Questions.js";

function App() {
  const [counter, setCounter] = useState(60);
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [count, setCount] = useState(0);

  const handleNextQuestion = () => {
    setCount((prevIndex) => (prevIndex + 1) % questions.length);
    document.querySelectorAll(".buttons-container button").forEach((button) => {
      button.classList.remove("green");
      button.classList.remove("red");
    });

    setCounter(60);
  };

  useEffect(() => {
    const randomQuestion = questions[count];
    const options = randomQuestion?.options || [];
    setRandomQuestion(randomQuestion);
    setOptions(options);
  }, [count]);

  useEffect(() => {
    setCounter(60);
  }, [randomQuestion]);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

    if(counter <= 0){
      alert("You got out of the time")
    }
  }, [counter]);

  return (
    <div>
      <Header
        value={counter}
        randomQuestion={randomQuestion}
        options={options}
        question={questions[count]}
        onNextQuestion={handleNextQuestion}
      />
    </div>
  );
}

export default App;
