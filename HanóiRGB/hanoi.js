import { ask } from "./Funções/utils.js";
import * as funcsHanoi from "./Funções/func_hanoi.js";

function showTowers(){
    console.clear();

    let move = funcsHanoi.askPlay("Qual será sua jogada: ");

    console.clear();
    return move;

}

function main(){
    // const player1 = ask("Digite o nome do primeiro player: ");
    // const player2 = ask("Digite o nome do segundo player: ");

    let torreR = funcsHanoi.creatTower(9);
    let torreG = [];
    let torreB = [];
    
    for (;!funcsHanoi.checkVictory();){
         showTowers();
         moves++
    }
}

main();