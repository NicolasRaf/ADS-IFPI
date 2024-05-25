/*16. Leia um número N, calcule e escreva os N primeiros termos de sequência de Fibonacci 
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2*/ 
import {escreva,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Sequência de Fibonacci-----------]\n`
        escreva(mensagem)


    //Entrada
        const numero = get_number_positive("Digite o tamanho da sequencia: ")

    //Saída
        mensagem = (`
    ======================================================
      A sequência de Fibonacci com ${numero} número/s é:
       ==> {${calcular_Sequencia(numero)}}
    ======================================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function calcular_Sequencia(num){
    let sequencia = 0
    let num_Atual = 0
    let num_Antes = 0
    
    for (let razão = 1;num > 1;num--){
        num_Antes = num_Atual
        num_Atual += razão
        razão = num_Antes

        sequencia += "," + num_Atual 
    }
    return sequencia
}


main()