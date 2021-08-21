var timer = document.getElementById("timer");
var main = document.getElementById("main-box");
var questionEl = document.getElementById("question");
var quizCard = document.querySelector("#quizCard");
var btnEl = document.querySelector(".btn");
var btnList = document.getElementById("answer-buttons");
var startButton = document.getElementById("start");
var timeLeft = 60;
var score = document.getElementById("score");
var answerBtns = document.querySelector("#answer-buttons");
var point = 0;
var initials = "";
//why isn't this working
//let correct = true;
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
}

startButton.addEventListener("click", startGame);
startButton.addEventListener("click", countDown);
//Move this function it is getting called 4 times.
/*btnList.addEventListener("click", function () {
  //might have to change btnList
  if (correct) {
    point++;
    score.textContent = "Your score is " + point;
    localStorage.setItem("score", point);
    console.log(point);
    console.log(score);
  }
});*/

//above event listener for start button click.
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
  questionEl.innerText = question.question;
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

  /*Array.from(btnList.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });*/
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
];
