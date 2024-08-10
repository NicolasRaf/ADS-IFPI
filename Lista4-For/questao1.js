/*1. Leia N e escreva todos os números inteiros de 1 a N.*/ 
import {escreva, get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Contador de Números-----------]\n`
        escreva(mensagem)


    //Entrada
        const numero = get_number_positive("Digite um numero limite: ")

    //Saída
        mensagem = (`
    ======================================================
     Os números de 1 a ${numero} são: 
      ==> ${listar_numero(numero)}
    ======================================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento
function listar_numero(limite) {
    let lista = 1

    for (let num = 2;num <= limite;num++ ) {
        lista += "," + num
    }

    return lista
}


main()