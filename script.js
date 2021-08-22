var timer = document.getElementById("timer");
var main = document.getElementById("main-box");
var questionEl = document.getElementById("question");
var quizCard = document.querySelector("#quizCard");
var btnEl = document.querySelector(".btn");
var btnList = document.getElementById("answer-buttons");
var startButton = document.getElementById("start");
var timeLeft = 6000;
var score = document.getElementById("score");
var answerBtns = document.querySelector("#answer-buttons");
var point = 0;
var username = "";
var saveScoreBtn = document.querySelector(".savescore");
const highScore = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScore);
let shuffledQuestons, currentQuestionIndex;

function countDown() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "You have " + timeLeft + " seconds left.";
    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      endTime();
    }
  }, 1000);
}

function endTime() {
  timer.textContent = "You have finished the quiz.";
  timeLeft -= 500;
  quizCard.classList.add("d-none");
  saveScoreBtn.classList.remove("d-none");
}

function saveScore() {
  var username = prompt("Enter your name to save your score.");
  localStorage.setItem(username, point);
  document.location.reload();
}

saveScoreBtn.addEventListener("click", saveScore);
startButton.addEventListener("click", startGame);
startButton.addEventListener("click", countDown);
//above event listener for start button click starts timer and starts game.
//below function makes start button dissapear and question appear.
function startGame() {
  startButton.classList.add("d-none");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  quizCard.classList.remove("d-none");
  nextQuestion();
}

function nextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
  questionEl.innerText = question.question; //Not sure why questions.question doesn't work and instead question.question works.
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerBtns.appendChild(button);
  });
}
function resetState() {
  clearStatusClass(document.body);
  while (btnList.firstChild) {
    btnList.removeChild(btnList.firstChild);
  }
}
function selectAnswer(e) {
  var selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  if (questions.length > currentQuestionIndex + 1) {
    currentQuestionIndex++;
    nextQuestion();
  } else {
    endTime();
  }
}
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct === "true") {
    element.classList.add("correct");

    point++;
    score.textContent = "Your score is " + point;
    localStorage.setItem("score", point);
    console.log("point = ", point);
    console.log(score);
  } else {
    element.classList.add("wrong");
    timeLeft -= 5;
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
function cycleQuestion() {}
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
    question: "What does HTML stand for?",
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
  {
    question: "What is BootStrap?",
    answers: [
      { text: "A Coding Language", correct: false },
      { text: "A popular CSS framework", correct: true },
      { text: "Twitters operating system", correct: false },
      { text: "A javascript library", correct: false },
    ],
  },
  {
    question: "What is air velocity of an unladden swallow?",
    answers: [
      { text: "I don't know that?!", correct: false },
      { text: "African or European", correct: true },
    ],
  },
];
