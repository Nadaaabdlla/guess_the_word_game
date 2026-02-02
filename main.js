let rightLetters = document.querySelectorAll(".mainTryCon input");
let try1Letters = document.querySelectorAll(".tryCon1 input");
let try2Letters = document.querySelectorAll(".tryCon2 input");
let try3Letters = document.querySelectorAll(".tryCon3 input");
let try4Letters = document.querySelectorAll(".tryCon4 input");
let try5Letters = document.querySelectorAll(".tryCon5 input");
let Letters = document.querySelectorAll("input");
let con = document.querySelectorAll(".try");
let button = document.querySelector("button");
//====== generate words function ==========
function generateWords() {
    const wordsSet = ["apple", "water", "house", "smile", "light"];
    let word = wordsSet[Math.floor(Math.random() * 5)];
    return word;
};
const word = [...generateWords()];
function splitWord() {
    rightLetters.forEach((l, i) => {
        l.value = word[i];
    });
    console.log(word);
};
//====== check words function ==========
function check(l, i) {
    if (l.value == word[i]) {
        l.style.borderColor = "green";
        l.style.backgroundColor = "green";
        l.style.color = "white";
    } else if (word.includes(l.value)) {
        l.style.borderColor = "rgb(139, 83, 11)";
        l.style.backgroundColor = "rgb(139, 83, 11)";
        l.style.color = "white";
    } else {
        l.style.borderColor = "red";
        l.style.backgroundColor = "red";
        l.style.color = "white";
    }
};
//====== run ==========
splitWord();
let i = 0;
let inputs = con[i].querySelectorAll("input");

button.addEventListener("click", e => {
    e.preventDefault();
    inputs.forEach(check);
    inputs.forEach(l => {
        if (l.value != "") {
            l.disabled = true;
        }
    });
    i++;
    if (i >= con.length) return;

});
//====== auto move ==========
inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }
    });
});
