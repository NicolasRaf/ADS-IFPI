import {readdirSync, statSync} from "fs";

export function generateNumbers(size,min,max){
    console.clear();
    let count = 0;
    let vector = [];

    while (count < size){
        var number = Math.floor(Math.random() * ((max + 1) - min)) + min;
        vector.push(number);
        count++;
    }   

    console.log("Vetor gerado com sucesso!");
    return vector;

}

export function valuesSum(vector){
    let sum = 0;

    for (let number of vector){
        sum += Number(number);
    }

    return sum;
}

export function multiplyAll(vector, number){
    
    for (let i in vector){
        vector[i] *= number;
    }

    console.clear();
    console.log(`Todos valores multiplicados por ${number}`);

    return vector;
}

export function expoAll(vector, number){
    
    for (let i in vector){
        vector[i] **= number;
    }

    console.clear();
    console.log(`Todos valores elevados á ${number}`);

    return vector;
}

export function fractionAll(vector, number){
    
    for (let i in vector){
        vector[i] *= number;
    }
    
    console.clear();
    console.log(`Todos valores reduzidos ao resultado da fração ==> ${number} `);


    return vector;
}

export function swapNegatives(vector,max,min){
    let swappedNumbers = [];
    let newNumbers = [];

    for (let i in vector){
        let number = vector[i];

        if (number < 0){
            swappedNumbers.push(number);
            vector[i] = Math.floor(Math.random() * ((max + 1) - min)) + min;
            newNumbers.push(vector[i]);
        }
    }
    
    console.clear();
    console.log(`Valores negativos trocados por números aleatórios!`);
    console.log(`Valores trocados: ${swappedNumbers} => ${newNumbers}`);


    return vector;
}

export function sortVector(vector){
    const sortedVector = [];

    while (vector.length > 0) {

        let smallest = vector[0];
        let smallestIndex = 0;

        for (let i = 1; i < vector.length; i++) {
            if (vector[i] < smallest) {
                smallest = vector[i];
                smallestIndex = i;
            }
        }
        vector.splice(smallestIndex, 1);
        sortedVector.push(smallest);
    }

    console.clear();
    console.log(`Valores organizados em ordem crescente!`);

    return sortedVector;
}

export function shuffleVector(vector){

    const shuffledVector = [];
    let min = 0;

    while (vector.length > 0){
        let max = vector.length - 1;
        let randomIndex = Math.floor(Math.random() * ((max + 1) - min)) + min;

        shuffledVector.push(vector[randomIndex]);
        vector.splice(randomIndex,1);
    }

    console.clear();
    console.log(`Valores embaralhados!`);

    return shuffledVector;
}

export function showFiles(path) {
    let files = readdirSync(path);
    console.log(`\n==> Arquivos Encontrados na Pasta: `);

    for (let file of files) {
        let filePath = `${path}/${file}`;
        if (statSync(filePath).isFile()) {
            console.log(`- ${file}`);
        }
    }
}