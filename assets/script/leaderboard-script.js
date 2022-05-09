//constant variables to be referenced
const wrapper = document.querySelector(".wrapper");
const navBar = document.getElementsByClassName("nav");
const gameType = document.getElementById('capitals');
const modalButtons = Array.from(document.querySelectorAll(".modal-button"));
const capitalsLeaderboard= document.getElementById('capitals-scores');
const flagsLeaderboard= document.getElementById('flags-scores');
const capitalsData= JSON.parse(localStorage.getItem('c-score'));
const flagsData= JSON.parse(localStorage.getItem('f-score'));
const capitalScores= capitalsData.scores;
const flagsScores= flagsData.scores;


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
function populateLeaderboard(score) {
    if (capitalsData) {
        capitalsLeaderboard.innerHTML += `<tr><td>${score.name}</td><td>${score.score}</td><td>${score.time}</td></tr>`
    } else {
        return;
    }
    if (flagsData) {
        flagsLeaderboard.innerHTML += `<tr><td>${score.name}</td><td>${score.score}</td><td>${score.time}</td></tr>`
    } else {
        return;
    }
};

//Displays leaderboard
function displayLeaderboard() {
    if (capitalsData) {
        capitalScores.sort((a,b) => {
            return b.score - a.score;
        });
        capitalScores.forEach(score => populateLeaderboard(score));
    } else {
        return;
    }
    if (flagsData) {
        flagsScores.sort((a,b) => {
            return b.score - a.score;
        });
        flagsScores.forEach(score => populateLeaderboard(score));
    }
};

  displayLeaderboard();
  


