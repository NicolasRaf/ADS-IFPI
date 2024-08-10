/*9. Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Verificador de numero primo---------]"
    prompt(mensagem)

//Entrada  
    const numero = numerozin("Digite um numero entre 0 e 100: ")

//Saída
     mensagem = (`
   -----------------------------------------------
            ${verificador_primo(numero)}
   -----------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function verificador_primo(num){
    if(num === 2 || num === 3 || num === 5 || num === 7)
        return "O numero digitado é primo"
    else if(num === 100 || num === 1)
        return "O numero digitado não é primo"
    else if(num % 2 > 0 && num % 3 > 0 && num % 5 > 0 && num % 7 > 0) 
        return "O numero digitado é primo"
    else    
        return "O numero digitado não é primo" 

}

main()