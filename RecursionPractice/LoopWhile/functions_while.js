import { ask, getNumber, getNumberInRange, getNumberPositive } from "../utils.js";

export function calculateFatorial(){
    let number = getNumberPositive("Digite um número: ");
    let result = 1;

    while (number !== 0){
        result *= number;
        number--;
    }

    console.clear();
    console.log(`Resultado: ${result}`);
}

export function fibonacciSequence(){
    let size = getNumberPositive("Infome o tamanho da sequência: ") -1;
    let currenteNumber = 1;
    let lastNumber = 0;
    const sequence = [1];

    while (size !== 0){
        lastNumber = sequence[sequence.length - 1];
        
        sequence.push(currenteNumber);
        currenteNumber += lastNumber;

        size--;
    }

    console.clear();
    console.log(`Sequência Fibonacci: {${sequence}}`);
}   

export function simpleSequence(){
    let initalNumber = getNumber("Informe o número inicial da sequência: ");
    let lastNumber = getNumber("Informe o ultimo número da sequência: ");
    let count = 0;

    const size = Math.abs(initalNumber - lastNumber);
    const sequence = [];

    while (count <= size){
        sequence.push(initalNumber);
        initalNumber++;
        count++;
    }

    console.clear();
    console.log(`Sequência Formada: {${sequence}}`);
}

export function calculateProduct(){
    let number1 = getNumber("Digite o primeiro numero: ");
    let number2 = getNumber("Digite o segundo numero: ");

    let sumsQtd = number1;
    let result = 0;

    while (sumsQtd !== 0){
        sumsQtd--;
        result += number2;
    }

    console.clear();
    console.log(`Resultado: ${result}`);
}

export function calculatExponential(){
    let base = getNumber("Digite o numero base: ");
    let expo = getNumber("Digite o expoente: ");

    let result = 1;

    while (expo !== 0){
        expo--;
        result *= base;
    }

    console.clear();
    console.log(`Resultado: ${result}`);
}

export function sumRandomVector(){
    const vector = generateVector();

    console.clear();
    console.log(`Vetor Formado -> {${vector}}`);

    let sum = 0;

    while (vector.length != 0){
        sum += vector.pop();
    }

    console.log(`Soma: ${sum}`);
}

function generateVector(){
    let size = getNumberPositive("Informe o tamanho do vetor: ");
    const min = getNumber("Digite o limite inferior: ");
    const max = getNumberInRange("Digite o limite superior: ",min,Infinity,"Informe um valor maior que o minímo!\n");

    let vector = [];

    while (size !== 0){
        vector.push(Math.floor(Math.random() * ((max + 1) - min)) + min);
        size--;
    }

    return vector;
}

export function countVowelsConsonants(){
    const phrase = ask("Digite uma frase: ");
    let currenteLetter = 0;
    let vowels = 0;
    let consonants = 0;

    while (currenteLetter + 1 <= phrase.length) {
        const letter = phrase[currenteLetter];

        if (letter.toLowerCase() === letter.toUpperCase()) {
            currenteLetter++;
            continue;
        }

        if (isVoewls(letter)) {
            vowels++;
        }else{
            consonants++;
        }

        currenteLetter++;
    }

    console.clear();
    console.log(`Consoantes: ${consonants}`);
    console.log(`Vogais: ${vowels}`);
}

function isVoewls(letter){
    const vowels = "aeiouAEIOU";
    let count = 0;

    while (count <= 9) {
        if (letter === vowels[count]){
            return true;
        }
        count++;
    }

    return false;
}

export const allFunctions = {
    1: calculateFatorial,
    2: fibonacciSequence,
    3: simpleSequence,
    4: calculateProduct,
    5: calculatExponential,
    6: sumRandomVector,
    7: countVowelsConsonants
}