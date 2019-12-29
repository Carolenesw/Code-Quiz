//create all necessary elements. 

const progressA = document.getElementById("progress");
var subQuiz = document.getElementById("submit")
var quizQes = document.getElementById("quiz");
var quizResuts = document.getElementById("result");

var timeLeft = 75;


// add variables for for the questions and status of the user 

var userStatus = 0;
var correctAnswers = 0;
var progress, quiz, question, choices, answer, ansA, ansB, ansC;


var startQuiz = confirm("Start Quiz");


// quiz display and results
function beginQuiz() {

  const answerchoice = [];

  quiQuestions.forEach((askQuestions, solutionNumbers) => {
    const choices = [];

    for(letter in askQuestions.choices) {

      choices.push(
        
      );
    }

  })
}

function results() {}


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




  
  
 
  
   
function runTimer() {
  var timeInterval = setInterval(function()
  {
    secondsLeft --;
    progressA.textContent = secondsLeft + "time left to complete quiz.";

    if(secondsLeft === 0) {
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

console.log(runTimer());

function array() {
  if(myArray === myArray[0]);
  chioces[0];
} if (myArray === myArray[1]); {
  choices[1];
}
array();