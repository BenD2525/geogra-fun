const flagBox = document.querySelector("#flag-box");
const question = document.querySelector(".question");
const buttons = Array.from(document.querySelectorAll(".answer"));
const score = document.querySelector("#score-section");


//document.addEventListener("click", function() {
    let answers= document.getElementsByClassName('answer');

    for (let answer of answers) {
        answer.addEventListener("click", showCorrectAnswer());
        //answer.addEventListener("click", changeQuestion());
    }
});

let score= 0
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

//Score
function incrementScore() {
    score++
};

document.getElementById('score-section').innerText= `Score:${score}/10`;
//Flag display
function displayFlag(){
const flag= document.getElementById("flag-box");
flag.style.backgroundImage="url(assets/images/india-flag-small.png)";
};

displayFlag();

// Question array

 const questions = [
    {   
        question: "The above is the flag of which country?",
        answer: {
            1: "China",
            2: "India", 
            3: "Egypt",
            4: "Rwanda"
        },
        correct: 2
    },
    {
        question: "The above is the flag of which country?",
        answer: {
            1: "Argentina",
            2: "Cameroon",
            3: "Gabon",
            4: "Ireland"
        },
        correct: 1
    },
    {
        question: "The above is the flag of which country?",
        answer: {
            1: "Scotland",
            2: "Germany",
            3: "Belgium",
            4: "Netherlands"
        },
        correct: 3
    },
    {
        question: "The above is the flag of which country?",
        answer: {
            1: "New Zealand",
            2: "Australia",
            3: "Peru",
            4: "Tonga"
        },
        correct: 2
    },
    {
        question: "The above is the flag of which country?",
        answer: {
            1: "Spain",
            2: "Portugal",
            3: "Greece",
            4: "Moldova"
        },
        correct: 1
    },

];

let currentQuestion= questions[0];

function changeQuestion() {
    currentQuestion++;
};

function displayQuestion() {
    for (question of questions) {
    document.getElementById('answer-one').innerText= questions[0].answer[1];
    document.getElementById('answer-two').innerText= questions[0].answer[2];
    document.getElementById('answer-three').innerText= questions[0].answer[3];
    document.getElementById('answer-four').innerText= questions[0].answer[4];
    }
};

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
displayQuestion();

function Answers() {
    let question = 1
    if (question == 1) {
        document.getElementById('answer-one') = "wrong"
        document.getElementById('answer-two') = "right"
        document.getElementById('answer-two') = "wrong"
        document.getElementById('answer-two') = "wrong"
    }
    else if (question == 2) {
        document.getElementById('answer-one') = "right"
        document.getElementById('answer-two') = "wrong"
        document.getElementById('answer-three') = "wrong"
        document.getElementById('answer-four') = "wrong"
    }
    else if (question == 3) {
        document.getElementById('answer-one') = "wrong"
        document.getElementById('answer-two') = "wrong"
        document.getElementById('answer-three') = "right"
        document.getElementById('answer-four') = "wrong"
    }
    else if (question == 4) {
        document.getElementById('answer-one') = "wrong"
        document.getElementById('answer-two') = "right"
        document.getElementById('answer-three') = "wrong"
        document.getElementById('answer-four') = "wrong"
    }
    else if (question == 5) {
        document.getElementById('answer-one') = "right"
        document.getElementById('answer-two') = "wrong"
        document.getElementById('answer-three') = "wrong"
        document.getElementById('answer-four') = "wrong"
    }

};

Answers();


function showCorrectAnswer() {
        
        if (currentQuestion.answer[1] === "India") {
            alert ('Correct!')
            currentQuestion++;
        }
        else if (currentQuestion.answer[1]) {
            alert ('Incorrect Answer!')
            currentQuestion++;
            displayQuestion();
        }

 };
