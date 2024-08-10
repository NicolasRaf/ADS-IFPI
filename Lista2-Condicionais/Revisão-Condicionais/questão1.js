/*1. Leia um número e mostre na tela se o número é positivo ou negativo*/ 
import { numerozin,escreva } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Positivo ou negativo--------]"
    escreva(mensagem)


//Entrada
   const numero = numerozin(`Digite um numero inteiro: `)

//Saída
     mensagem = (`
   ---------------------------------------------
    ${negativo_positivo(numero)}
   ---------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function negativo_positivo(numero){
    if(numero === 0)
        return `    O numero digitado é zero(neutro)!`
    else if(numero > 0)
        return `    O numero digitado é positivo!`
    else(numero < 0) 
        return `    O numero digitado é negativo!`

}


main()