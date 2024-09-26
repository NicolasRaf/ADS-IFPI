import { ask, coloredPrint, getNumberInRange, printInLine } from "./Funções/utils.js";
import { allFunctions, loadSchoolMatriz } from "./Funções/enem_func.js"


function showMenu() {
    console.clear();

    coloredPrint("yellow", "\t----------------------------------- Consulta ENEM 2014 -----------------------------------");
    printInLine(`
            \t[01] Top N Brasil(todas as áreas)     [06] Melhor escola (Área/Estado ou BR)     
            \t[02] Top N Brasil por Área            [07] Listas Escolas (Estado/Renda)
            \t[03] Top N por Estado                 [08] Busca escola por Nome
            \t[04] Top N por Estado e Rede          [09] Ranking ENEM por Estado
            \t[05] Media Nacional por Área          [10] Ranking ENEM por Região do País
                                                                            
    `);
    coloredPrint("yellow", "\t------------------------------------------------------------------------------------------\n");

    return getNumberInRange(">> Selecione a opção: ",1,16,"Selecione uma opção valída!\n");
}



function main() {
    const database = loadSchoolMatriz();
    
    for (let option = showMenu(); option < 10;) {
            console.clear();
            allFunctions[option - 1](database, option);

            ask("\nContinuar(Press Enter)");
            console.clear();    
            option = showMenu();
        }
    } 


main();