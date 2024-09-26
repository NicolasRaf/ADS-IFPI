import * as ultils from "./utils.js";

export function createSchoolDict(line = []){
    const schoolDict = {}

    schoolDict.name = line[1];
    schoolDict.city = line[2];
    schoolDict.state = line[3];
    schoolDict.type = line[4];
    schoolDict.permanence = line[5];
    schoolDict.socioEconomicStatus = line[6];
    schoolDict.media = line[7];
    schoolDict.language = line[8];
    schoolDict.math = line[9];
    schoolDict.science = line[10];
    schoolDict.humans = line[11];
    schoolDict.redaction = line[12];

    return schoolDict;
}

export function getType(){
    const option = ultils.getNumberInRange(`1 - Federal\n2 - Privada\n\n>> `,1,2,"Selecione uma rede valída!\n");
    
    if (option === 1) {return "Federal"} else { return "Privada" }
}

export function getState(){
    const statesUF = ["RO","AC","AM","RR","PA","AP","TO","MA","PI","CE","RN",
        "PB","PE","AL","SE","BA","MG","ES","RJ","SP","PR","SC","RS","MS","MT","GO","DF"];

    const choice = ultils.ask("Digite a sigla UF do estado: ");
    for (let uf of statesUF){
        if (choice.toUpperCase() === uf){
            return choice.toUpperCase();
        }
    }

    ultils.coloredPrint("red","Digite um UF valído!\n");
    return getState();
}   

export function getStudyAreas(){
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
            return [index.slice(4), areaBase[index]];
        }
    }

}

