/*11. Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos. */ 
import {escreva, get_number, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Primos Delimitados------------]\n`
  escreva(mensagem)

//Entrada
const limite_superior = get_number_positive ("Informe o limite superior: ")
const limite_inferior = get_number_limite("Informe o limite inferior: ", limite_superior)

//Saída
     mensagem = (`
 =======================================================
 Os números primos no intervalo de ${limite_inferior} a ${limite_superior} são:
  ==> ${ehPrimo(limite_inferior,limite_superior)}
 =======================================================
  `)

  escreva(mensagem)
}

// Processamento
function ehPrimo(li, ls) {
  let primos = "inicial"
  let num = li + 1

  while (num < ls) {
    if(acharPrimos(num) && primos !== "inicial"){
      primos += "," + num
    }

    if(acharPrimos(num) && primos === "inicial"){
      primos = num
  }
      num++
  }
  return primos
}

function acharPrimos(num) {
  let divisor = 2

  while(divisor <= Math.sqrt(num)){
    if(num % divisor === 0){
      return false
    }
      divisor++
  }
  return true
}


function get_number_limite(pergunta, lim_sup){
    const numero = get_number(pergunta)
  
    if (numero >= lim_sup ){
      escreva('!!!Digite um valor menor que o limite superior!!!\n')
      return get_number_limite(pergunta)
    }

    if (numero <= 0){
      escreva('!!!Digite um valor valido!!!\n')
      return get_number_positive(pergunta)
    }

    return numero
}

main()