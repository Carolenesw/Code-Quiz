//create varibales for the main ID selectors progress and button selectors from html file. 

var progressA = document.getElementById("progress");
var quizQes = document.getElementById("quiz");
var buttOne = document.getElementById("btn0");
var buttTwo = document.getElementById("btn1");
var buttThr = document.getElementById("btn2");

// add variables for for the questions and status of the user 

var userStatus = 0;
var correctAnswers = 0;
var progress, quiz, question, choices, answer, ansA, ansB, ansC;


  var startQuiz = confirm("Start Quiz");

//quiz questions, choices and answer in array for selection. 

var quizQuestions = {
  
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts"],
    answer: "alerts"
  ,
  
    question: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "parentheses", "square brackets"],
    answer: "parentheses"
  ,
  
    question: "What is the HTML tag under which one can write the JavaScript code.",
    choices: ["scripted", "script", "js"],
    answer: "script"
  ,
  
    question: "The external JavaScript file must contain <script> tag.",
    choices: ["true", "false", "false with quotes"],
    answer: "false"
  ,
  
    question: " Which of the following is not a reserved word in JavaScript",
    choices: ["interface", "throws", "program"],
    answer: "program"

};



  alert("Question 1" + quizQuestions["question1"]);
//  alert ("Question 1" + quizQuestions["question1"]);