import { checkVictory, clone, creatTowers, makeMove, selectMode, showTowers } from "./Funções/func_hanoi.js";
import { ask } from "./Funções/utils.js";

function playGame(Towers, player) {
    let cloneTowers = clone(Towers);
    let moves = 0;

    for (; !checkVictory(cloneTowers); moves++) {
        showTowers(cloneTowers);
        makeMove(cloneTowers, player);
    }

    console.log(`Movimentos feitos: ${moves}\n`);
    return moves;
}


function verifyWinner(player1, player2, movesPlayer1, movesPlayer2){
    console.clear();

    console.log(`Movimentos de ${player1} -> ${movesPlayer1}`);
    console.log(`Movimentos de ${player2} -> ${movesPlayer2}\n`);

    if (movesPlayer1 > movesPlayer2){
        console.log(`  ====> ${player2} GANHOU! <====`);
    } else if(movesPlayer1 < movesPlayer2) {
        console.log(`  ====> ${player1} GANHOU! <====`);
    } else {
        console.log(`  ====> EMPATE! <====`);
    }

}

function main(){
    console.clear();

    const mode = selectMode();
    console.clear();
    
    if (mode === 4) { 
        console.clear();
        console.log("Progama Finalizado...");
        return 
    }

    let allTowers = creatTowers(mode);
    const player1 = ask("Digite o nome do primeiro player: ");
    const player2 = ask("Digite o nome do segundo player: ");

    let movesPlayer1 = playGame(allTowers,player1);
    ask("Proximo Player(Press Enter)");
    let movesPlayer2 = playGame(allTowers,player2);
    
    verifyWinner(player1, player2, movesPlayer1, movesPlayer2);
}   

main();