
import { getNumber, getNumberInRange, getNumberPositive,ask, getNumberVector} from "./utils.js";
import { expoAll, fractionAll, generateNumbers, multiplyAll, shuffleVector, sortVector, swapNegatives, valuesSum} from "./vectorUtils.js";
import { readFileSync, writeFileSync } from "fs";

export function initializeVector(currentVector,type){
    if (currentVector.length){
        console.log("Reinicie o vetor primeiro!!!");
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
        let name = ask(`\nInforme o nome do arquivo com a extensão(Ex: File.txt): `);

        return readFile(name);
    }else{
        console.clear();
        console.log(`Operação Cancelada!!!`);

        return [];
    }
}

export function showLength(vector){
    if (vector.length > 0){
        console.log(`Numero de valores no vetor: ${vector.length}`);
    }else{
        console.log("O Vetor está vazio!")
    }
}
export function minMaxValues(vector){
    if (vectorIsEmpty(vector)) return vector

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
    if (vectorIsEmpty(vector)) return vector

    console.log(`Somatório: ${valuesSum(vector)}`);
}

export function valuesAverage(vector){
    if (vectorIsEmpty(vector)) return vector

    let average = valuesSum(vector)/vector.length;
    
    console.log(`Média: ${average.toFixed(1)}`);
}

export function showValues(vector, type){
    if (vectorIsEmpty(vector)) {return vector}

    let newVector = [];

    for (let number of vector){
        if (number > 0 && type === "positive"){
            newVector.push(number);
        }else if (number < 0 && type === "negative"){
            newVector.push(number);
        }
    }

    if (type === "all"){
        console.log(`Valores: ${vector}`);
    } else if(type === "positive"){
        console.log(`Valores Positivos: ${newVector}`);
        showLength(newVector);
    } else if(type === "negative"){
        console.log(`Valores Negativos: ${newVector}`);
        showLength(newVector);
    }

}

export function updateValues(vector){
    if (vectorIsEmpty(vector)) return vector

    console.log(`
        ------------------------------ Update Vector ----------------------------------
            [1] Multiplicar por Valor      [4] Substituir Negativos por Aleatórios
            [2] Elevar a Valor             [5] Ordenar Valores
            [3] Reduzir a fração           [6] Embaralhar Valores
        -------------------------------------------------------------------------------
        `);

    let option = getNumberInRange("==> ",1,6,"\nSelecione uma opção valida!\n");

    if (option === 1){
        let value = getNumber("\nDigite o valor para ser multiplicado: ");

        return multiplyAll(vector,value);
    }
    else if (option === 2){
        let value = getNumber("\nDigite o valor que para se elevar: ");

        return expoAll(vector,value);
    }
    else if (option === 3){
        let numerator = getNumber("\nDigite o valor para o numerador: ");
        let denominator = getNumber("Digite o valor para o denominador: ");

        let value = numerator/denominator;
        
        return fractionAll(vector,value);
    }
    else if (option === 4){
        let limitMin = getNumber("\nInforme o limite inferior: ");
        let limitMax = getNumber("Informe o limite superior: ");
        
        return swapNegatives(vector,limitMin,limitMax);
    }
    else if (option === 5){
        return sortVector(vector);
    }
    else if (option === 6){
        return shuffleVector(vector);
    }
}

export function addToVector(vector){
    if (vectorIsEmpty(vector)) return vector

    const newVector = initializeVector([],"novo ")
    console.clear()
    console.log(`Novo vetor criado e adicionado => ${newVector}`)

    vector += "," + newVector

    return vector
}

export function removeItensByValue(vector){
    if (vectorIsEmpty(vector)) return vector

    console.log(`Vetor Atual => ${vector}`)

    let valueRemove = getNumberVector(vector,"\nInforme um valor para ser retirado: ")
    let count = 0

    for (let i in vector){
        let number = vector[i]

        if (valueRemove === number){
            count++
            vector.splice(i,1)
        }
    }

    console.clear()
    console.log(`${count} numero/s foram removido/s com valor ${valueRemove}`)

    return vector
}

export function removeItensByIndex(vector){
    if (vectorIsEmpty(vector)) return vector

    for (let i in vector){
        console.log(`\t${vector[i]} ==> ${Number(i) + 1}°`)
    }

    let position = getNumberInRange("\nSelecione a posição do valor a ser removido: ",1,vector.length,"\nInsira uma posição valida!\n")
   
    console.clear()
    console.log(`O valor na ${position}º posição foi removido!`)

    vector.splice(position - 1,1)
    return vector
}

export function editItensByIndex(vector){
    if (vectorIsEmpty(vector)) return vector

    for (let i in vector){
        console.log(`\t${vector[i]} ==> ${Number(i) + 1}°`)
    }

    let position = getNumberInRange("\nSelecione a posição do valor a ser editado: ",1,vector.length,"\nInsira uma posição valida!\n")
    let newNumber = getNumber("Informe o valor a ser colocado no lugar: ")

    vector[position - 1] = newNumber

    console.clear()
    console.log(`O valor na ${position}º foi trocado por ${newNumber}`)

    
    return vector
}

export function saveVector(vector){
    if (vectorIsEmpty(vector)) return vector
    let data = ""

    for (let number of vector){
        data += number + "\n"
    }

    console.log(`Vetor salvo no arquivo "numbersVector.txt"! `)

    writeFileSync("numbersVector.txt", data); 
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

    console.log("Vetor gerado com sucesso!")
    return vector;

}

function readFile(name){
    const data = readFileSync(name,"utf-8");
    let lines = data.split("\n");
    
    let vector = [];

    for (let number of lines){
        vector.push(number.trim());
    }

    console.clear();
    console.log("Arquivo lido com sucesso!");

    return vector;
}

function vectorIsEmpty(vector){
    if (vector.length === 0){
        console.log("Inicialize o vetor primeiro!")
        return true
    }
}