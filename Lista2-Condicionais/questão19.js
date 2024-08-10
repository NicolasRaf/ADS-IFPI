/*19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
(IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[-------Calcular IMC-------]"
    prompt(mensagem)


//Entrada
   const altura = numerozin("Qual sua altura(m): ")
   const peso = numerozin("Qual seu peso(kg): ")

//Saída
     mensagem = (`
   -----------------------------------------------
    ${fazer_IMC(altura,peso)}
   -----------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function fazer_IMC(altura,peso){
const imc = peso/(altura)**2

    if(imc < 25)
        return `Você esta com o peso normal(IMC = ${imc.toFixed(2)})!`
    else if(imc >= 25 && imc <= 30)
        return `        Você esta obeso (IMC = ${imc.toFixed(2)})!`
    else(imc > 30)
      return `Você esta com obesidade mórbida(IMC = ${imc.toFixed(2)})!`
}

main()