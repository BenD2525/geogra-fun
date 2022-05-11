//Import question arrays
import {
    questions,
    capitalQuestions
} from "./questions.js";

//constant variables to be referenced
const menu = document.querySelector(".menu");
const questionBox = document.querySelector("#question-box");
const answers = Array.from(document.getElementsByClassName("answer"));
const question = document.querySelector(".question");
const buttons = Array.from(document.querySelectorAll(".answer"));
const scoreEl = document.querySelector("#score-section");
const navBar = document.getElementsByClassName("nav");
const capitalGame = document.getElementById('capitals');
let questionId;
let userCanAnswer;
let currentQuestion;
let score = 0;
let game;
let timer = document.getElementById('timer-box');
const burgerMenu = document.getElementById("toggle");
const menuItems = document.getElementsByClassName("menu-item");

// Works out whether menu is open or not and provides a boolean
const navIsOpen = function () {
    if (menu.classList.contains("nav-open")) {
        return true;
    } else {
        return false;
    }
};

// Adds open class to nav bar and removes closed class
const openNav = () => {
    menu.classList.add("nav-open");
    menu.classList.remove("nav-close");
};

// Adds closed class to nav bar and removes open class
const closeNav = () => {
    menu.classList.remove("nav-open");
    menu.classList.add("nav-close");
};

//Displays burger menu
function displayMenu() {
    navIsOpen() ? closeNav() : openNav();
};

//Add event listener to toggle button
burgerMenu.addEventListener('click', displayMenu);

//Add event listener to nav buttons
Array.from(menuItems).forEach(
    function (menuItem) {
        menuItem.addEventListener("click", displayMenu);
    }
)

// Timer
let totalSeconds = 0
setInterval(function timer() {
    totalSeconds++
    let minute = Math.floor(totalSeconds / 60);
    let timer = document.getElementById('timer-box')
    let seconds = totalSeconds - (minute * 60);
    if (seconds < 10) {
        timer.innerText = `Timer: ${minute}:0${seconds}`;
    } else {
        timer.innerText = `Timer: ${minute}:${seconds}`;
    };
}, 1000);

//Retrieves question from array
function getCurrentQuestion(id) {
    if (capitalGame) {
        return capitalQuestions.find((q) => q.id === id);
    } else {
        return questions.find((q) => q.id === id);
    }
};

//Displays quiz
function displayQuiz() {
    userCanAnswer = true;
    currentQuestion = getCurrentQuestion(questionId);
    scoreEl.innerText = `Score: ${score}`;
    question.innerText = currentQuestion.question;
    if (capitalGame) {
        questionBox.innerText = currentQuestion.capital;
    } else {
        questionBox.style.backgroundImage = `url(${currentQuestion.flagUrl})`;
    }
    buttons.forEach((btn) => {
        btn.innerText = currentQuestion.answer[btn.value];
    });
};


// Next Question
function nextQuestion() {
    if (currentQuestion.next) {
        questionId++;
        displayQuiz();
    } else {
        alert("You've finished!");
        updateLeaderboard();
    }
};

// Plays sound when correct
function myPlayGood() {
    var audio = new Audio("assets/audio/607207__fupicat__congrats.wav");
    audio.play();
};

// Plays sound when incorrect
function myPlayBad() {
    var audio = new Audio("assets/audio/333393__jayfrosting__boo-5-only-a-couple-people.wav");
    audio.play();
};


//Checks whether answer is correct and applies styling/audio/increments score and question
answers.forEach(answer => (
    answer.addEventListener('click', function (e) {
        if (!userCanAnswer) return;
        userCanAnswer = false;
        if (currentQuestion.correct === parseInt(e.target.value)) {
            this.style.backgroundColor = "green";
            myPlayGood();
            score += 100;
            setTimeout(() => {
                nextQuestion();
            }, 1000);
        } else {
            this.style.backgroundColor = "red";
            myPlayBad();
            setTimeout(() => {
                nextQuestion();
            }, 1000);
        }
    })
))

//Starts game
function startGame() {
    questionId = 1;
    displayQuiz();
};

startGame();

function updateLeaderboard() {
    let name = prompt('What is your name?');
    let time = timer.innerText.split(" ");
    let recordedTime = time.pop();
    let result = {
        username: name,
        userScore: score,
        userTime: recordedTime
    };
    if (capitalGame) {
        const score = JSON.parse(localStorage.getItem('c-score'));
        if (score) {
            score.scores.push({
                name: result.username,
                score: result.userScore,
                time: result.userTime
            });
            localStorage.setItem("c-score", JSON.stringify(score));
        } else {
            localStorage.setItem("c-score", JSON.stringify({
                scores: [{
                    name: result.username,
                    score: result.userScore,
                    time: result.userTime
                }]
            }));
        }
    } else {
        const score = JSON.parse(localStorage.getItem('f-score'));
        if (score) {
            score.scores.push({
                name: result.username,
                score: result.userScore,
                time: result.userTime
            });
            localStorage.setItem("f-score", JSON.stringify(score));
        } else {
            localStorage.setItem("f-score", JSON.stringify({
                scores: [{
                    name: result.username,
                    score: result.userScore,
                    time: result.userTime
                }]
            }));
        }
    }
};