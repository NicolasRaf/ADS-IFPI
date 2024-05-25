/*14. Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Media e maiores--------]"
    prompt(mensagem)


//Entrada
    const numero1 = numerozin("Digite o primeiro valor inteiro: ")
    const numero2 = numerozin("Digite o segundo valor inteiro: ")
    const numero3 = numerozin("Digite o terceiro valor inteiro: ")
    const numero4 = numerozin("Digite o quarto valor inteiro: ")
    const numero5 = numerozin("Digite o quinto valor inteiro: ")
   
//Saída
     mensagem = (`
   ----------------------------------------------------------
    ${fazer_media(numero1,numero2,numero3,numero4,numero5)}
   ----------------------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function fazer_media(num1,num2,num3,num4,num5){
    const media = (num1 + num2 + num3 + num4 + num5)/5
    let maiores = ``
    let resultado = ``

    // Verifica igualdade entre os numeros
    if (num1 === num2 && num2 === num3 && num3 === num4 && num4 === num5) 
        return `A media é igual a ${media} e todos os valores são iguais!`
    
    if(num1 > media) maiores += num1 + " "
    if(num2 > media) maiores += num2 + " "
    if(num3 > media) maiores += num3 + " "
    if(num4 > media) maiores += num4 + " "
    if(num5 > media) maiores += num5 + " "

       
        
    resultado = `A media é igual a ${media.toFixed(1)} e os valores maiores: ${maiores}` 

    return resultado

    
}

main()