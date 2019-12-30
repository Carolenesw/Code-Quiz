//create all necessary elements. 

const progressA = document.getElementById("progress");
var subQuiz = document.getElementById("submit")
var quizQes = document.getElementById("quiz");
var quizResuts = document.getElementById("result");

var timeLeft = 75;



var startQuiz = confirm("Start Quiz");


// quiz display choices and results to store quiz output
// function beginQuiz() {

//   const answerchoice = [];

//   quiQuestions.forEach((askQuestions, solutionNumbers) => {
//     //store answer choices 
//     const choices = [];
//     //slection for each available answers 
//     if (letter in askQuestions.choices) {
//       choices.push(askQuestions);
//     } else {
// choices.push(solutionNumbers)
//   };


// beginQuiz();

// subQuiz.addEventListener('click', results);

// quiz questions, choices and answer for selection. 

var quiQuestions = [
  {
    question: "Commonly used data types DO NOT include?",
    choices: {
      a: "strings",
      b: "booleans",
      c: "alerts"
    },
    Answer: "c"
  },

  {
    question: "The condition in an if or else statement is enclosed within ____.?",
    choices: {
      a: "quotes",
      b: "parentheses",
      c: "square brackets"
    },
    Answer: "b"
  },

  {
    question: "What is the HTML tag under which one can write the JavaScript code.?",
    choices: {
      a: "scripted",
      b: "script",
      c: "js"
    },
    Answer: "b"
  },

  {
    question: "The external JavaScript file must contain <script> tag?",
    choices: {
      a: "true",
      b: "false",
      c: "true with quotes"
    },
    Answer: "b"
  },

  {
    question: "Which of the following is not a reserved word in JavaScript?",
    choices: {
      a: "interface",
      b: "throw",
      c: "program"
    },
    Answer: "c"
  },
];


var maxTime = 75;


function getTimeLeft() {
  var seconds = Math.floor((1000) *75)

return { "seconds" : seconds
};
}
console.log(getTimeLeft());
getTimeLeft();

