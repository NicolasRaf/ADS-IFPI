/*7. Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.*/ 
import {escreva, get_number_positive} from "./Funções/io.js"

function main(){
  //Apresentação
  let mensagem = `\n[------------Soma Inteiros até N------------]\n`
  escreva(mensagem)

//Entrada
    const numero = get_number_positive("Digite um numero: ")

//Saída
     mensagem = (`
 ================================================
   A soma dos números de 1 até ${numero} é ${somar_numeros(numero)}
 ================================================
  `)

  escreva(mensagem)
}

//Processamento
function somar_numeros(numero){
  let contador = 0
  let resultado = 0

  while(contador !== numero){
    contador++
    resultado += contador
  }

  return resultado
}

main()