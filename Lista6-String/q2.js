import { ask } from "./Funções/io.js"; // Importação das funções de IO


function main() {
    console.clear();

    //Apresentação
    let message = '\n\t[-----------Quebrar Frase-----------]\n';
    console.log(message);

    //Entrada
    let frase = ask("Digite a frase: ");

    //Processamento
    let fraseQuebrada = "";

    for (let letra in frase){
        fraseQuebrada += `\t${Number(letra) + 1} --> ${frase[letra]}\n`;
        }
  

    //Saída
    console.clear();

    message = (`
    ============================================\n
    ${fraseQuebrada}
    ============================================\n`);
    
    console.log(message);
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();