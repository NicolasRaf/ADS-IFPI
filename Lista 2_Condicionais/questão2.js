/*2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Verificador de maior/menor--------]"
    prompt(mensagem)


//Entrada  
    const num1 = numerozin("Qual o primeiro numero: ") 
    const num2 = numerozin("Qual o segundo numero: ")

//Saída
     mensagem = (`
   -----------------------------------------------------
    ${maior_menor(num1,num2)}
   -----------------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function maior_menor(numero1,numero2){
    if(numero1 === numero2)
        return "       Por favor escreva numeros diferentes!"
    else if(numero1>numero2)
        return `Entre os números digitados ${numero1} é maior que ${numero2}`
    else
        return `Entre os números digitados ${numero2} é maior que ${numero1}`
    
}


main()