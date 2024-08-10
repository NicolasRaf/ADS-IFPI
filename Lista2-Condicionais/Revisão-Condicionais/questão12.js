/*12. Leia um número e escreva se o número é inteiro ou decimal*/ 
import { numerozin,escreva,pergunta } from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = "[--------Inteiro ou Decimal--------]"
    escreva(mensagem)

//Entrada
    const numero = numerozin("Digite um numero inteiro ou decimal: ")

//Saída
     mensagem = (`
   -------------------------------------------
    ${inteiro_decimal(numero)}
   -------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function inteiro_decimal(numero){
    const parte_inteira = Math.trunc(numero)
    const parte_fracionaria = Math.abs(numero - parte_inteira)

    if(parte_fracionaria === 0)
        return "      O numero digitado é inteiro!"
    else
        return "      O numero digitado é decimal!"
}


main()