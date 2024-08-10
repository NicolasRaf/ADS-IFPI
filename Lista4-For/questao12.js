/*12. Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.*/ 
import {escreva,get_number,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Soma e Media de Lista-----------]\n`
        escreva(mensagem)


    //Entrada
        const limite = get_number_positive("Informe o tamanho da lista: ")

    //Saída
        const soma = calcular_Soma(limite)

        mensagem = (`
    =============================================
     A soma dos números é ${soma} e a media é ${soma/limite}
    =============================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function calcular_Soma (lim) {
    let soma = 0
    let indice = 1
    
    for (let ciclos = 1; ciclos <= lim; ciclos++) {
        let num = get_number(`Digite o ${indice}º numero: `)
        soma += num
    }
    return soma

}

main()