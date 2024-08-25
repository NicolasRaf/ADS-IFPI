
import { getNumber, getNumberInRange, getNumberPositive,ask, getNumberVector, coloredPrint} from "./utils.js";
import { addVector, doFilter, doMap, generateNumbers, showFiles, shuffleVector, sortVector, swapNegatives, valuesSum} from "./vectorUtils.js";
import { readFileSync, writeFileSync } from "fs";

export function initializeVector(currentVector,type){
    if (currentVector.length){
        coloredPrint("red", "Reinicie o vetor primeiro!!!");
        return currentVector;
    }

    console.log(`
    ------- Build Vector -------
        [1] Gerar Valores 
        [2] Informa Valores     
        [3] Ler Arquivo
        [4] Cancelar 
    ----------------------------
    `);

    let option = getNumberInRange("==> ",1,4,"\nSelecione uma opção valida!\n");
    
    if (option === 1){
        let size = getNumberPositive(`\nInforme a tamanho do ${type}vetor: `);
        let limitMin = getNumber("Informe o valor mínimo para os valores: ");
        let limitMax = getNumberInRange("Informe o valor máximo para os valores: ",limitMin + 1,Infinity,"\nO valor deve ser maior que o limite inferior!\n");

        return generateNumbers(size,limitMin,limitMax);

    }else if(option === 2){
        let size = getNumberPositive(`\nInforme a tamanho do ${type}vetor: `);
        let limitMin = getNumber("Informe o valor mínimo para os valores: ");
        let limitMax = getNumberInRange("Informe o valor máximo para os valores: ",limitMin + 1,Infinity,"\nO valor deve ser maior que o limite inferior!\n");
        
        return storageNumbers(size,limitMin,limitMax);

    }else if(option === 3){
        return readFile();

    }else{
        console.clear();
        coloredPrint("red", `Operação Cancelada!!!`);

        return [];
    }
}

export const showLength = vector => (vector.length > 0) ? coloredPrint("blue", `Numero de valores no vetor: ${vector.length}`) : coloredPrint("red", "O Vetor está vazio!");

export function minMaxValues(vector){
    if (vectorIsEmpty(vector)) return vector;

    let highestValue = [vector[0],1];
    let lowestValue = [vector[0],1];

    for (let i in vector){
        var number = vector[i];

        if (number > highestValue[0]){
            highestValue[0] = number;
            highestValue[1] = Number(i) + 1;
        }
        if (number < lowestValue[0]){
            lowestValue[0] = number;
            lowestValue[1] = Number(i) + 1;
        }   
    }

    console.log(`Maior valor: ${highestValue[0]} ==> ${highestValue[1]}° posição`);
    console.log(`Menor valor: ${lowestValue[0]} ==> ${lowestValue[1]}° posição`);
}

export const showSum = vector => (vectorIsEmpty(vector)) ? vector : console.log(`Somatório: ${valuesSum(vector)}`)


export function valuesAverage(vector){
    if (vectorIsEmpty(vector)) return vector;

    let average = valuesSum(vector)/vector.length;
    
    console.log(`Média: ${average.toFixed(2)}`);
}

export function showValues(vector, type){
    if (vectorIsEmpty(vector)) {return vector}

    type === "all" ? console.log(`Valores: ${vector}`) : type
        
    if(type === "positive"){
        vector = doFilter(vector, num => num > 0)

        console.log(`Valores Positivos: ${vector}`);
        showLength(vector);
    } else if (type === "negative"){
        vector = doFilter(vector, num => num < 0)

        console.log(`Valores Negativos: ${vector}`);
        showLength(vector);
    }
}

export function updateValues(vector){
    if (vectorIsEmpty(vector)) return vector;

    console.log(`
        ------------------------------ Update Vector ----------------------------------
            [1] Multiplicar por Valor      [4] Substituir Negativos por Aleatórios
            [2] Elevar a Valor             [5] Ordenar Valores
            [3] Reduzir a fração           [6] Embaralhar Valores
        -------------------------------------------------------------------------------
        `);

    let option = getNumberInRange("==> ",1,6,"\nSelecione uma opção valida!\n");

    switch (option) {
        case 1:
            let value1 = getNumber("\nDigite o valor para ser multiplicado: ");
            console.clear();
            console.log(`Todos valores multiplicados por ${value1}`);
            return doMap(vector, item => item * value1);
    
        case 2:
            let value2 = getNumber("\nDigite o valor que para se elevar: ");
            console.clear();
            console.log(`Todos valores elevados a ${value2}`);
            return doMap(vector, item => item ** value2);
    
        case 3:
            let numerator = getNumber("\nDigite o valor para o numerador: ");
            let denominator = getNumber("Digite o valor para o denominador: ");
            let value3 = numerator / denominator;
            console.clear();
            console.log(`Todos valores reduzidos ao resultado da fração ==> ${value3}`);
            return doMap(vector, item => item ** value3);
    
        case 4:
            let limitMin = getNumber("\nInforme o limite inferior: ");
            let limitMax = getNumber("Informe o limite superior: ");
            return swapNegatives(vector, limitMin, limitMax);
    
        case 5:
            return sortVector(vector);
    
        case 6:
            return shuffleVector(vector);
    }
}

export function addToVector(vector){
    if (vectorIsEmpty(vector)) return vector;

    const newVector = initializeVector([],"novo ");

    if (vectorIsEmpty(newVector)){
        console.clear();
        coloredPrint("red", `Operação Cancelada!!!`);

        return vector;
    }
        console.clear();
        console.log(`Novo vetor criado e adicionado => ${newVector}`);

    return addVector(vector,newVector)
}

export function removeItensByValue(vector) {
    if (vectorIsEmpty(vector)) return vector;
  
    console.log(`Vetor Atual => ${vector}`);
  
    const valueRemove = getNumberVector(vector, "\nInforme um valor para ser retirado: ");
    let count = 0;
  
    for (let i = 0; i < vector.length; i++) {
      if (vector[i] === valueRemove) {
        vector.splice(i, 1);
        count++;
        i--;
      }
    }
  
    console.clear();
    console.log(`${count} número/s foram removido/s com valor ${valueRemove}`);
  
    return vector;
  }

export function removeItensByIndex(vector){
    if (vectorIsEmpty(vector)) return vector;

    for (let i in vector){
        console.log(`\t${vector[i]} ==> ${Number(i) + 1}°`);
    }

    let position = getNumberInRange("\nSelecione a posição do valor a ser removido: ",1,vector.length,"\nInsira uma posição valida!\n");
   
    console.clear();
    console.log(`O valor na ${position}º posição foi removido!`);

    vector.splice(position - 1,1);
    return vector;
}

export function editItensByIndex(vector){
    if (vectorIsEmpty(vector)) return vector;

    for (let i in vector){
        console.log(`\t${vector[i]} ==> ${Number(i) + 1}°`);
    }

    let position = getNumberInRange("\nSelecione a posição do valor a ser editado: ",1,vector.length,"\nInsira uma posição valida!\n");
    let newNumber = getNumber("Informe o valor a ser colocado no lugar: ");

    vector[position - 1] = newNumber;

    console.clear();
    console.log(`O valor na ${position}º foi trocado por ${newNumber}`);

    
    return vector;
}

export function saveVector(vector, type){
    if (vectorIsEmpty(vector)) return vector;

    let fileName = (type === "manual") ? ask("Informe o nome do arquivo(sem extensão): ") : "vector"
    let data = "";

    for (let number of vector){
        if (number !== vector[vector.length - 1]){
            data += number + "\n";
        }else{
            data += number;
        }
    }

    coloredPrint("green", `Vetor salvo no arquivo "${fileName}.txt"! `);

    writeFileSync(`./NumberVectors/${fileName}.txt`, data); 
}

function storageNumbers(size,min,max){
    console.clear();
    let count = 0;
    let vector = [];

    while (count < size){
        count++;
        let number = getNumberInRange(`Informe o ${count}° valor: `,min,max,"\nDigite um valor entre os limites informados!!\n");
        vector.push(number);
    }

    coloredPrint("green", "Vetor gerado com sucesso!");
    return vector;

}

 function readFile(){
    showFiles("./NumberVectors");

    try {
        let name = "./NumberVectors/"
        name += ask(`\nInforme o nome do arquivo com a extensão(Ex: File.txt): `);

        const data = readFileSync(name,"utf-8");
        let lines = data.split("\n");
        
        let vector = [];

        for (let number of lines){
            vector.push(Number(number.trim()));
        }

        console.clear();
        coloredPrint("green", "Arquivo lido com sucesso!");

        return vector;

    }catch (err){
        coloredPrint("red", "Arquivo não encontrado, tente novamente!");
        return readFile();
    }
}

function vectorIsEmpty(vector){
    if (vector.length === 0){
        console.log("Inicialize o vetor primeiro!");
        return true;
    }
}