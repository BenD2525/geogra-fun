document.addEventListener("click", function() {
    let answers= document.getElementsByClassName('answer');

    for (let answer of answers) {
        answer.addEventListener("click", showCorrectAnswer());
        answer.addEventListener("click", changeQuestion());
    }
});


//Flag display
const flag= document.getElementById("flag-box");
flag.style.backgroundImage="url(assets/images/india-flag-small.png)";


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

function changeQuestion() {
    let questionCount= questions[0];
    questionCount++;
};

function displayQuestion() {
    for (question of questions) {
    document.getElementById('answer-one').innerHTML= questions[0].answer[1];
    document.getElementById('answer-two').innerHTML= questions[0].answer[2];
    document.getElementById('answer-three').innerHTML= questions[0].answer[3];
    document.getElementById('answer-four').innerHTML= questions[0].answer[4];
    }
};

   /* COMMENTED OUT let question = 1

    if (question == 1) {
        document.getElementById('answer-one').innerHTML = "China"
        document.getElementById('answer-two').innerHTML = "India"
        document.getElementById('answer-three').innerHTML = "Egypt"
        document.getElementById('answer-four').innerHTML = "Rwanda"
    }
    else if (question == 2) {
        document.getElementById('answer-one').innerHTML = "Argentina"
        document.getElementById('answer-two').innerHTML = "Cameroon"
        document.getElementById('answer-three').innerHTML = "Gabon"
        document.getElementById('answer-four').innerHTML = "Ireland"
    }
    else if (question == 3) {
        document.getElementById('answer-one').innerHTML = "Scotland"
        document.getElementById('answer-two').innerHTML = "Germany"
        document.getElementById('answer-three').innerHTML = "Belgium"
        document.getElementById('answer-four').innerHTML = "Netherlands"
    }
    else if (question == 4) {
        document.getElementById('answer-one').innerHTML = "New Zealand"
        document.getElementById('answer-two').innerHTML = "Australia"
        document.getElementById('answer-three').innerHTML = "Peru"
        document.getElementById('answer-four').innerHTML = "Tonga"
    }
    else if (question == 5) {
        document.getElementById('answer-one').innerHTML = "Spain"
        document.getElementById('answer-two').innerHTML = "Portugal"
        document.getElementById('answer-three').innerHTML = "Greece"
        document.getElementById('answer-four').innerHTML = "Moldova"
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

        let answer= document.getElementById('answer-one')

        if (answer == "right") {
            alert ('Correct!')
        }
        else if (answer == "wrong") {
            alert ('Incorrect Answer!')
        }

 };
