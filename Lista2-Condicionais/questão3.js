/*3. Leia 3 (três) números, verifique e escreva o maior entre os números lidos*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Comparador de numeros--------]"
    prompt(mensagem)


 //Entrada 
    const num1 = numerozin("Qual o primeiro numero: ") 
    const num2 = numerozin("Qual o segundo numero: ")
    const num3 = numerozin("Qual o terceiro numero: ")

//Saída
     mensagem = (`
   ---------------------------------------------
    ${comparador_numeros(num1,num2,num3)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function comparador_numeros(numero1,numero2,numero3){
    if(numero1 === numero2 && numero2 === numero3)
        return "Por favor digte 3 numeros diferentes!"
    else if(numero1 > numero2 && numero1 > numero3 )
        return `         O maior numero é o ${numero1}`
    else if(numero2 > numero3)
        return `         O maior numero é o ${numero2}`
    else
        return `         O maior numero é o ${numero3}`
}

main()