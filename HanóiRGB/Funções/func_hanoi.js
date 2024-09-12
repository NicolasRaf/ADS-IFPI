import { ask, coloredPrint } from "./utils.js";

export function askPlay(text){
    const playsBase = ["rg","rb","gr","gb","bg","br"];
    
    const move = ask(text);

    for (let play of playsBase) {
        if (move === play){
            return move;
        }
    }

    coloredPrint("red","Faça um movimento valido!\n");
    return askPlay(text);

}

export function creatTower(size = 9){
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