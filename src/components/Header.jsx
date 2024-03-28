function Header(props) {
  const { randomQuestion, options, value, onNextQuestion, } = props;

  const handleAnswer = (index) => {
    const clickedAnswer = options[index];
    const correctAnswer = randomQuestion.correct_answer;

    if (Array.isArray(correctAnswer)) {
      if (correctAnswer.includes(clickedAnswer)) {
        document.getElementById(`button_${index}`).classList.add("green");
      } else {
        document.getElementById(`button_${index}`).classList.add("red");
      }
    } else {
      if (clickedAnswer === correctAnswer) {
        document.getElementById(`button_${index}`).classList.add("green");
        alert("Good job u got 1 point!");
      } else {
        document.getElementById(`button_${index}`).classList.add("red");
        alert("Wrong!");
      }
    }
  };

  return (
    <div className="container">
      <div className="quiz-container">
        <div className="header-container">
          <h2>Quiz</h2>
          <p>{value}</p>
        </div>
        <div className="question-container">
          <h1>{randomQuestion?.question}</h1>
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
          <button onClick={onNextQuestion}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
