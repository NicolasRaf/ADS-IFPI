import { ask, getNumberInRange } from "../utils.js";
import {allFunctions} from "./functions_while.js";

function showMenu(){
    console.clear();

    console.log("\t-------------------------- Loops e Recursividade ---------------------------");
    process.stdout.write(`
            \t[01] Fatorial                  [05] Exponencial de um Número N     
            \t[02] Fibonacci                 [06] Somatório de Vetor
            \t[03] Sequência Simples         [07] Contar Vogais e Consoantes
            \t[04] Calcular o Produto        [08] Finalizar Programa
\n`);
    console.log("\t\----------------------------------------------------------------------------\n");
    
    let option = getNumberInRange(">> Selecione uma opção: ",1,12,"Selecione uma opção valída!");

    console.clear();
    return option;

}


function main(){
    let option = showMenu();

    while (option != 8){
        allFunctions[option]();
        
        ask("\nContinuar(Press Enter)");
        option = showMenu();
    }
    console.log("Programa Encerrado..."); 
}

main();