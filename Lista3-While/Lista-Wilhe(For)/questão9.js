/*9. Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.*/
import { escreva, get_number_positive,get_number } from "./Funções/io.js"

function main() {
    //Apresentação
    let mensagem = `\n[------------Pares em Intervalo------------]\n`
    escreva(mensagem)

    //Entrada
    const limite_superior = get_number_positive("Informe o limite superior: ")
    const limite_inferior = get_number_limite("Informe o limite inferior: ", limite_superior)

    //Saída
     mensagem = (`
 ======================================================
   Os numeros pares no intervalo de ${limite_inferior} a ${limite_superior} são:
   ==> ${achar_pares(limite_superior, limite_inferior)}                
 ======================================================
  `)

    escreva(mensagem)
}

//Processamento
function achar_pares(lim_sup, lim_inf) {
    let numero_temp = lim_inf + 1
    let pares = ""

    while (numero_temp < lim_sup) {
        if (numero_temp % 2 === 0 && pares === "" ) {
            pares = numero_temp 
        }
        if (numero_temp % 2 === 0 && numero_temp !== pares) {
            pares +=   "," + numero_temp 
        }
        numero_temp++
    }

    return pares
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