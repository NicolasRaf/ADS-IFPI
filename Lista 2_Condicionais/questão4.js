/* 4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.*/
import { numerozin, prompt } from "./Funções/io.js"


function main() {
    //Apresentação
    let mensagem = "[------Comparador de Algarismos------]"
    prompt(mensagem)

    //Entrada
    const num = numerozin("Digite um numero de 2 digitos: ")

    //Processamento main
    const d = Math.floor(num / 10)
    const u = num % 10

    //Saída
    mensagem = (`
  -------------------------------------
   ${comparar_algarismos(d, u)}
  -------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function comparar_algarismos(dezena, unidade) {
    if (dezena === unidade)
        return `A dezena e a unidade são iguais`
    else if (dezena > unidade)
        return `A dezena é maior que a unidade`
    else
        return `A unidade é maior que a dezena`

}

main()
