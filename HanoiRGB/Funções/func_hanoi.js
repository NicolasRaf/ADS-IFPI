import { ask, coloredPrint, getNumberInRange } from "./utils.js";

export function selectMode() {
    console.log(`
        ---------- Hanói RGB ----------
            [1] Nível Básico 
            [2] Nível Intermediário     
            [3] Nível Avançado
            [4] Finalizar Jogo 
        -------------------------------
        `);

    return getNumberInRange(">> Selecione um modo: ",1,4,"Selecione um modo entre os listados!\n");
}

export function askPlay(text, towers){
    const playsBase = ["rg","rb","gr","gb","bg","br"];
    
    const move = ask(text);

    for (let play of playsBase) {
        if (move === play.toUpperCase() || move === play){
            return move.toUpperCase();
        }
    }

    showTowers(towers)
    coloredPrint("red","\nFaça um movimento valido!");
    return askPlay(text, towers);

}

export function creatTowers(mode){
    const towers = { "towerR": [] , "towerG": [], "towerB": [] }

    switch (mode) {
        case 1: 
            towers["towerR"] = fillTower(9);
            return towers;
        case 2: 
            for (let name in towers){
                const size = Math.floor(Math.random() * ((6 + 1) - 3)) + 3; // Max = 6 || Min = 3
                towers[name] = fillTower(size);
            }

            return towers;
        case 3: 
            for (let name in towers) { towers[name] = fillTower(8) }
   
            return towers;
    }
}


function fillTower(size) {
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
            if (element !== "R" && name === "Torre R") { return false }
            
            if (element !== "G" && name === "Torre G") { return false }
             
            if (element !== "B" && name === "Torre B") { return false }
        }
    }
    return true;
}

export function clone(allTowers){
    let towerR = allTowers["towerR"].slice();
    let towerG = allTowers["towerG"].slice();
    let towerB = allTowers["towerB"].slice();

    const newTowers = {"Torre R": towerR, "Torre G": towerG, "Torre B": towerB}

  return newTowers;
}

export function showTowers(Towers) {
    console.clear();
    const colorCod = { "Torre R": "\x1b[31m", "Torre G": "\x1b[32m", "Torre B": "\x1b[34m" };
    
    let line = "";
    for (let name in Towers) {
        line += `\t${colorCod[name]}${name}\x1b[0m\t\t`; 
    }
    
    console.log(line);
    
    for (let i = 8; i >= 0; i--) {
        let row = "";
        for (let name in Towers) {
            const tower = Towers[name];
            
            row += (tower[i] !== undefined) ? `\t  ${tower[i]}\t\t` : `\t   \t\t`;
        }
        console.log(row);
    }

  console.log("\x1b[31m |===================|\x1b[32m |====================|\x1b[34m |=====================|\x1b[0m");
}


export function makeMove(towers, player){
    let move = askPlay(`\nInforme o movimento ${player}: `, towers);

    const givertTower =  towers[`Torre ${move[0]}`];
    const targetTower = towers[`Torre ${move[1]}`];

    const element = givertTower.pop();
    if (element !== undefined && targetTower.length < 9){
        targetTower.push(element);
    } 
    else if (element !== undefined) {
        givertTower.push(element);
        showTowers(towers);
        coloredPrint("red", "\nMovimento Invalido!");
        return makeMove(towers, player)
    } 
    else {
        showTowers(towers);
        coloredPrint("red", "\nMovimento Invalido!");
        return makeMove(towers, player)
    }
}