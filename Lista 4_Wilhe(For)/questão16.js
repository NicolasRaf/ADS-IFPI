/*16. Leia um número N, calcule e escreva os N primeiros termos de sequência de Fibonacci 
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.*/ 
import {escreva, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-------------Sequência de Fibonacci-------------]\n`
  escreva(mensagem)

//Entrada
const numero = get_number_positive("Digite o tamanho da sequencia: ")

//Saída
     mensagem = (`
 ========================================================
  A sequência de Fibonacci com ${numero} número/s é:
  ==> {${fazer_sequencia(numero)}}
 ========================================================
  `)

  escreva(mensagem)
}

//Processamento
function fazer_sequencia(num){
    let sequencia = 0
    let num_seq = 0
    let num_antes = 0
    let razão = 1

    while(num > 1){
    num--
    num_antes = num_seq
    num_seq += razão
    razão = num_antes

    sequencia += "," + num_seq 
    }
    return sequencia
}


main()