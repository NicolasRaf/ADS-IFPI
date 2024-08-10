/*21. Calcule e escreva o valor de S. (S = 1/1 + 3/2 + 5/3 + ... + 99/50)*/ 
import {escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Calcular Expressão 5------------]\n`
  escreva(mensagem)

//Entrada

//Saída
     mensagem = (`
 ====================================================
  O valor de S é ${calcular_formula()}
 ====================================================
  `)

  escreva(mensagem)
}

//Processamento
function calcular_formula(){
  let resultado = 0 
  let denominador = 1
  let numerador = 1

  while(numerador < 99){
   resultado += numerador/denominador
   denominador++
   numerador += 2
  }
  
  return resultado.toFixed(2)
}


main()