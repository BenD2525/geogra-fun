//constant variables to be referenced
const questionBox = document.querySelector("#question-box");
const answers = Array.from(document.getElementsByClassName("answer"));
const question = document.querySelector(".question");
const buttons = Array.from(document.querySelectorAll(".answer"));
const scoreEl = document.querySelector("#score-section");
const wrapper = document.querySelector(".wrapper");
const navBar = document.getElementsByClassName("nav");
const openModalButtons= document.querySelectorAll('[data-modal-target');
const closeModalButtons= document.querySelectorAll('[data-close-button]');
const overlay= document.getElementById('overlay');
const gameType = document.getElementById('capitals');
const modalButtons = Array.from(document.querySelectorAll(".modal-button"));
const capitalsLeaderboard= document.getElementById('capitals-scores');
const flagsLeaderboard= document.getElementById('flags-scores');
const capitalsData= JSON.parse(localStorage.getItem('c-score'));
const flagsData= JSON.parse(localStorage.getItem('f-score'));
const capitalScores= capitalsData.scores;
console.log(capitalScores);
let questionId;
let userCanAnswer;
let currentQuestion;
let score = 0;
let game;

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

//Populates each row of the leaderboard
function populateLeaderboard() {
    capitalsLeaderboard.innerHTML= `<tr><td>${capitalScores.name}</td><td>${capitalScores.score}</td><td>${capitalScores.time}</td></tr>`
};

//Displays leaderboard
function displayLeaderboard() {
    if (capitalsData) {
        capitalScores.forEach(populateLeaderboard());
    } else {
        return;
    }
};

  displayLeaderboard();
  


