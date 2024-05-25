/*1. Leia N e escreva todos os números inteiros de 1 a N.*/ 
import {escreva, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-----------Contador de Numeros-----------]\n`
    escreva(mensagem)


//Entrada
    const numero = get_number_positive("Digite um numero limite: ")

//Saída
     mensagem = (`
======================================================
Os números de 1 a ${numero} são: 
${listar_numero(numero)}
======================================================
    `)

    escreva(mensagem)

}

//Processamento
function listar_numero(numero){
    let contador = 0
    let lista = 1

    while(contador != numero){
    contador++
    if(contador !== 1)
    lista += "," + contador   
    }

    return lista
}


main()