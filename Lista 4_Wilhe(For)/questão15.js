/*15. Leia N, calcule e escreva os N primeiros termos de sequência (1, 3, 6, 10, 15,...). */ 
import {escreva, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-------------Sequência de Razão Crescente-------------]\n`
  escreva(mensagem)

//Entrada
    const numero = get_number_positive("Digite o tamanho da sequencia: ")

//Saída
     mensagem = (`
 ================================================
  A sequência com ${numero} número/s é:
  ==> {${fazer_sequencia(numero)}}
 ================================================
  `)

  escreva(mensagem)
}

//Processamento
function fazer_sequencia(num){
    num--
    let sequencia = 1
    let num_seq = 1
    let razao = 2
    
    while(num > 0){
    num--
    num_seq += razao
    sequencia += "," + num_seq
    razao++
    }

    return sequencia
}

main()