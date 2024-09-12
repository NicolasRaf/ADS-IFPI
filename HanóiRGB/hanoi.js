import { ask } from "./Funções/utils.js";
import * as funcHanoi from "./Funções/func_hanoi.js"

function showTowers(){
    console.clear();

    console.log(`
    --------------------------------- Hanói RGB --------------------------------------------


    ---------------------------------------------------------------------------------------\n`);
    
    let move = ask("Qual será sua jogada: ");

    console.clear();
    return move;

}

function main(){

    let torreR = creatTower()
    let torreG = []
    let torreB = []
    
    for (let move = showTowers(); move != 8;){
        
        
        move = showTowers();
    }
}

main();