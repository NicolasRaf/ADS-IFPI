/*10. Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.*/
import { escreva, get_number_positive,get_number } from "./Funções/io.js"

function main() {
    //Apresentação
    let mensagem = `\n[------------Impares em Intervalo------------]\n`
    escreva(mensagem)

    //Entrada
    const limite_superior = get_number_positive("Informe o limite superior: ")
    const limite_inferior = get_number_limite("Informe o limite inferior: ", limite_superior)

    //Saída
     mensagem = (`
 ======================================================
   Os numeros impares no intervalo de ${limite_inferior} a ${limite_superior} são:
    ==> ${achar_impares(limite_superior, limite_inferior)}                
 ======================================================
  `)

    escreva(mensagem)
}

//Processamento
function achar_impares(lim_sup, lim_inf) {
    let numero_temp = lim_inf + 1
    let impares = ""

    while (numero_temp < lim_sup) {
        if (numero_temp % 2 !== 0 && impares === "" ) {
            impares = numero_temp 
        }
        if (numero_temp % 2 !== 0 && numero_temp !== impares) {
            impares +=   "," + numero_temp 
        }
        numero_temp++
    }

    return impares
}

function get_number_limite(pergunta, lim_sup){
    const numero = get_number(pergunta)
  
    if (numero >= lim_sup){
      escreva('!!!Digite um valor menor que o limite superior!!!\n')
      return get_number_limite(pergunta)
    }
    return numero
}

main()