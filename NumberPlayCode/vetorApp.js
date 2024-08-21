import {getNumberInRange, ask} from "./Funções/utils.js";
import { initializeVector, minMaxValues, showLength, showValues, showSum, valuesAverage } from "./Funções/vectorFunctions.js";

function showMenu() {

    console.clear();

    console.log(`
    ------------------------------- NumberPlay --------------------------------   

            [01] Inicializar Vetor           [09] Valores Negativos     
            [02] Mostrar Valores             [10] Média dos Valores
            [03] Resetar Vetor               [11] Média dos Valores
            [04] Quantidade de itens         [12] Média dos Valores
            [05] Menor e Maior número        [13] Média dos Valores
            [06] Somatório dos Valores       [14] Média dos Valores
            [07] Média dos Valores           [15] Média dos Valores
            [08] Valores Positivos           [16] Média dos Valores
                                                                            
    `);

    let option = getNumberInRange("Selecione uma opção: ", 1, 17, "\nSelecione uma opção valida!!\n");
    console.clear();

    return option;
}


function main(){

    let option = showMenu();
    let vector = [];

    while (option !== 17){

        if (option === 1){
             vector = initializeVector(vector);
        }else if(option === 2){
            showValues(vector,"all")
        }else if(option === 3){
            console.log("Valores Resetados!");
            vector = [];
        }else if(option === 4){
            showLength(vector);
        }else if(option === 5){
            minMaxValues(vector);
        }else if(option === 6){
            showSum(vector);
        }else if(option === 7){
            valuesAverage(vector)
        }else if(option === 8){
            showValues(vector, "positive")
        }else if(option === 9){
            showValues(vector, "negative")
        }else if (option === 10){
            updateValues(vector)
        }


        ask(`\nContinuar(Press Enter)`);
        option = showMenu();
    }
}

main();