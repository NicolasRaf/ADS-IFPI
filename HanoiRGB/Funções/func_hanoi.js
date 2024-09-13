import { ask, coloredPrint } from "./utils.js";

export function askPlay(text){
    const playsBase = ["rg","rb","gr","gb","bg","br"];
    
    const move = ask(text);

    for (let play of playsBase) {
        if (move === play.toUpperCase() || move === play){
            return move.toUpperCase();
        }
    }

    coloredPrint("red","Faça um movimento valido!\n");
    return askPlay(text);

}

export function creatTower(size){
    const elements = ["R","G","B"];
    const tower = [];

    for (let i = 0; i < size; i++) {
        let index = Math.floor(Math.random() * elements.length);
        tower.push(elements[index]);
    }

    return tower;
}


export function checkVictory(allTowers){
    
    for (let name in allTowers){ 
        let tower = allTowers[name];

        for (let element of tower){
            if (element !== "R" && name === "towerR") { return false }
            
            if (element !== "G" && name === "towerG") { return false }
             
            if (element !== "B" && name === "towerB") { return false }
        }
    }

    return true;
}

export function clone(allTowers){
    let towerR = allTowers["towerR"].slice();
    let towerG = allTowers["towerG"].slice();
    let towerB = allTowers["towerB"].slice();

    const newTowers = {towerR, towerG, towerB}


  return newTowers;
}

export function printTowers(Towers) {
    let line = "";
    for (let name in Towers) {
        line += `\t${name}\t\t`; 
    }

    console.log(line);

    for (let i = 0; i < 9; i++) {
        let row = "";
        for (let name in Towers) {
            const tower = Towers[name];

            
            row += (tower[i] !== undefined) ? `\t  ${tower[i]}\t\t` : `\t   \t\t`;
    }
    console.log(row);
  }
}


export function makeMove(move, Towers){
    const givertTower =  Towers[`tower${move[0]}`];
    const targetTower = Towers[`tower${move[1]}`];

    const element = givertTower.pop() 
    if (element !== undefined){
        targetTower.push(element);
    } else {
        console.log("Movimento Invalido!");
    }
}