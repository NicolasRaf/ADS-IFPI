import {getNumberInRange, ask} from "./Funções/utils.js";
import { initializeVector,minMaxValues,showLength } from "./Funções/vectorFunctions.js";

function showMenu() {

    console.clear();

    console.log(`
    ------------------------------- NumberPlay --------------------------------   

      [1] Inicializar Vetor          [5] Menor e Maior valores 
      [2] Mostrar Valores            [6] Palavras em Ordem Alfabética 
      [3] Resetar Vetor              [7] Ordem Alfabética em Qualquer Parte
      [4] Quantidade de itens        [8] Finalizar Execução   
                                                                            
    `);

    let option = getNumberInRange("Selecione uma opção: ", 1, 8, "\nSelecione uma opção valida!!\n");
    console.clear();

    return option;
}


function main(){

    let option = showMenu();
    let vector = [];

    while (option !== 8){

        if (option === 1){
             vector = initializeVector(vector);
        }else if (option === 2){
            console.log(`Valores: ${vector}`);
        }else if (option === 3){
            console.log("Valores Resetados!");
            vector = [];
        }else if(option === 4){
            showLength(vector)
        }else if(option === 5){
            minMaxValues(vector)
        }


        ask(`\nContinuar(Press Enter)`);
        option = showMenu();
    }
}

main();