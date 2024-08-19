import { ask } from "./Funções/io.js"; // Importação das funções de IO

function ehVogal(letra){
    const vogais = "aeiouAEIOU";

    for (let i = 0;i < vogais.length; i++){
        if (letra === vogais[i]){
            return true;
        }
    }

    return false;
}

function inverterFrase(text){
    let fraseInvertida = "";
    let index = text.length - 1;

    for (let letra in text){
        fraseInvertida += text[index];
        index--;
    }

    return fraseInvertida;
}

function main() {
    console.clear();

    //Apresentação
    let message = '\n[-----------Criptografia-----------]\n'
    console.log(message);

    //Entrada
    const frase = ask("Digite a frase: ");

    //Processamento
    let fraseCriptografada = "";


    for (let letra of frase){
        if (ehVogal(letra)){
            fraseCriptografada += letra;
        }else{
            fraseCriptografada += "#";
        }

    }

    //Saída

    message = (`
    ============================================
     Frase Criptografada -> ${inverterFrase(fraseCriptografada)}
    ============================================\n`);
    
    console.log(message);
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();