/*11. Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.*/ 
import {escreva,get_number,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Primos Delimitados-------------]\n`
        escreva(mensagem)


    //Entrada
        const limite_superior = get_number_positive("Digite o Limite Superior: ")
        const limite_inferior = get_number_limite("Digite o Limite Inferior: ", limite_superior)

    //Saída
        mensagem = (`
    ======================================================
     Os números primos no intervalo de ${limite_inferior} a ${limite_superior} são:
      ==> ${calcular_Primos(limite_inferior,limite_superior)}
    ======================================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function calcular_Primos(li, ls) {
    let primos = "inicial"

    for (let num = li + 1; num <= ls; num++) {
        let ehPrimo = true

        for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
            if (num % divisor === 0) {
                ehPrimo = false;
                break
            }
        }

        if (ehPrimo) {
            if (primos === "inicial") {
                primos = num
            } else {
                primos += "," + num
            }
        }
    }

    return primos
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