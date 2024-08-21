import {getNumberInRange, ask} from "./Funções/io.js"
import { initializeVector } from "./Funções/vectorFunctions.js"

function showMenu() {

    console.clear();

    console.log(`
    ------------------------------- NumberPlay --------------------------------   

      [1] Inicializar Vetor          [5] Letras Obrigatórias 
      [2] Palavras sem Letra X       [6] Palavras em Ordem Alfabética 
      [3] Letras Proibidas           [7] Ordem Alfabética em Qualquer Parte
      [4] Letras Únicas              [8] Finalizar Execução   
                                                                            
    `);

    let option = getNumberInRange("Selecione uma opção: ", 1, 8, "\nSelecione uma opção valida!!\n");
    console.clear();

    return option;
}



function main(){
    let option = showMenu();

    while (option !== 8){
        if (option === 1){
            initializeVector()
        }


        ask(`\nContinuar(Press Enter)`);
        option = showMenu();
    }
}

main();