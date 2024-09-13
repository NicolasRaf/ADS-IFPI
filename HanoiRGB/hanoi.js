import { askPlay, checkVictory, clone, creatTower, makeMove, printTowers } from "./Funções/func_hanoi.js";
import { ask } from "./Funções/utils.js";

function showTowers(allTowers, player){
    console.clear();
    printTowers(allTowers);

    let move = askPlay(`\nInforme o movimento ${player} : `);

    console.clear();
    return move;

}

function main(){
    const player1 = ask("Digite o nome do primeiro player: ");
    const player2 = ask("Digite o nome do segundo player: ");

    let towerR = creatTower(9);
    let towerG = creatTower(0);
    let towerB = creatTower(0);
    let allTowers = { "Torre R":towerR, "Torre G":towerG, "Torre B":towerB}

    let cloneTowers = clone(allTowers);
    let moves = 0;
    
    
    for (;!checkVictory(allTowers);) {
        let move = showTowers(allTowers, player1);
        allTowers = makeMove(move, allTowers);

        moves++;
    }

}

main();