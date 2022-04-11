//constant variables to be referenced
const flagBox = document.querySelector("#flag-box");
const question = document.querySelector(".question");
const buttons = Array.from(document.querySelectorAll(".answer"));
const scoreEl = document.querySelector("#score-section");
let questionId;
let userCanAnswer;
let currentQuestion;
let score=0;
let game;

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
    flagBox.style.backgroundImage = `url(${currentQuestion.flagUrl})`;
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "white";
      btn.innerText = currentQuestion.answer[btn.value];
    });
};

// Next Question

function nextQuestion() {
    if (currentQuestion.next) {
        questionId++;
        score += 100;
        displayQuiz();
    } else {
        alert("You've finished!");
    }
}

function checkAnswer(e) {
    if (!userCanAnswer) return;
    userCanAnswer = false;
    if (currentQuestion.correct === parseInt(e.value)) {
        e.style.backgroundColor = "green";
        setTimeout(() => {
            nextQuestion();
        }, 1000);
    } else {
        e.style.backgroundColor = "red";
        setTimeout(() => {
            nextQuestion();
          }, 1000);
    }
};

function startGame() {
    questionId = 1;
    displayQuiz();
  }
  
  startGame();


