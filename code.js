//create all necessary elements. 


var subQuiz = document.getElementById("submit")

var quizResuts = document.getElementById("result");



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
    question1: "Commonly used data types DO NOT include?",
    choices: {
      a: "strings",
      b: "booleans",
      c: "alerts"
    },
    Answer: "c"
  },

  {
    question2: "The condition in an if or else statement is enclosed within ____.?",
    choices: {
      a: "quotes",
      b: "parentheses",
      c: "square brackets"
    },
    Answer: "b"
  },

  {
    question3: "What is the HTML tag under which one can write the JavaScript code.?",
    choices: {
      a: "scripted",
      b: "script",
      c: "js"
    },
    Answer: "b"
  },

  {
    question4: "The external JavaScript file must contain <script> tag?",
    choices: {
      a: "true",
      b: "false",
      c: "true with quotes"
    },
    Answer: "b"
  },

  {
    question5: "Which of the following is not a reserved word in JavaScript?",
    choices: {
      a: "interface",
      b: "throw",
      c: "program"
    },
    Answer: "c"
  },
];


var timerId;
var timeLeft = 75;

// use oclick to start code and set timer for quiz

$("#Start").on("click", function () {
  alert("Start Quiz!")

  timerId = setInterval(countdown, 1000);
  function countdown() {
    if (timeLeft === -1) {
      clearTimeout(timerId);
    }
    else {
      $("#rem-time").text(timeLeft);
      timeLeft--;
    }
  }
});

// function resultCount(){
//   timeLeft = 75;
// }




//   runQuiz();

for (var i = 0; i <quiQuestions.length; i ++) {
  console.log(quiQuestions[i]);
}

// var quizQes = $("#quiz");
// for (var i = 0; i < quiQuestions.length; i++) {
//   var questionsAsk = $("<div>" + quiQuestions[i] + "</div>");
//   quizQes.append(questionsAsk);
//   var questionsAsk = Math.floor(Math.random() * quiQuestions.length);
//   // Console.log(quiQuestions[i]);
// }
