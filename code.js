//create all necessary elements. 


var subQuiz = document.getElementById("submit")
var quizQes = document.getElementById("quiz");
var quizResuts = document.getElementById("result");




// var startQuiz = confirm("Start Quiz");



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

var quiQuestions1 = $("quiQuestions");

for (var i = 0; i < quiQuestions.length; i++) {
  var newQuizQues = $("")
}


//set timer seconds to run quiz 
var today = new Date();
var runTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var maxTime = 75000;

var timer = Date.parse(maxTime) - Date.parse(new Date());
var seconds = Math.floor((runTime/1000) * 15);
  var minutes = Math.floor((runTime/1000/60) * 60);

function getTimeLeft(maxTime) {
return { 
  "minutes": minutes,
  "seconds" : seconds
};
}
console.log(getTimeLeft());
getTimeLeft(runTime).seconds

// set timer output to run time in seconds 
var progressA = document.getElementById(progress);

function startTimer(id, maxTime) {
  var timerInterval = setInterval (function() {
  var timer = getTimeLeft(maxTime);
  progress.innerHTML = "minutes:"  + timer.second + "seconds: " + timer.seconds;
  
  if(timer.total == 0) {
    clearInterval(timerInterval);
  }
  }, 1000);
  
}
console.log(startTimer("id"));  
startTimer(progress, runTime);

