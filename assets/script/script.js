//Import question arrays
import {questions, capitalQuestions} from "./questions.js"

//constant variables to be referenced
const questionBox = document.querySelector("#question-box");
const answers = Array.from(document.getElementsByClassName("answer"))
const question = document.querySelector(".question");
const buttons = Array.from(document.querySelectorAll(".answer"));
const scoreEl = document.querySelector("#score-section");
const wrapper = document.querySelector(".wrapper");
const navBar = document.querySelectorAll(".nav");
const openModalButtons= document.querySelectorAll('[data-modal-target]');
const closeModalButtons= document.querySelectorAll('[data-close-button]');
const overlay= document.getElementById('overlay');
const gameType = document.getElementById('capitals');
let questionId;
let userCanAnswer;
let currentQuestion;
let score = 0;
let game;

/*
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal= document.querySelector(button.dataset.modalTarget);
        openModal(modal)
    })
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    }) 
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal= button.closest('.modal');
        closeModal(modal)
    })
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
};

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
};*/

// Burger Menu
const navIsOpen = function() {
    if (wrapper.classList.contains ("nav-open")) {
        return true;
    }
    else {
        return false;
    }
};
const openNav = () => {
    wrapper.classList.add("nav-open");
    wrapper.classList.remove("nav-close");
};
const closeNav = () => {
    wrapper.classList.remove("nav-open");
    wrapper.classList.add("nav-close");
};

//Displays burger menu
function displayMenu() {
    navIsOpen() ? closeNav() : openNav();
};

// Timer
let totalSeconds= 0
setInterval(function timer() {
    totalSeconds++
    let minute = Math.floor(totalSeconds / 60);
    let timer= document.getElementById('timer-box')
    let seconds= totalSeconds - (minute * 60);
        if (seconds < 10) {
            timer.innerText= `Timer: ${minute}:0${seconds}`;
        }
        else {
    timer.innerText= `Timer: ${minute}:${seconds}`;
        };
},1000);

//Retrieves question from array
function getCurrentQuestion(id) {
    if (gameType) {
    return capitalQuestions.find((q) => q.id === id);   
    } else { 
    return questions.find((q) => q.id === id);
  }};

//Displays quiz
function displayQuiz() {
    userCanAnswer = true;
    currentQuestion = getCurrentQuestion(questionId);
    scoreEl.innerText = `Score: ${score}`;
    question.innerText = currentQuestion.question;
    if (gameType) {
        questionBox.innerText= currentQuestion.capital;
    } else {
    questionBox.style.backgroundImage = `url(${currentQuestion.flagUrl})`;
    }
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "white";
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
        displayLeaderboard();
    }
};

// Plays sound when correct
function myPlayGood(){
    var audio = new Audio("assets/audio/607207__fupicat__congrats.wav");
    audio.play();
};

// Plays sound when incorrect
function myPlayBad(){
    var audio = new Audio("assets/audio/333393__jayfrosting__boo-5-only-a-couple-people.wav");
    audio.play();
};


//Checks whether answer is correct and applies styling/audio/increments score and question
answers.forEach(answer => (
    answer.addEventListener('click', function(e) {
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

  function displayLeaderboard() {
      let name = prompt ('What is your name?');
      sessionStorage.setItem('name', name)
      sessionStorage.setItem('score', score)
      updateLeaderboard();
  };

  function updateLeaderboard() {
      let leaderboard= document.getElementById('leaderboard');
      leaderboard.innerText = `${sessionStorage.getItem('name')}, ${sessionStorage.getItem('score')}`
  };


