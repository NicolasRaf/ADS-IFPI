/*8. Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos. */ 
import {escreva,get_number,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Múltiplos Delimitados-----------]\n`
        escreva(mensagem)


    //Entrada
        const numero = get_number_positive("Digite um numero: ")
        const limite_superior = get_number_positive("Digite o Limite Superior: ")
        const limite_inferior = get_number_limite("Digite o Limite Inferior: ", limite_superior)


    //Saída
        mensagem = (`
    ======================================================
     Os Múltiplos de ${numero} entre ${limite_inferior} e ${limite_superior} são:
      ==> ${calcular_Multipos(numero,limite_superior,limite_inferior)}
    ======================================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function calcular_Multipos(num,ls,li) {
    let num_Atual = li - 1
    let multiplos = "inicial"

    for (let contador = 1; num_Atual <= ls;contador++) {
       
        if ( num_Atual >= li && multiplos === "inicial") {
            multiplos = num_Atual 
        } else if ( num_Atual >= li && multiplos !== "inicial") {
            multiplos += "," + num_Atual
        }

        num_Atual = num * contador

    }

    return multiplos
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