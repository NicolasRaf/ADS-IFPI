import { getNumber, getNumberInRange, getNumberPositive,ask} from "./utils.js";
import { generateNumbers, valuesSum} from "./vectorUtils.js";
import { readFileSync } from "fs";

export function initializeVector(currentVector){
    if (currentVector.length){
        console.log("Reinicie o vetor primeiro!!!");
        return currentVector;
    }


    console.log(`
    -----------------------------
        [1] Gerar Valores 
        [2] Informa Valores     
        [3] Ler Arquivo
        [4] Cancelar 
    -----------------------------
    `);

    let option = getNumberInRange("==> ",1,4,"\nSelecione uma opção valida!\n");
    
    if (option === 1){
        let size = getNumberPositive("\nInforme a tamanho do vetor: ");
        let limitMin = getNumber("Informe o valor mínimo para os valores: ");
        let limitMax = getNumberInRange("Informe o valor máximo para os valores: ",limitMin + 1,Infinity,"\nO valor deve ser maior que o limite inferior!\n");

        return generateNumbers(size,limitMin,limitMax);

    }else if(option === 2){
        let size = getNumberPositive("\nInforme a tamanho do vetor: ");
        let limitMin = getNumber("Informe o valor mínimo para os valores: ");
        let limitMax = getNumberInRange("Informe o valor máximo para os valores: ",limitMin + 1,Infinity,"\nO valor deve ser maior que o limite inferior!\n");
        
        return storageNumbers(size,limitMin,limitMax);

    }else if(option === 3){
        let name = ask("\nInforme o nome do arquivo com a extensão(Ex: File.txt): ");

        return readFile(name);
    }else{
        console.clear();
        console.log("Operação Cancelada!!!");

        return [];
    }
}

export function showLength(vector){
    console.log(`Numero de valores no vetor: ${vector.length}`);
}

export function minMaxValues(vector){
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

export function showSum(vector){
    console.log(`Somatório: ${valuesSum(vector)}`);
}

export function valuesAverage(vector){
    let average = valuesSum(vector)/vector.length
    
    console.log(`Média: ${average.toFixed(1)}`)
}

export function showValues(vector, type){
    let newVector = []

    for (let number of vector){
        if (number > 0 && type === "positive"){
            newVector.push(number)
        }else if (number < 0 && type === "negative"){
            newVector.push(number)
        }
    }

    if (type === "all"){
        console.log(`Valores: ${vector}`)
    } else if(type === "positive"){
        console.log(`Valores Positivos: ${newVector}`)
        showLength(newVector)
    } else if(type === "negative"){
        console.log(`Valores Negativos: ${newVector}`)
        showLength(newVector)
    }

}

export function updateValues(vector){
    console.log(`
        -------------------------------------------
            [1] Gerar Valores      [4] Cancelar
            [2] Informa Valores    [5] Cancelar
            [3] Ler Arquivo        [6] Cancelar
        -------------------------------------------
        `);

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

    return vector;

}

function readFile(name){
    const data = readFileSync(name,"utf-8");
    let lines = data.split("\n");;
    
    let vector = [];

    for (let number of lines){
        vector.push(number.trim());
    }

    console.clear();
    console.log("Arquivo lido com sucesso!");

    return vector;
}