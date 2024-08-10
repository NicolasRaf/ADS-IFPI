/*7. Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.*/ 
import {escreva,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Soma Inteiros até N-----------]\n`
        escreva(mensagem)


    //Entrada
        const numero = get_number_positive("Digite um numero: ")

    //Saída
        mensagem = (`
     ===================================
        A soma de 1 até ${numero} é ${calcular_Soma(numero)}
     ===================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento
function calcular_Soma (num) {
    let soma = 0

    for ( let contador = 1; contador <= num;contador++) {
        soma += contador
    }
    return soma
}


main()