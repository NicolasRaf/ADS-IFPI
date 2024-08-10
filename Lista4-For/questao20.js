/*20. Leia N, calcule e escreva o valor de S. (S = 1/1 + 1/2 - 1/3 + ... +- 1/n)*/ 
import {escreva,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Calcular Expressão 4-----------]\n`
        escreva(mensagem)


    //Entrada
        const numero = get_number_positive("Digite o valor do ultimo denominador: ")

    //Saída
        mensagem = (`
    ============================================================
      O valor de S com o ultimo denominador sendo ${numero} é ${calcular_Formula(numero).toFixed(2)}
    ============================================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function calcular_Formula(num){
    let resultado = 0 

  for (let denominador = 1;denominador <= num;denominador++) {

    if (denominador % 2 !== 0) {
        resultado += 1/denominador
    } else if (denominador % 2 === 0) {
        resultado -= 1/denominador
   }
 }
  return resultado

}


main()