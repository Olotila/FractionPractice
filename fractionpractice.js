function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomForFraction(max) {
    return randomInt(max) + 1;
}

const nomElem = document.getElementById("nom");
const divElem = document.getElementById("div");

const nom = randomForFraction(9);
const div = randomForFraction(9);

nomElem.innerHTML = nom;
divElem.innerHTML = div;

const answerElem = document.getElementById("answer");
const feedbackElem = document.getElementById("feedback");
const resultElem = document.getElementById("result");

answerElem.onchange = function() {
    feedbackElem.innerHTML = answerElem.value;

    const correct = nom / div;
    resultElem.innerHTML = correct;
};