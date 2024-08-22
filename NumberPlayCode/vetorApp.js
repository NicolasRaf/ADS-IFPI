import {getNumberInRange, ask} from "./Funções/utils.js";
import * as vectorFunctions from "./Funções/vectorFunctions.js";    

function showMenu() {

    console.clear();

    console.log(`
    ------------------------------- NumberPlay ---------------------------------------  

             [01] Inicializar Vetor           [09] Valores Negativos     
             [02] Mostrar Valores             [10] Atualizar Valores
             [03] Resetar Vetor               [11] Adicionar Valores
             [04] Quantidade de itens         [12] Remover Itens por Valor
             [05] Menor e Maior número        [13] Remover Item por Posição
             [06] Somatório dos Valores       [14] Editar Valor por Posição
             [07] Média dos Valores           [15] Salvar Vetor em Arquivo ".txt"
             [08] Valores Positivos           [16] Sair(Save Automático)

    -----------------------------------------------------------------------------------
                                                                            
    `);

    let option = getNumberInRange("Selecione uma opção: ", 1, 16, "\nSelecione uma opção valida!!\n");
    console.clear();

    return option;
}


function main(){

    let option = showMenu();
    let vector = [];

    while (option !== 16){

        if (option === 1){
             vector = vectorFunctions.initializeVector(vector,"");
        }else if(option === 2){
            vectorFunctions.showValues(vector,"all");
        }else if(option === 3){
            console.log("Valores Resetados!");
            vector = [];
        }else if(option === 4){
            vectorFunctions.showLength(vector);
        }else if(option === 5){
            vectorFunctions.minMaxValues(vector);
        }else if(option === 6){
            vectorFunctions.showSum(vector);
        }else if(option === 7){
            vectorFunctions.valuesAverage(vector);
        }else if(option === 8){
            vectorFunctions.showValues(vector, "positive");
        }else if(option === 9){
            vectorFunctions.showValues(vector, "negative");
        }else if (option === 10){
            vector = vectorFunctions.updateValues(vector);
        }else if (option === 11){
            vector = vectorFunctions.addToVector(vector);
        }else if (option === 12){
            vector = vectorFunctions.removeItensByValue(vector);
        }else if (option === 13){
            vector = vectorFunctions.removeItensByIndex(vector);
        }else if (option === 14){
            vector = vectorFunctions.editItensByIndex(vector);
        }else if (option === 15){
            vectorFunctions.saveVector(vector);
        }
        
        ask(`\nContinuar(Press Enter)`);
        option = showMenu();
    }

    if (vector.length > 0){
        vectorFunctions.saveVector(vector);
    }
    console.log("Programa Encerrado...");
        
}

main();