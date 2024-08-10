/*2. Leia N e escreva todos os números inteiros pares de 1 a N. */ 
import {escreva, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-----------Contador de Numeros Pares-----------]\n`
    escreva(mensagem)


//Entrada
    const numero = get_number_positive("Digite um numero limite: ")

//Saída
     mensagem = (`
=============================================================
Os números pares de 1 a ${numero} são: 
${listar_numero(numero)}
=============================================================
    `)

    escreva(mensagem)

}

//Processamento
function listar_numero(numero){
    let contador = 0
    let lista = "inicial"   

    while(contador !== numero){
        contador++
        if(contador % 2 === 0 && lista !== "inicial")  
            lista += "," + contador 
        if(contador % 2 === 0 && lista === "inicial") 
            lista = contador
    }
    return lista
}

main()