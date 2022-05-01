//constant variables to be referenced
const wrapper = document.querySelector(".wrapper");
const navBar = document.getElementsByClassName("nav");
const toggle = document.querySelector(".toggle");
let questionId;
let userCanAnswer;
let currentQuestion;
let score = 0;
let game;

console.log(wrapper);
//Displays burger menu

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

function displayMenu() {
    navIsOpen() ? closeNav() : openNav();
};

toggle.addEventListener('click',displayMenu());

