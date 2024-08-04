import { ask } from "./Funções/io.js"; // Importação das funções de IO

function main() {
    console.clear();

    //Apresentação
    let message = '\n[-----------Criptografia-----------]\n'
    console.log(message);

    //Entrada
    let frase = ask("Digite a frase: ")

    //Processamento
    for ( let x in frase.slice(frase.length)){
        console.log()

    }

    //Saída
    console.clear();

    message = (`
    ============================================
     Frase Criptografada -> ${frase.length}
    ============================================\n`);
    
    console.log(message);
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();