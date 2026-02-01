let rightLetters = document.querySelectorAll(".mainTryCon input");
let try1Letters = document.querySelectorAll(".tryCon1 input");

//====== generate words function ==========
function generateWords() {
    const wordsSet = ["apple", "water", "house", "smile", "light"];
    let word = wordsSet[Math.floor(Math.random() * 5)];
    return word;
};
function splitWord() {
    let splitWord = [...generateWords()];
    console.log(splitWord);
    rightLetters.forEach((l, i) => {
        l.value = splitWord[i];
        console.log(l);
    });
    return rightLetters;
};
splitWord();
