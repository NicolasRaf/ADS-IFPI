import * as ultils from "./utils.js";
import {readFileSync} from "fs";
import { createSchoolDict, getState, getStudyAreas, getType } from "./dict_funcs.js"

export function loadSchoolMatriz(){
    const data = readFileSync("enem2014.csv", "utf-8");
    const lines = data.split("\n");
    const schools = [];

    for (const line of lines){
        const school = line.split(";");
        schools.push(createSchoolDict(school));
    }

    return schools;
}

export function topBrazil(database){
    const top = ultils.getNumberPositive(">> Informe o Top: ");

    console.clear()
    console.log(`----------------------- TOP ${top} Média ---------------------------------`);

    for (let index = 0; index < top; index++ ){
        if(database[index]) {
            console.log(`${index + 1}º - ${database[index].name} --> ${database[index].media}`);
            console.log(`Cidade: ${database[index].city}, Estado: ${database[index].state}`);
            console.log(``);
        }
    }


}

export function topBrazilArea(database){
    const top = ultils.getNumberPositive(">> Informe o Top: ");
    const areaInfo = getStudyAreas(); 

    const areaName = areaInfo[0];    
    const areaField = areaInfo[1];    

    const sortVector = ultils.quickSortDict(database.slice(), areaField, true);

    console.clear();
    console.log(`-------------------------- TOP ${top} ${areaName} ------------------------------\n`);

    for (let index = 0; index < top; index++ ){
        if(sortVector[index]) {
            console.log(`${index + 1}º - ${sortVector[index].name} --> ${sortVector[index][areaField]}`);
            console.log(`Cidade: ${sortVector[index].city}, Estado: ${sortVector[index].state}`);
            console.log(``);
        }
    }
}


export function topState(database, option){
    const top = ultils.getNumberPositive("Informe o top: ");
    const state = getState();
    let position = 0;
    let type = (option === 4) ? getType() : "";
    
    console.clear()
    console.log(`----------------------- TOP ${top} Média ${state} ---------------------------------\n`);

    for (let index = 0; position < top;index++){
        if (database[index] === undefined) {
            console.log(`>> ${position} escolas encontradas!`);
            break;
        }

        if (option === 4){
            if (database[index].state === state && database[index].type === type){
                position++;
                console.log(`${position}º - ${database[index].name} --> ${database[index].media}`);
                console.log(`Cidade: ${database[index].city}, Rede: ${database[index].type}`);
                console.log();
            }
        } else {
            if (database[index].state === state){
                position++;
                console.log(`${position}º - ${database[index].name} --> ${database[index].media}`);
                console.log(`Cidade: ${database[index].city}, Rede: ${database[index].type}`);
            }
        }
    }
}

export function averagePerArea(database){
    const area = getStudyAreas()

    
}

export const allFunctions = [
    topBrazil,
    topBrazilArea,
    topState,
    topState
]