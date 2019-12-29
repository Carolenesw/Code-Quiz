//create all necessary elements. 

const progressA = document.getElementById("progress");
var subQuiz = document.getElementById("submit")
var quizQes = document.getElementById("quiz");
var quizResuts = document.getElementById("result");

var timeLeft = 75;



var startQuiz = confirm("Start Quiz");


// quiz display choices and results to store quiz output
function beginQuiz() {

  const answerchoice = [];

  quiQuestions.forEach((askQuestions, solutionNumbers) => {
    //store answer choices 
    const choices = [];
    //slection for each available answers 
    if (letter in askQuestions.choices) {
      choices.push(askQuestions);
    } else {
choices.push(solutionNumbers)
  };


beginQuiz();

subQuiz.addEventListener('click', results);

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

//run function for timer with 15 seconds per question, totallying 75 seconds quiz time
function runTimer() {
  var timeInterval = setInterval(function () {
    secondsLeft--;
    progressA.textContent = secondsLeft + "time left to complete quiz.";

    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      sendMessage();
    }

  }, 75000);
}
function sendMessage() {
  progressA.textContent = " ";

  var butFinish = document.createElement("button");
  butFinish.textContent = "Quiz Complete!";
  comQuiz.appendChild(butFinish);
}


runTimer();

// console.log(runTimer());

