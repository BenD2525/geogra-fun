
function addEventListener() {
    let answerbutton = document.getElementsByClassName('answer');
    answerbutton.addEventListener('click', function() {
        showCorrectAnswer();
    });
};

function displayQuestion() {

    let question = 1

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

displayQuestion();

function Answers() {
    let question = 1
    if (question == 1) {
        document.getElementById('answer-one') == "wrong"
        document.getElementById('answer-two') == "right"
        document.getElementById('answer-two') == "wrong"
        document.getElementById('answer-two') == "wrong"
    }
    else if (question == 2) {
        document.getElementById('answer-one') == "right"
        document.getElementById('answer-two') == "wrong"
        document.getElementById('answer-three') == "wrong"
        document.getElementById('answer-four') == "wrong"
    }
    else if (question == 3) {
        document.getElementById('answer-one') == "wrong"
        document.getElementById('answer-two') == "wrong"
        document.getElementById('answer-three') == "right"
        document.getElementById('answer-four') == "wrong"
    }
    else if (question == 4) {
        document.getElementById('answer-one') == "wrong"
        document.getElementById('answer-two') == "right"
        document.getElementById('answer-three') == "wrong"
        document.getElementById('answer-four') == "wrong"
    }
    else if (question == 5) {
        document.getElementById('answer-one') == "right"
        document.getElementById('answer-two') == "wrong"
        document.getElementById('answer-three') == "wrong"
        document.getElementById('answer-four') == "wrong"
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
