//constant variables to be referenced
const menu = document.querySelector(".menu");
const navBar = document.getElementsByClassName("nav");
const gameType = document.getElementById('capitals');
const modalButtons = Array.from(document.querySelectorAll(".modal-button"));
const capitalsLeaderboard= document.getElementById('capitals-scores');
const flagsLeaderboard= document.getElementById('flags-scores');
const capitalsData= JSON.parse(localStorage.getItem('c-score'));
const flagsData= JSON.parse(localStorage.getItem('f-score'));
const burgerMenu= document.getElementById("toggle");
const menuItems= document.getElementsByClassName("menu-item");


// Works out whether menu is open or not and provides a boolean
const navIsOpen = function() {
    if (menu.classList.contains ("nav-open")) {
        return true;
    }
    else {
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
menuItems.forEach(
    function(menuItem) {
        menuItems.addEventListener("click", displayMenu);
    }
);

//Populates each row of the leaderboard
function populateCapitalsLeaderboard(score) {
    if (capitalsData) {
        capitalsLeaderboard.innerHTML += `<tr><td>${score.name}</td><td>${score.score}</td><td>${score.time}</td></tr>`
    } else {
        return;
    }
};

function populateFlagsLeaderboard(score) {
    if (flagsData) {
        flagsLeaderboard.innerHTML += `<tr><td>${score.name}</td><td>${score.score}</td><td>${score.time}</td></tr>`
    } else {
        return;
    }
};

//Displays leaderboard
function displayCapitalsLeaderboard() {
    if (!capitalsData) {
        return;
    } else {
        let capitalScores= capitalsData.scores;
        let sortedCapitalsScores= capitalScores.sort((a,b) => {
        return b.score - a.score;
    });
        sortedCapitalsScores.forEach(score => populateCapitalsLeaderboard(score));
    }
};

function displayFlagsLeaderboard() {
    if (!flagsData) {
        return;
    } else {
        let flagsScores= flagsData.scores;
        let sortedFlagsScores= flagsScores.sort((a,b) => {
            return b.score - a.score;
        });
        sortedFlagsScores.forEach(score => populateFlagsLeaderboard(score));   
    }
};

displayCapitalsLeaderboard();
displayFlagsLeaderboard();
  


