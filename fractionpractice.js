function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomForFraction(max) {
    return randomInt(max) + 1;
}

const osoiElem = document.getElementById("osoittaja");
const nimElem = document.getElementById("nimittaja");

const osoittaja = randomForFraction(9);
const nimittaja = randomForFraction(9);

osoiElem.innerHTML = osoittaja;
nimElem.innerHTML = nimittaja;

const vastausElem = document.getElementById("vastaus");
const palauteElem = document.getElementById("palaute");
const tulosElem = document.getElementById("tulos");

vastausElem.onchange = function() {
    palauteElem.innerHTML = vastausElem.value;

    const oikein = osoittaja / nimittaja;
    tulosElem.innerHTML = oikein;
};
