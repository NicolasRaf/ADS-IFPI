/*18. Leia N, calcule e escreva o valor de S. (S = 1/N + 2/(N - 1) + 3/(N - 2) + ... + N/1)*/ 
import {escreva,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
    let mensagem = `\n[-----------Calcular Expressão 2-----------]\n`
    escreva(mensagem)


    //Entrada
    const numero = get_number_positive("Digite o valor de N na formula: ")

    //Saída
    mensagem = (`
    =============================================
      O valor de S com N sendo ${numero} é ${calcular_Formula(numero).toFixed(2)}
    =============================================
    `)

    escreva(mensagem)
    if (! pergunta(`Finalizar Programa?(Press Enter)`))
      console.clear()

}

//Processamento
function calcular_Formula (num) {
    let resultado = 0 
    let denominador = num 
    let decrescimo = 0

  for (let numerador = 1;denominador !== 1;numerador++) { 
    resultado += numerador/denominador
    
    decrescimo++
    denominador = num - decrescimo

   if (denominador === 1) {
    resultado += num
   }
  } 
  return resultado
}

main()