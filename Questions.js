const questions = [
  {
    question: "What is the primary purpose of JavaScript?",
    correct_answers: "Supports development of dynamic web applications.",
    options: [
      "Enables interactivity on web pages.",
      "Validates forms and facilitates user interaction.",
      "Supports development of dynamic web applications.",
      "Used for building versatile web projects.",
    ],
    difficulty: "easy",
  },
  {
    question: "What does the abbreviation 'DOM' stand for?",
    correct_answers: "JavaScript is primarily used for client-side scripting to make web pages",
    options: [
      "JavaScript is a programming language used to create dynamic and interactive effects within web browsers.",
      "JavaScript enhances the functionality of web pages by allowing interaction with users and dynamic content manipulation.",
      "JavaScript is primarily used for client-side scripting to make web pages interactive and dynamic.",
      "The main purpose of JavaScript is to enable dynamic behavior and interactivity in web applications"
    ],
    difficulty: "easy",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    correct_answers: ["var", "let", "const"],
    difficulty: "easy",
  },
  {
    question: "What is a 'closure' in JavaScript?",
    answers: [
      "A function that has access to the outer scope even after the outer function has finished executing",
    ],
    difficulty: "hard",
  },
  {
    question: "How do you use an 'arrow' function in JavaScript?",
    answers: ["const func = () => {}"],
    difficulty: "hard",
  },
  {
    question: "What is 'hoisting' in JavaScript?",
    answers: [
      "A mechanism in JavaScript where declarations are moved to the top of their scope before the code is executed",
    ],
    difficulty: "hard",
  },
  {
    question: "How do you use 'prototype' in JavaScript?",
    answers: ["To add methods and properties to all instances of a class"],
    difficulty: "hard",
  },
  {
    question: "What is 'event bubbling'?",
    answers: [
      "The process in which an event propagates from the deepest to the highest nested element in the DOM",
    ],
    difficulty: "hard",
  },
  {
    question: "What is a 'callback' function?",
    answers: [
      "A function passed as an argument to another function and is invoked after the first function has completed its execution",
    ],
    difficulty: "hard",
  },
  {
    question: "What is asynchronous programming in JavaScript?",
    answers: [
      "A programming approach where execution does not block, but rather occurs in the background, often utilizing callbacks or promises",
    ],
    difficulty: "hard",
  },
];

export default questions;
