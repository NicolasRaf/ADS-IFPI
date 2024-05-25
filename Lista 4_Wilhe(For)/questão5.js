/*5. Leia um número, calcule e escreva seu fatorial.*/ 
import {escreva, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Calculadora Fatorial------------]\n`
    escreva(mensagem)

//Entrada
    const numero = get_number_positive("Digite um numero: ")

//Saída
     mensagem = (`
 ===============================================
  O numero ${numero} fatorial é igual a ${calcular_fatorial(numero)}
 ===============================================
    `)

    escreva(mensagem)

}

//Processamento
function calcular_fatorial(numero){
    let contador = numero
    let resultado = 1

    while(contador !== 0 ){
        resultado *= contador
        contador--
    }
    
 return resultado

}


main()