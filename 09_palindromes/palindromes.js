const palindromes = function (word) {
    let modWord = word.replaceAll(' ', '');
    console.log("HERE: " + modWord);
    modWord = modWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    modWord = modWord.toLowerCase();

    let revWord = modWord.split("").reverse().join("");

    for (let i = 0; i < modWord.length; i++) {
        if (modWord[i] !== revWord[i]) {
            return false;
        }
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
