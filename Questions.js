const questions = [
  {
    question: "What is the primary purpose of JavaScript?",
    correct_answer: "Supports development of dynamic web applications.",
    incorrect_answers: [
      "Enables interactivity on web pages.",
      "Validates forms and facilitates user interaction.",
      "Used for building versatile web projects.",
    ],
    options: [
      "Supports development of dynamic web applications.",
      "Enables interactivity on web pages.",
      "Validates forms and facilitates user interaction.",
      "Used for building versatile web projects.",
    ],
    difficulty: "easy",
  },
  {
    question: "What does the abbreviation 'DOM' stand for?",
    correct_answer: "Document Object Model",
    incorrect_answers: [
      "JavaScript is a programming language used to create dynamic and interactive effects within web browsers.",
      "JavaScript enhances the functionality of web pages by allowing interaction with users and dynamic content manipulation.",
      "JavaScript is primarily used for client-side scripting to make web pages interactive and dynamic.",
    ],
    options: [
      "Document Object Model",
      "JavaScript is a programming language used to create dynamic and interactive effects within web browsers.",
      "JavaScript enhances the functionality of web pages by allowing interaction with users and dynamic content manipulation.",
      "JavaScript is primarily used for client-side scripting to make web pages interactive and dynamic.",
    ],
    difficulty: "easy",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    correct_answer: "var",
    incorrect_answers: ["console.log", "declare.", "set."],
    options: ["var", "console.log", "declare", "set"],
    difficulty: "easy",
  },
  {
    question: "What is a 'closure' in JavaScript?",
    correct_answer: "A function that has access to the outer scope even after the outer function has finished executing",
    incorrect_answers: [
      "A function that has access to all variables defined in its parent function.",
      "A function that executes immediately after it is defined.",
      "A function that returns another function."
    ],
    options: [
      "A function that executes immediately after it is defined.",
      "A function that has access to all variables defined in its parent function.",
      "A function that has access to the outer scope even after the outer function has finished executing",
      "A function that returns another function.",
    ],
    difficulty: "hard",
  },
  {
    question: "How do you use an 'arrow' function in JavaScript?",
    correct_answer: "const func = () => {}",
    incorrect_answers: [
      "const func = => {}",
      "const func = function() {}",
      "function func() {}"
    ],
    options: [
      "const func = function() {}",
      "const func = => {}",
      "const func = () => {}",
      "function func() {}",
    ],
    difficulty: "hard",
  },
  {
    question: "What is 'hoisting' in JavaScript?",
    correct_answer: "A mechanism in JavaScript where declarations are moved to the top of their scope before the code is executed",
    incorrect_answers: [
      "A mechanism in JavaScript where function declarations are moved to the top of their scope before the code is executed.",
      "A mechanism in JavaScript where variable declarations are moved to the top of their scope before the code is executed.",
      "A mechanism in JavaScript where function and variable declarations are moved to the bottom of their scope before the code is executed."
    ],
    options: [
      "A mechanism in JavaScript where function declarations are moved to the top of their scope before the code is executed.",
      "A mechanism in JavaScript where variable declarations are moved to the top of their scope before the code is executed.",
      "A mechanism in JavaScript where declarations are moved to the top of their scope before the code is executed",
      "A mechanism in JavaScript where function and variable declarations are moved to the bottom of their scope before the code is executed.",
    ],
    difficulty: "hard",
  },
  {
    question: "How do you use 'prototype' in JavaScript?",
    correct_answer: "To add methods and properties to all instances of a class",
    incorrect_answers: [
      "To add methods and properties to the prototype object of a function.",
      "To add methods and properties to the parent class.",
      "To add methods and properties to all objects in a JavaScript file."
    ],
    options: [
      "To add methods and properties to the prototype object of a function.",
      "To add methods and properties to all instances of a class",
      "To add methods and properties to the parent class.",
      "To add methods and properties to all objects in a JavaScript file.",
    ],
    difficulty: "hard",
  },
  {
    question: "What is 'event bubbling'?",
    correct_answer:"The process in which an event propagates from the deepest to the highest nested element in the DOM",
    incorrect_answers: [
      "The process in which an event propagates from the highest to the deepest nested element in the DOM.",
      "The process in which an event propagates from the target element to the document root.",
      "The process in which an event propagates from the document root to the target element."
    ],
    options: [
      "The process in which an event propagates from the highest to the deepest nested element in the DOM.",
      "The process in which an event propagates from the deepest to the highest nested element in the DOM",
      "The process in which an event propagates from the target element to the document root.",
      "The process in which an event propagates from the document root to the target element.",
    ],
    difficulty: "hard",
  },
  {
    question: "What is a 'callback' function?",
    correct_answer: "A function that is passed as an argument to another function and is invoked after the first function has completed its execution",
    incorrect_answers: [
      "A function that is called at the beginning of another function.",
      "A function that is invoked immediately after its declaration.",
      "A function that is used to handle errors in asynchronous code."
    ],
    options: [
      "A function that is called at the beginning of another function.",
      "A function that is invoked immediately after its declaration.",
      "A function that is passed as an argument to another function and is invoked after the first function has completed its execution",
      "A function that is used to handle errors in asynchronous code.",
    ],
    difficulty: "hard",
  },
  {
    question: "What is asynchronous programming in JavaScript?",
    correct_answer:"A programming approach where execution does not block, but rather occurs in the background, often utilizing callbacks or promises",
    incorrect_answers: [
      "A programming approach where execution occurs sequentially, blocking further execution until a task is complete.",
      "A programming approach where execution is delayed until a specified time.",
      "A programming approach where execution is parallelized across multiple CPU cores."
    ],
    options: [
      "A programming approach where execution occurs sequentially, blocking further execution until a task is complete.",
      "A programming approach where execution does not block, but rather occurs in the background, often utilizing callbacks or promises",
      "A programming approach where execution is delayed until a specified time.",
      "A programming approach where execution is parallelized across multiple CPU cores.",
    ],
    difficulty: "hard",
  },
];

export default questions;
