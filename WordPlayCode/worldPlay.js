import fs from "fs";
import { ask, getNumberInRange, aksLetter } from "./Funções/io.js";

function optionSelector(option, lines){
    while (option !== 8) {
        let size = 0;
        let letterToHide = "";

        if (option === 1){
            size = 20
            wordsGreaterThan(lines, size);
        }
        if (option === 2) {
            letterToHide = (letterToHide === "") ? aksLetter("Digite uma letra: ") : letterToHide;
            hasNoLetter(lines, letterToHide, true);
        }
        if (option === 3) {
            avoids(lines);
        }
        if (option === 4) {
            usesOnly(lines);
        }
        if (option === 5) {
            usesAll(lines);
        }
        if (option === 6){
            isAbecedarian(lines);
        }
        if (option === 7){
            isAbecedarianAnywhere(lines)
        }

        ask(`\nContinuar(Press Enter)`);
        option = showMenu();
    }
}


function wordsGreaterThan(lines, size) {
    for (let word of lines) {
        if (getLength(word) - 1 >= size) {
            console.log(`${getLength(word) - 1} - ${word}`);
        }
    }
}

function getLength(word) {
    let count = 0;
    for (let char of word) {
        count++;
    }
    return count;
}

function includesWord(word, char) {
    for (let i = 0; i < getLength(word); i++) {
        if (word[i] === char) {
            return true;
        }
    }
    return false;
}

function hasLetters(word, letters) {
    for (let i = 0; i < getLength(letters); i++) {
        let letter = letters[i];
        if (!includesWord(word, letter)) {
            return false;
        }
    }
    return true;
}

function hasLettersInLines(lines, letters, order) {
    let wordsWithLetters = 0;

    for (let word of lines) {
        let hasAllLetters = hasLetters(word, letters);

        if (order === "only" && hasAllLetters) {
            wordsWithLetters++;
            console.log(word);
        } else if (order === "all" && hasAllLetters) {
            wordsWithLetters++;
            console.log(word);
        }
    }

    let wordsAmount = getLength(lines);
    let wordsPercent = (wordsWithLetters / wordsAmount) * 100;
    console.log(`\n>>> ${wordsWithLetters} | ${wordsPercent.toFixed(4)}% das palavras contêm as letras permitidas <<<`);

    return wordsWithLetters;
}

function hasNoLetter(lines, letter, show) {
    let wordsWithoutLetter = 0;

    for (let word of lines) {
        if (!includesWord(word, letter)) {
            wordsWithoutLetter++;
            if (show) {
                console.log(word);
            }
        }
    }
    let wordsAmount = getLength(lines) - 1;
    let wordsPercent = (wordsWithoutLetter / wordsAmount) * 100;
    console.log(`\n>>> ${wordsWithoutLetter} | ${wordsPercent.toFixed(2)}% das palavras não possuem "${letter}" <<<`);

    return wordsWithoutLetter;
}

function avoids(lines) {
    let bannedLetters = ask("Digite as letras proibidas juntas: ");
    let newBanned = "";

    for (let i = 0; i < getLength(bannedLetters); i++) {
        let letter = bannedLetters[i];
        if (!includesWord(newBanned, letter) && letter !== " ") {
            newBanned += letter;
        }
    }

    let total = 0;
    for (let i = 0; i < getLength(newBanned); i++) {
        let letter = newBanned[i];
        total += hasNoLetter(lines, letter, false);
    }
    console.log(`\n>>>>>> O total de palavras sem as letras são: ${total}`);
}

function usesOnly(lines) {
    let lettersOnly = ask("Digite as letras permitidas juntas: ");
    let newAllow = "";

    for (let i = 0; i < getLength(lettersOnly); i++) {
        let letter = lettersOnly[i];
        if (!includesWord(newAllow, letter)) {
            newAllow += letter;
        }
    }

    hasLettersInLines(lines, newAllow, "only");
}

function usesAll(lines) {
    let lettersOnly = ask("Digite as letras obrigatórias juntas: ");
    let newAllow = "";

    for (let i = 0; i < getLength(lettersOnly); i++) {
        let letter = lettersOnly[i];
        if (!includesWord(newAllow, letter)) {
            newAllow += letter;
        }
    }

    hasLettersInLines(lines, newAllow, "all");
}

function isAbecedarian(lines) {
    let totalWords = 0

    for (let word of lines) {
        let isAbecedarian = true;

        for (let i = 1; i < getLength(word) - 1; i++) {
            let currentLetterCode = word[i].charCodeAt(0);
            let previousLetterCode = word[i - 1].charCodeAt(0);
            if (currentLetterCode < previousLetterCode) {
                isAbecedarian = false;
                break;
            }
        }

        if (isAbecedarian && getLength(word) > 0) {
            totalWords++
            console.log(word);
        }
    }

    let wordsAmount = getLength(lines);
    let wordsPercent = (totalWords / wordsAmount) * 100;
    console.log(`\n>>> ${totalWords} | ${wordsPercent.toFixed(2)}% das palavras estão em ordem alfabética <<<`);
}



function isAbecedarianAnywhere(lines) {
    let totalWords = 0

    for (let word of lines) {
        for (let i = 1; i < getLength(word); i++) {
            let currentLetterCode = word[i].charCodeAt(0);
            let previousLetterCode = word[i - 1].charCodeAt(0);

            if (currentLetterCode - 1 === previousLetterCode || currentLetterCode === previousLetterCode) {
                totalWords++
                console.log(word);
                break;
            }
        }
            
    }

    let wordsAmount = getLength(lines);
    let wordsPercent = (totalWords / wordsAmount) * 100;
    console.log(`\n>>> ${totalWords} | ${wordsPercent.toFixed(2)}% das palavras contém letras em ordem alfabética <<<`);
}


function showMenu() {
    console.clear();

    console.log(`
    ------------------------------- WorldPlay --------------------------------   

      [1] Palavras com 20+ Letras    [5] Letras Obrigatórias 
      [2] Palavras sem Letra X       [6] Palavras em Ordem Alfabética 
      [3] Letras Proibidas           [7] Ordem Alfabética em Qualquer Parte
      [4] Letras Únicas              [8] Finalizar Execução                                                                                  
    `);

    let option = getNumberInRange("Selecione uma opção: ", 1, 8, "\nSelecione uma opção valida!!\n");
    console.clear();
    
    return option;
}

function main() {
    let option = showMenu();

    const data = fs.readFileSync('words.txt', 'utf-8');
    let lines = data.split("\n");

    optionSelector(option, lines)
}

main();
