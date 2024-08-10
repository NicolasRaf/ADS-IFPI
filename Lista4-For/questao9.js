/*9. Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos. */ 
import {escreva,get_number,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-------------Pares em Intervalo-------------]\n`
        escreva(mensagem)


    //Entrada
        const limite_superior = get_number_positive("Digite o Limite Superior: ")
        const limite_inferior = get_number_limite("Digite o Limite Inferior: ", limite_superior)


    //Saída
        mensagem = (`
    ======================================================
     Os numeros pares no intervalo de ${limite_inferior} a ${limite_superior} são:
      ==> ${calcular_Pares(limite_superior, limite_inferior)}  
    ======================================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function calcular_Pares(ls,li) {
    let pares = "inicial"

    for (let contador = 0; contador <= ls;contador++) {

        if ( contador % 2 === 0 && pares === "inicial" && contador > li) {
            pares = contador
        } else if (contador % 2 === 0 && pares !== "inicial" && contador > li){
            pares += "," + contador

        }
    }
    return pares
}

function get_number_limite (pergunta, num_Min) {
    const numero = get_number(pergunta)
  
    if (numero >= num_Min) {
      escreva('!!!Digite um valor menor que o limite superior!!!\n')
      return get_number_limite(pergunta)
    }
    return numero
}

main()