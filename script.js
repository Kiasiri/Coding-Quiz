var timer = document.getElementById("timer");
var correct = false;
var main = document.getElementById("main-box");
var question = document.getElementById("question");
var questionCard = document.getElementById("question-box");
var btnEl = document.querySelector(".btn");
var btnList = document.getElementById("answer-buttons");
var timeLeft = 10;
function countDown() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft + " seconds left.";
    console.log(timeLeft);
    if (timeLeft === 0) {
      clearInterval(timerInterval);

      endTime();
    }
  }, 1000);
}

function endTime() {
  timer.textContent = "Time is up";
}
//countDown(); working timer
var questions = [
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style sheets", correct: true },
      { text: "Complex Style Sheets", correct: false },
      { text: "Confusing Style Sheets", correct: false },
      { text: "Crazy Style Sheets", correct: false },
    ],
  },
  {
    question: "What does HTML satnd for?",
    answers: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "Hyper Translation Language", correct: false },
      { text: "Hilarious Train Laughs", correct: false },
      { text: "Highly Theoretical Lengths", correct: false },
    ],
  },
  {
    question: "If HTML is the skeleton of a web page what is JS?",
    answers: [
      { text: "The Hair and Skin", correct: false },
      { text: "The Muscles", correct: true },
      { text: "The Clothes", correct: false },
      { text: "More bones", correct: false },
    ],
  },
];
