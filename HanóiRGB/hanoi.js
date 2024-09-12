import * as funcsHanoi from "./Funções/func_hanoi.js";

function showTowers(allTowers, name){
    console.clear();

    for (let name in allTowers){
        const tower = allTowers[name];
        printInLine(` ${name}`);

        for (let element of tower){
            console.log(`   ${element}`);
        }
    }

    let move = funcsHanoi.askPlay("Qual será sua jogada: ");

    console.clear();
    return move;

}

function main(){
    // const player1 = ask("Digite o nome do primeiro player: ");
    // const player2 = ask("Digite o nome do segundo player: ");

    let towerR = funcsHanoi.creatTower(9);
    let towerG = funcsHanoi.creatTower(0);
    let towerB = funcsHanoi.creatTower(0);
    let allTowers = { towerR, towerG, towerB }
    
    let moves = 0
    
    
    for (;!funcsHanoi.checkVictory(allTowers);) {
        showTowers(allTowers, "Eu");
        moves++;
    }

    if (funcsHanoi.checkVictory(allTowers)){
        console.log("Ganhouu");
    }
}

main();