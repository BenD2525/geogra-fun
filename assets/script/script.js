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
        correct: 2
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
        correct: 1
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
        correct: 3
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
        correct: 2
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
        correct: 1
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

function checkAnswer(buttons) {
    
}

function startGame() {
    questionId = 1;
    displayQuiz();
  }
  
  startGame();

   /* COMMENTED OUT let question = 1

    if (question == 1) {
        document.getElementById('answer-one').innerText = "China"
        document.getElementById('answer-two').innerText = "India"
        document.getElementById('answer-three').innerText = "Egypt"
        document.getElementById('answer-four').innerText = "Rwanda"
    }
    else if (question == 2) {
        document.getElementById('answer-one').innerText = "Argentina"
        document.getElementById('answer-two').innerText = "Cameroon"
        document.getElementById('answer-three').innerText = "Gabon"
        document.getElementById('answer-four').innerText = "Ireland"
    }
    else if (question == 3) {
        document.getElementById('answer-one').innerText = "Scotland"
        document.getElementById('answer-two').innerText = "Germany"
        document.getElementById('answer-three').innerText = "Belgium"
        document.getElementById('answer-four').innerText = "Netherlands"
    }
    else if (question == 4) {
        document.getElementById('answer-one').innerText = "New Zealand"
        document.getElementById('answer-two').innerText = "Australia"
        document.getElementById('answer-three').innerText = "Peru"
        document.getElementById('answer-four').innerText = "Tonga"
    }
    else if (question == 5) {
        document.getElementById('answer-one').innerText = "Spain"
        document.getElementById('answer-two').innerText = "Portugal"
        document.getElementById('answer-three').innerText = "Greece"
        document.getElementById('answer-four').innerText = "Moldova"
    }
};
*/


