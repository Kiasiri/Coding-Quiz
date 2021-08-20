var timer = document.getElementById("timer");
var correct = false;
var main = document.getElementById("main-box");
var question = document.getElementById("question");
var quizCard = document.querySelector("#quizCard");
var btnEl = document.querySelector(".btn");
var btnList = document.getElementById("answer-buttons");
var startButton = document.getElementById("start");
var timeLeft = 10;
var score = document.getElementById("score");
var answer = document.querySelector(".answer-buttons");
var point = 0;
let shuffledQuestions, currentQuestionIndex;

function countDown() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "You have " + timeLeft + " seconds left.";
    console.log(timeLeft);
    if (timeLeft === 0) {
      clearInterval(timerInterval);

      endTime();
    }
  }, 1000);
}

function endTime() {
  timer.textContent = "Your time is up!";
}

startButton.addEventListener("click", startGame);
startButton.addEventListener("click", countDown);
answer.addEventListener("click", function () {
  if (correct) {
    point++;
    score.textContent = point;
    localStorage.setItem("score", score);
  }
});
//above event listener for start button click.
//below function makes start button dissapear and question appear.
function startGame() {
  startButton.classList.add("d-none");
  //shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  //currentQuestionIndex = 0;
  quizCard.classList.remove("d-none");
  console.log(quizCard);
  //nextQuestion();
}
//BORROWED CODE BEGIN
function nextQuestion() {
  //resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct === true) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
//BORROWED CODE END
//question list working not final.
const questions = [
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
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
