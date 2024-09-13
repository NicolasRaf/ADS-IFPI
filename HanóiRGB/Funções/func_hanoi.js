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
            if (element !== "R" && name === "Torre R") { return false }
            
            if (element !== "G" && name === "Torre G") { return false }
             
            if (element !== "B" && name === "Torre B") { return false }
        }
    }

    return true;
}

export function clone(allTowers){
    const newVector = { "Torre R": [], "Torre G": [], "Torre B": [] }

    let count = 0;
    for (let name in allTowers){
        const tower = allTowers[name];

        for (let element of tower){
            newVector[name].push(element);
        }
        count++;
  } 

  return newVector;
}

export function printTowers(allTowers) {
    let line = "";
    for (let name in allTowers) {
        line += `\t ${name}     `;
        }
        
    console.log(line);

    for (let i = 0; i < 9; i++){
        let numbers = "";
        for (let name in allTowers) {
            const tower = allTowers[name];

            numbers += (tower[i] !== undefined) ? `\t   ${tower[i]}        ` : ``; 
        }
        console.log(numbers);
    }
}


export function makeMove(move, Towers){
    const givertTower =  Towers[`Torre ${move[0]}`]
    const targetTower = Towers[`Torre ${move[1]}`]

    console.log(givertTower)
    console.log(targetTower)

    const element = givertTower[givertTower.length - 1]
    if (typeof(element) !== "undefined" || element !== " "){
        targetTower.push(element) 
        givertTower.splice(givertTower.length - 1,1)
    } else {
        console.log("Movimento Invalido!")
    }

    return Towers
}