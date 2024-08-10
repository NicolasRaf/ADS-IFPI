/*18. Leia N, calcule e escreva o valor de S. (S = 1/N + 2/(N - 1) + 3/(N - 2) + ... + N/1)*/ 
import {escreva, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Calcular Expressão 2------------]\n`
  escreva(mensagem)

//Entrada
  const numero = get_number_positive("Digite o valor de N na formula: ")

//Saída
     mensagem = (`
 ===========================================
  O valor de S com N sendo ${numero} é ${calcular_formula(numero)}
 ===========================================
  `)

  escreva(mensagem)
}

//Processamento
function calcular_formula(num){
  let resultado = 0 
  let numerador = 1
  let denominador = num 
  let decrescimo = 0

  while(denominador !== 1){ 
    resultado += numerador/denominador
    
    numerador++
    decrescimo++
    denominador = num - decrescimo
   if(denominador === 1){
    resultado += num
   }
  } 
  return resultado.toFixed(2)
}


main()