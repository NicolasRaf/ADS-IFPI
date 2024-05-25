/*19. Leia N, calcule e escreva o valor de S. (S = 1/N - 2/(N - 1) + 3/(N - 2) + ... + 1/N)*/ 
import {escreva,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Calcular Expressão 3-----------]\n`
        escreva(mensagem)


    //Entrada
        const numero = get_number_positive("Digite o valor de N na formula: ")

    //Saída
        mensagem = (`
    ==============================================
      O valor de S com N sendo ${numero} é ${calcular_Formula(numero).toFixed(2)}
    ==============================================
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
    let numerador_Impar = 0
    let denominador_Impar = 0
  
    for(let numerador = 1;denominador !== 1;numerador++){ 
  
      if (denominador % 2 !== 0) {
        denominador_Impar = num - decrescimo
      } else if (denominador % 2 === 0) {
        numerador_Impar = num - decrescimo
      }
  
      if (denominador % 2 !== 0) {
        resultado += numerador_Impar/denominador_Impar
      } else if (denominador % 2 === 0) {
        resultado -= numerador/denominador
      }
      
      decrescimo++
      denominador = num - decrescimo
  
    } 
    return resultado

}

main()