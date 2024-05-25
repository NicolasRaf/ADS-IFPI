/*5. Leia um número, calcule e escreva seu fatorial.*/ 
import {escreva,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Calculadora Fatorial-----------]\n`
        escreva(mensagem)


    //Entrada
        const numero = get_number_positive("Digite um numero: ")

    //Saída
        mensagem = (`
    =====================================
        O fatorial de ${numero} é ${calcular_fatorial(numero)}
    =====================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento
    function calcular_fatorial(num) {
        let resultado = 1

        for (;num > 0;num--) {
            resultado *= num  
        }

    return resultado

}

main()