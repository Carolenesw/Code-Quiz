

  var quizQuestions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      question: "What is the HTML tag under which one can write the JavaScript code.",
      choices: ["javascript", "scripted", "script", "js"],
      answer: "script"
    },
    {
      question: "The external JavaScript file must contain <script> tag.",
      choices: ["true", "false", "true with quotes", "false with quotes"],
      answer: "false"
    },
    {
      question: " Which of the following is not a reserved word in JavaScript",
      choices: ["interface", "throws", "program", "short"],
      answer: "program"
    }
  ];

  var userStatus = 0;
  var correctAnswers = 0;
  var progress, quiz, question, choices, answer, ansA, ansB, ansC, ansD;
  