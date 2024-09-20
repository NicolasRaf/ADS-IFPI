import * as ultils from "./utils.js";
import {readFileSync} from "fs";

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

function createSchoolDict(line = []){
    const schoolDict = {}

    schoolDict.name = line[1];
    schoolDict.city = line[2];
    schoolDict.state = line[3];
    schoolDict.type = line[4];
    schoolDict.permanence = line[5];
    schoolDict.socioEconomicStatus = line[6];
    schoolDict.objectiveMedia = line[7];
    schoolDict.language = line[8];
    schoolDict.math = line[9]
    schoolDict.science = line[10];
    schoolDict.humans = line[11];
    schoolDict.redaction = line[12];

    return schoolDict;
}


export function topBrazil(vector){
    console.clear();
    let top = ultils.getNumberPositive(">> Informe o Top: ");

    console.clear()
    console.log(`--------------------------------------------------------`);
    for (let index = 0; index <= top - 1; index++ ){    
        console.log(`${index + 1}º - ${vector[index].name} --> ${vector[index].objectiveMedia}`);
        console.log(``);
    }


}

export function topBrazilArea(vector){
    console.clear();
    let top = ultils.getNumberPositive(">> Informe o Top: ");
    let area = showStudyAreas();

    console.clear()
    console.log(`--------------------------------------------------------`);
    for (let index = 0; index <= top - 1; index++ ){    
        console.log(`${index + 1}º - ${vector[index].name} --> ${vector[index].objectiveMedia}`);
        console.log(``);
    }
}

function showStudyAreas(){
    const areaBase = {
        "1 - Linguagens": "language",
        "2 - Matemática": "math",
        "3 - Ciências da Natureza": "science",
        "4 - Humanas": "humans",
        "5 - Redação": "redaction"
    }

    console.log(`----------------------`);
    for (let index in areaBase){
        console.log(`${index}`);
    }
    console.log(`----------------------\n`);

    const option = ultils.getNumberInRange(">> Selecione umas das areas acima: ",1,5,"Informe um indíce valido!\n");

    for (let index in areaBase){
        if (Number(index[0]) === option){
            return [index, areaBase[index]]
        }
    }

}


export const allFunctions = [
    topBrazil,
    topBrazilArea
]