/*17. Leia N, calcule e escreva o valor de S. (S = 1/1 + 1/2 + 1/3 + ... + 1/n)*/ 
import {escreva, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Calcular Expressão------------]\n`
  escreva(mensagem)

//Entrada
  const numero = get_number_positive("Digite o valor do ultimo denominador: ")

//Saída
     mensagem = (`
 =============================================================
  O valor de S com o ultimo denominador sendo ${numero} é ${calcular_formula(numero)}
 =============================================================
  `)

  escreva(mensagem)
}

//Processamento
function calcular_formula(num){
  let resultado = 0 
  let denominador = 1

  while(denominador <= num ){
   resultado += 1/denominador
   denominador++
  }
  return resultado.toFixed(2)
}


main()