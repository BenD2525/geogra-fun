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

  function updateLeaderboard() {
        let capitalName = document.getElementById('c-name');
        let capitalScore = document.getElementById('c-score');
        let capitalTime = document.getElementById('c-time');
        let flagName = document.getElementById('f-name');
        let flagScore = document.getElementById('f-score');
        let flagTime = document.getElementById('f-time');
        capitalName.innerText = `${localStorage.getItem('c-name')}`
        capitalScore.innerText = `${localStorage.getItem('c-score')}`
        capitalTime.innerText = `${localStorage.getItem('c-time')}`
        flagName.innerText = `${localStorage.getItem('f-name')}`
        flagScore.innerText = `${localStorage.getItem('f-score')}`
        flagTime.innerText = `${localStorage.getItem('f-time')}`   
  };

  updateLeaderboard();


