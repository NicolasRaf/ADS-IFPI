import { ask } from "./Funções/io.js"; // Importação das funções de IO


function main() {
    console.clear();

    //Apresentação
    let message = '\n\t[-----------Duplicador de Caracteres-----------]\n';
    console.log(message);

    //Entrada
    let frase = ask("Digite a frase: ");

    //Processamento
    let fraseDuplicada = "";

    for (let letra of frase){
        fraseDuplicada += letra;
        fraseDuplicada += letra;
    }

    //Saída
    console.clear();

    message = (`
    ============================================
    \t${fraseDuplicada}
    ============================================\n`);
    
    console.log(message);
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();