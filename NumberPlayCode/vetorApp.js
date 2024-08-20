import {} from "./Funções/io.js"

function showMenu() {
    console.clear();

    console.log(`
    ------------------------------- NumberPlay --------------------------------   

      [1] Inicializar Vetor          [5] Letras Obrigatórias 
      [2] Palavras sem Letra X       [6] Palavras em Ordem Alfabética 
      [3] Letras Proibidas           [7] Ordem Alfabética em Qualquer Parte
      [4] Letras Únicas              [8] Finalizar Execução   
    ]                                                                               
    `);

    let option = getNumberInRange("Selecione uma opção: ", 1, 8, "\nSelecione uma opção valida!!\n");
    console.clear();
    
    return option;
}



function main(){
    let dic = {
        1 : showMenu()
    }

    let option = dic[1]

}

main()