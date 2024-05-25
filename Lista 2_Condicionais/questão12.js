/*12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Par ou impar--------]"
    prompt(mensagem)


//Entrada
    const numero = numerozin("Digite um numero inteiro:")

//Saída
     mensagem = (`
   ---------------------------------------------
            ${impar_par(numero)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function impar_par(num){
    if (num < 0) {
        return "Digite um valor positivo!!!"
    } else if (num % 2 !== 0) {
        return "O valor digitado é ímpar"
    }
    return "O valor digitado é par"

}
  
main()