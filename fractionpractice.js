function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomForFraction(max) {
    return randomInt(max - 1) + 1;
}

const nomElem = document.getElementById("nom");
const divElem = document.getElementById("div");

let nom = randomForFraction(10);
let div = randomForFraction(10);

nomElem.innerHTML = nom;
divElem.innerHTML = div;
