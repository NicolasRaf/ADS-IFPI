import { ask } from "./Funções/io.js"; // Importação das funções de IO


function main() {
    console.clear();

    //Apresentação
    let message = '\n\t[-----------Quebrar Frase-----------]\n'
    console.log(message);

    //Entrada


    //Processamento


    //Saída
    console.clear();

    message = (`
    ============================================
    
    ============================================\n`);
    
    console.log(message);
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();