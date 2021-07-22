let scoreP1 = 0;
let scoreP2 = 0;
let isGameOver = false;
const scores = document.querySelector("#score");

const btnP1 = document.querySelector("#btn-1");
const btnP2 = document.querySelector("#btn-2");
const btnReset = document.querySelector("#btn-reset");
let scoreP1Display = document.querySelector("#score-p1");
let scoreP2Display = document.querySelector("#score-p2");

const reset = () => {
    scoreP1 = 0;
    scoreP2 = 0;
    scoreP1Display.innerText = scoreP1;
    scoreP2Display.innerText = scoreP2;
    isGameOver = false;
    scoreP1Display.classList.remove("green", "red");
    scoreP2Display.classList.remove("green", "red");
    btnP1.classList.remove("disabled");
    btnP2.classList.remove("disabled");
}

const getTargetPts = () => {
    targetPts = parseInt(document.querySelector("#playing-to").value);
    reset();
    isGameOver = false;
}

getTargetPts();

document.querySelector("#playing-to").addEventListener('change', getTargetPts);

btnP1.addEventListener('click', function () {
    if (!isGameOver) {
        scoreP1 += 1;
        if (scoreP1 === targetPts) {
            isGameOver = true;
            scoreP1Display.classList.add("green");
            scoreP2Display.classList.add("red");
            btnP1.classList.add("disabled");
            btnP2.classList.add("disabled");
        }
        scoreP1Display.innerText = scoreP1;
    }
})
btnP2.addEventListener('click', function () {
    if (!isGameOver) {
        scoreP2 += 1;
        if (scoreP2 === targetPts) {
            isGameOver = true;
            scoreP2Display.classList.add("green");
            scoreP1Display.classList.add("red");
            btnP1.classList.add("disabled");
            btnP2.classList.add("disabled");
        }
        scoreP2Display.innerText = scoreP2;
    }
})

btnReset.addEventListener('click', function () {
    reset();
})




