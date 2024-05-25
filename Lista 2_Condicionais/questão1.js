/*1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[------Igualdade entre numeros------]"
    prompt(mensagem)


 //Entrada 
    const num1 = numerozin("Qual o primeiro numero: ") 
    const num2 = numerozin("Qual o segundo numero: ")
    const num3 = numerozin("Qual o terceiro numero: ")

//Saída
     mensagem = (`
    --------------------------------------------
    ${igualdade_numeros(num1,num2,num3)}
    --------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function igualdade_numeros(num1,num2,num3){
    if(num1 === num2 && num2 === num3)
        return "Há três numero iguais entre os digitados!"
    else if(num1 === num2 || num1 === num3 || num2 === num3)
        return "Há dois numero iguais entre os digitados!"
    else
        return "Não há numeros iguais entre os digitados!"
}

main()