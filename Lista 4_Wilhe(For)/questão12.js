/*12. Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista. */ 
import {escreva, get_number} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Soma e Media de Lista------------]\n`
  escreva(mensagem)

//Entrada
    const limite = get_number("Informe o tamanho da lista: ")

//Saída
    const soma = calcular_soma(limite)

     mensagem = (`
 ================================================
   A soma dos números é ${soma} e a media é ${fazer_media(soma,limite)}
 ================================================
  `)

  escreva(mensagem)
}

//Processamento
function calcular_soma(limite){
    let contador = 0
    let soma = 0
    let numero = 0

    while(contador < limite){
    contador++

    if(contador === 1)
        numero = get_number("Digite o primeiro numero : ")
    else
        numero = get_number("Digite outro numero : ")

    soma += numero
    }

    return soma
}

function fazer_media(soma,limite){
    return soma/limite
}

main()