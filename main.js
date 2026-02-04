//====== variables ==========
let rightLetters = document.querySelectorAll(".mainTryCon input");
let Letters = document.querySelectorAll("input");
let con = document.querySelectorAll(".try");
let checkBtn = document.querySelector("#check");
let hintBtn = document.querySelector("#hint");
let infoSec = document.querySelector("#info");
let triesNum = 0;
//====== generate words function ==========
function generateWords() {
    const wordsSet = ["apple", "water", "house", "smile", "light"];
    let word = wordsSet[Math.floor(Math.random() * 5)];
    return word;
};
const word = [...generateWords()];
//====== check words function ==========
function check(l, i) {
    if (l.value == word[i]) {
        l.style.borderColor = "rgb(41, 146, 13)";
        l.style.backgroundColor = "rgb(41, 146, 13)";
        l.style.color = "white";
        l.dataset.status = "correct";
    } else if (word.includes(l.value)) {
        l.style.borderColor = "rgb(235, 129, 30)";
        l.style.backgroundColor = "rgb(235, 129, 30)";
        l.style.color = "white";
        l.dataset.status = "wrong";
    } else {
        l.style.borderColor = "rgb(237, 81, 61)";
        l.style.backgroundColor = "rgb(237, 81, 61)";
        l.style.color = "white";
        l.dataset.status = "wrong";

    }
};
//====== auto move ==========
for (let i = 1; i < con.length; i++) {
    con[i].querySelectorAll("input").forEach(l => {
        l.disabled = true;
        l.style.backgroundColor = "rgb(196, 198, 200)";
    });
};
Letters.forEach((input, i) => {
    input.addEventListener("input", () => {
        if (input.value.length === 1 && i < Letters.length - 1) {
            Letters[i + 1].focus();
        }
    });
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value === "" && i > 0) {
            Letters[i - 1].focus();
        }
    });
});
//====== run ==========
checkBtn.addEventListener("click", e => {
    e.preventDefault();
    let inputs = con[triesNum].querySelectorAll("input");
    inputs.forEach(check);
    inputs.forEach(l => {
        l.disabled = true;
    });
    let result=[...inputs].every(l => l.dataset.status === "correct")
    ;
   if (!result) {
     if (triesNum < con.length - 1) {
        triesNum++;
    };
    con[triesNum].querySelectorAll("input").forEach(l => {
        l.disabled = false;
        l.style.backgroundColor = "white";
    });
   };
   
});
let hintCounter=0;
hintBtn.addEventListener("click", e => {
    e.preventDefault();
    let p = document.createElement("p");
    if (hintCounter<2) {
        p.innerHTML = `The word includes <span>"${word[Math.floor(Math.random() *4)]}"</span> letter`;
        p.style.fontSize = "larger";
        p.style.margin = "15px auto";
        p.style.textAlign = "center";
        p.style.border = "1px solid brown";
        p.style.borderRadius = "5px";
        p.style.padding = "10px";
        p.style.width = "70%";    
        infoSec.appendChild(p);
        hintCounter++;  
    };
});