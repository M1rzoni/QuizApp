import React from "react";
import "./style/Header.css";

function Header() {
  return (
    <div className="container">
      <div className="quiz-container">
        <div className="header-container">
          <h2>Quiz</h2>
          <p>Time: 60s</p>
        </div>
        <div className="question-container">
            <h1>JavaScript ignores extra spaces</h1>
         </div>
      </div>
    </div>
  );
}

export default Header;
