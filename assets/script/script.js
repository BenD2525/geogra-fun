//constant variables to be referenced
const questionBox = document.querySelector("#question-box");
const question = document.querySelector(".question");
const buttons = Array.from(document.querySelectorAll(".answer"));
const scoreEl = document.querySelector("#score-section");
const wrapper = document.querySelector(".wrapper");
const navBar = document.querySelectorAll(".nav");
const openModalButtons= document.querySelectorAll('[data-modal-target]');
const closeModalButtons= document.querySelectorAll('[data-close-button]');
const overlay= document.getElementById('overlay');
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
};
*/
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

// Question array

 const questions = [
    {   
        id: 1,
        flagUrl: "../assets/images/india-flag-small.png",
        question: "The above is the flag of which country?",
        answer: {
            1: "China",
            2: "India", 
            3: "Egypt",
            4: "Rwanda"
        },
        correct: 2,
        next: true
    },
    {   
        id: 2,
        flagUrl: "../assets/images/argentina-flag-small.png",
        question: "The above is the flag of which country?",
        answer: {
            1: "Argentina",
            2: "Cameroon",
            3: "Gabon",
            4: "Ireland"
        },
        correct: 1,
        next: true
    },
    {   
        id: 3,
        flagUrl: "../assets/images/belgium-flag-small.png",
        question: "The above is the flag of which country?",
        answer: {
            1: "Scotland",
            2: "Germany",
            3: "Belgium",
            4: "Netherlands"
        },
        correct: 3,
        next: true
    },
    {
        id: 4,
        flagUrl: "../assets/images/australia-flag-small.png",
        question: "The above is the flag of which country?",
        answer: {
            1: "New Zealand",
            2: "Australia",
            3: "Peru",
            4: "Tonga"
        },
        correct: 2,
        next: true
    },
    {
        id: 5,
        flagUrl: "../assets/images/spain-flag-small.png",
        question: "The above is the flag of which country?",
        answer: {
            1: "Spain",
            2: "Portugal",
            3: "Greece",
            4: "Moldova"
        },
        correct: 1,
        next: true
    },
    {
        id: 6,
        flagUrl: "../assets/images/romania-flag-small.png",
        question: "The above is the flag of which country?",
        answer: {
            1: "Germany",
            2: "Romania",
            3: "Moldova",
            4: "Latvia"
        },
        correct: 2,
        next: true
    },
    {
        id: 7,
        flagUrl: "../assets/images/czech-republic-flag-small.png",
        question: "The above is the flag of which country?",
        answer: {
                1: "Czechia",
                2: "Barbados",
                3: "Kazakhstan",
                4: "Israel"
            },
        correct: 1,
        next: true
        },
    {
        id: 8,
        flagUrl: "../assets/images/monaco-flag-small.png",
        question: "The above is the flag of which country?",
        answer: {
                    1: "Iceland",
                    2: "Ethiopia",
                    3: "Poland",
                    4: "Monaco"
                },
        correct: 4,
        next: true
            },
    {
        id: 9,
        flagUrl: "../assets/images/jamaica-flag-small.png",
        question: "The above is the flag of which country?",
        answer: {
                    1: "Zimbabwe",
                    2: "Panama",
                    3: "Jamaica",
                    4: "Nigeria"
                    },
        correct: 3,
        next: true
            },
    {
        id: 10,
        flagUrl: "../assets/images/angola-flag-small.png",
        question: "The above is the flag of which country?",
        answer: {
                    1: "Angola",
                    2: "Indonesia",
                    3: "Somalia",
                    4: "Nepal"
                    },
        correct: 1,
        next: false
    },
];

const capitalQuestions = [
    {   
        id: 1,
        capital: "Kyiv",
        question: "The above is the capital of which country?",
        answer: {
            1: "Turkey",
            2: "Ukraine", 
            3: "Luxembourg",
            4: "Jordan"
        },
        correct: 2,
        next: true
    },
    {   
        id: 2,
        capital: "Talinn",
        question: "The above is the capital of which country?",
        answer: {
            1: "Estonia",
            2: "Latvia",
            3: "Macedonia",
            4: "Slovakia"
        },
        correct: 1,
        next: true
    },
    {   
        id: 3,
        capital: "Lisbon",
        question: "The above is the capital of which country?",
        answer: {
            1: "Greece",
            2: "Fiji",
            3: "Spain",
            4: "Portugal"
        },
        correct: 4,
        next: true
    },
    {
        id: 4,
        capital: "Seoul",
        question: "The above is the capital of which country?",
        answer: {
            1: "South Korea",
            2: "China",
            3: "North Korea",
            4: "Japan"
        },
        correct: 1,
        next: true
    },
    {
        id: 5,
        capital: "Cairo",
        question: "The above is the capital of which country?",
        answer: {
            1: "Eqypt",
            2: "Algeria",
            3: "Peru",
            4: "Chile"
        },
        correct: 1,
        next: true
    },
    {
        id: 6,
        capital: "Budapest",
        question: "The above is the capital of which country?",
        answer: {
            1: "Russia",
            2: "Romania",
            3: "Hungary",
            4: "Slovenia"
        },
        correct: 3,
        next: true
    },
    {
        id: 7,
        capital: "Tel-Aviv",
        question: "The above is the capital of which country?",
        answer: {
                1: "Madagascar",
                2: "Croatia",
                3: "Palestine",
                4: "Israel"
            },
        correct: 4,
        next: true
        },
    {
        id: 8,
        capital: "Cardiff",
        question: "The above is the capital of which country?",
        answer: {
                    1: "Ireland",
                    2: "Wales",
                    3: "Scotland",
                    4: "Canada"
                },
        correct: 2,
        next: true
            },
    {
        id: 9,
        capital: "Wellington",
        question: "The above is the capital of which country?",
        answer: {
                    1: "New Zealand",
                    2: "Australia",
                    3: "Cook Islands",
                    4: "South Africa"
                    },
        correct: 1,
        next: true
            },
    {
        id: 10,
        capital: "Antananarivo",
        question: "The above is the capital of which country?",
        answer: {
                    1: "Madagascar",
                    2: "Chad",
                    3: "Mali",
                    4: "Bolivia"
                    },
        correct: 1,
        next: false
    },
];

function getCurrentQuestion(id) {
    return questions.find((q) => q.id === id);
  };

function displayQuiz() {
    userCanAnswer = true;
    currentQuestion = getCurrentQuestion(questionId);
    scoreEl.innerText = `Score: ${score}`;
    question.innerText = currentQuestion.question;
    questionBox.style.backgroundImage = `url(${currentQuestion.flagUrl})`;
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
    }
}

function myPlayGood(){
    var audio = new Audio("assets/audio/607207__fupicat__congrats.wav");
    audio.play();
}

function myPlayBad(){
    var audio = new Audio("assets/audio/333393__jayfrosting__boo-5-only-a-couple-people.wav");
    audio.play();
}

function checkAnswer(e) {
    if (!userCanAnswer) return;
    userCanAnswer = false;
    if (currentQuestion.correct === parseInt(e.value)) {
        e.style.backgroundColor = "green";
        myPlayGood();
        score += 100;
        setTimeout(() => {
            nextQuestion();
        }, 1000);
    } else {
        e.style.backgroundColor = "red";
        myPlayBad();
        setTimeout(() => {
            nextQuestion();
          }, 1000);
    }
};

function startGame() {
    questionId = 1;
    displayQuiz();
  };
  
  startGame();


