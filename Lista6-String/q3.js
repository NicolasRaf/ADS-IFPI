import { ask } from "./Funções/io.js"; // Importação das funções de IO


function main() {
    console.clear();

    //Apresentação
    let message = '\n\t[-----------Retirar Espaço-----------]\n';
    console.log(message);

    //Entrada
    let frase = ask("Digite a frase: ");

    //Processamento
    let fraseCorrigida = "\t";

    for (let letra of frase){
        if (letra !== " "){
            fraseCorrigida += letra;
        }
    }

    //Saída
    console.clear();

    message = (`
    =============Frase sem Espaços=============\n
      ${fraseCorrigida}
    ===========================================\n`);
    
    console.log(message);
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();