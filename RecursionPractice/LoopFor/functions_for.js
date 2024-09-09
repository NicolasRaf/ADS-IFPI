import { ask, getNumber, getNumberInRange, getNumberPositive } from "../utils.js";

export function calculateFatorial(){
    let number = getNumberPositive("Digite um número: ");
    let result = 1;

    for (; number > 0; number--) {
        result *= number;
    }

    console.clear();
    console.log(`Resultado: ${result}`);
}

export function fibonacciSequence(){
    let size = getNumberPositive("Infome o tamanho da sequência: ") -1;
    let currenteNumber = 1;
    const sequence = [1];

    for (let lastNumber = 1;sequence.length <= size; lastNumber = sequence[sequence.length - 1]){
        sequence.push(currenteNumber);
        currenteNumber += lastNumber;
    }

    console.clear();
    console.log(`Sequência Fibonacci: {${sequence}}`);
}   

export function simpleSequence(){
    let initalNumber = getNumber("Informe o número inicial da sequência: ");
    let lastNumber = getNumber("Informe o ultimo número da sequência: ");

    const size = Math.abs(initalNumber - lastNumber);
    const sequence = [];

    for (let count = 0; count <= size; count++) {
        sequence.push(initalNumber);
        initalNumber++;
    }   

    console.clear();
    console.log(`Sequência Formada: {${sequence}}`);
}

export function calculateProduct(){
    let number1 = getNumber("Digite o primeiro numero: ");
    let number2 = getNumber("Digite o segundo numero: ");
    let result = 0;

    for ( let sumsQtd = number1; sumsQtd !== 0; sumsQtd-- ){
        result += number2;
    }

    console.clear();
    console.log(`Resultado: ${result}`);
}

export function calculatExponential(){
    let base = getNumber("Digite o numero base: ");
    let expo = getNumber("Digite o expoente: ");
    let result = 1;

    for (;expo !== 0; expo--) {
        result *= base;
    }

    console.clear();
    console.log(`Resultado: ${result}`);
}

export function sumRandomVector(){
    const vector = generateVector();
    let sum = 0;

    for (let numbers of vector){
        sum += numbers;
    }

    console.clear();

    console.log(`Vetor Formado -> {${vector}}`);
    console.log(`Soma: ${sum}`);
}

function generateVector(){
    let size = getNumberPositive("Informe o tamanho do vetor: ");
    const min = getNumber("Digite o limite inferior: ");
    const max = getNumberInRange("Digite o limite superior: ",min,Infinity,"Informe um valor maior que o minímo!\n");

    let vector = [];

    for (;size !== 0; size--){
        vector.push(Math.floor(Math.random() * ((max + 1) - min)) + min);
    }

    return vector;
}

export function countVowelsConsonants(){
    const phrase = ask("Digite uma frase: ");
    let vowels = 0;
    let consonants = 0;

    for (let letter of phrase){
         if (letter.toLowerCase() === letter.toUpperCase()) {continue}

        if (isVoewls(letter)){
            vowels++;
        } else {
            consonants++;
        }
    }

    console.clear();

    console.log(`Consoantes: ${consonants}`);
    console.log(`Vogais: ${vowels}`);
}

function isVoewls(letter){
    const vowels = "aeiouAEIOU";

    for (let vowel of vowels){
        if (letter === vowel) {return true}
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