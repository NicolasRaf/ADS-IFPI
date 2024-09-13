import { askPlay, checkVictory, clone, creatTower, makeMove, printTowers } from "./Funções/func_hanoi.js";
import { ask } from "./Funções/utils.js";

function showTowers(Towers, player){
    console.clear();
    printTowers(Towers);

    let move = askPlay(`\nInforme o movimento ${player}: `);

    console.clear();
    return move;

}

function playGame(cloneTowers, player) {
    let moves = 0;

    for (; !checkVictory(cloneTowers); moves++) {
        let move = showTowers(cloneTowers, player);
        makeMove(move, cloneTowers);
    }

    console.log(`Movimentos feitos por ${player}: ${moves}`);
    return moves;
}

function main(){
    console.clear();

    const player1 = ask("Digite o nome do primeiro player: ");
    const player2 = ask("Digite o nome do segundo player: ");

    let towerR = creatTower(9);
    let towerG = creatTower(0);
    let towerB = creatTower(0);
    let allTowers = { towerR, towerG, towerB}

    let cloneTowers = clone(allTowers);

    let movesPlayer1 = playGame(allTowers,player1);
    ask("Proximo Player(Press Enter)");
    let movesPlayer2 = playGame(cloneTowers,player2);

    console.clear();
    console.log(`Movimentos de ${player1} -> ${movesPlayer1}`);
    console.log(`Movimentos de ${player2} -> ${movesPlayer2}\n`);
    

    if (movesPlayer1 > movesPlayer2){
        console.log(`${player2} GANHOU!`);
    } else if(movesPlayer1 < movesPlayer2) {
        console.log(`${player1} GANHOU!`);
    } else {
        console.log(`EMPATE!`);
    }
}   

main();