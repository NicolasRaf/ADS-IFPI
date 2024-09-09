import { ask, getNumber, getNumberInRange, getNumberPositive } from "../utils.js";

export function calculateFatorial(){
    const number = getNumberPositive("Digite um número: ");
    const result = fatorial(number);

    console.clear();
    console.log(`Resultado: ${result}`);
}

function fatorial(number){
    if (number === 1) { return 1}

    return number * fatorial(number - 1);
}

export function fibonacciSequence(){
    let size = getNumberPositive("Infome o tamanho da sequência: ") -1;
    let vector = [1];
    
    fibonacci(size, vector);

    console.clear();
    console.log(`Sequência Fibonacci: {${vector}}`);
}   


function fibonacci(size, vector, currentNumber = 1){
    if (size <= 0) { return }

    let lastNumber = vector[vector.length - 1];
    vector.push(currentNumber);
    currentNumber += lastNumber;

    return fibonacci(size - 1, vector, currentNumber);
}

export function simpleSequence(){
    let initalNumber = getNumber("Informe o número inicial da sequência: ");
    let lastNumber = getNumber("Informe o ultimo número da sequência: ");

    const size = Math.abs(initalNumber - lastNumber);
    const sequence = makeSequence(size, initalNumber);

    console.clear();
    console.log(`Sequência Formada: {${sequence}}`);
}

function makeSequence(size, initalNumber, vector = []){
    if (size <= -1) { return vector}

    vector.push(initalNumber);
    return makeSequence(size - 1, initalNumber + 1,vector);

}

export function calculateProduct(){
    let number1 = getNumber("Digite o primeiro numero: ");
    let number2 = getNumber("Digite o segundo numero: ");
    let result = product(number1, number2);

    console.clear();
    console.log(`Resultado: ${result}`);
}

function product(loops, number, result = 0){
    if (loops <= 0) { return result }

    result += number;
    return product(loops - 1, number, result);
}

export function calculatExponential(){
    let base = getNumber("Digite o numero base: ");
    let expo = getNumber("Digite o expoente: ");
    let result = exponential(base,expo);

    console.clear();
    console.log(`Resultado: ${result}`);
}

function exponential(base,loops, result = 1){
    if (loops <= 0) { return result }

    result *= base;
    return exponential(base,loops - 1, result);
}

export function sumRandomVector(){
    const vector = generateVector();
    let sum = sumVector(vector);

    console.clear();

    console.log(`Vetor Formado -> {${vector}}`);
    console.log(`Soma: ${sum}`);
}

function sumVector(vector, sum = 0, index = 0){
    if (index > vector.length - 1) { return sum }

    sum += vector[index];
    return sumVector(vector, sum, index + 1);
}

function generateVector(){
    let size = getNumberPositive("Informe o tamanho do vetor: ");
    const min = getNumber("Digite o limite inferior: ");
    const max = getNumberInRange("Digite o limite superior: ",min,Infinity,"Informe um valor maior que o minímo!\n");
    
    return addRandomNumbers(size, min, max);
}

function addRandomNumbers(size, min, max, vector = []){
    if (size <= 0) { return vector }

    vector.push(Math.floor(Math.random() * ((max + 1) - min)) + min);
    return addRandomNumbers(size - 1, min, max, vector);
}

export function countVowelsConsonants(){
    const phrase = ask("Digite uma frase: ");
    let [vowels, consonants] = verifyLetters(phrase);
    
    console.clear();
    console.log(`Consoantes: ${consonants}`);
    console.log(`Vogais: ${vowels}`);
}

function verifyLetters(phrase, index = 0, cons = 0, vow = 0){
    if (index >= phrase.length) { 
        return [vow, cons]; 
    }

    const letter = phrase[index];

    if (isVowel(letter)){
        vow++;
    } else if (isConsonant(letter)) {
        cons++;
    }

    return verifyLetters(phrase, index + 1, cons, vow);
}

function isVowel(letter, index = 0){
    const vowels = "aeiouAEIOU";

    if (index >= vowels.length) {
        return false;
    }

    if (letter === vowels[index]) {
        return true;
    }

    return isVowel(letter, index + 1);
}

function isConsonant(letter){
    const vowels = "aeiouAEIOU";
    const isLetter = letter.toLowerCase() !== letter.toUpperCase(); 
    
    return isLetter && !isVowel(letter);
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