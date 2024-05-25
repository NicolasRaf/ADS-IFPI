/*15. Leia N, calcule e escreva os N primeiros termos de sequencia (1, 3, 6, 10, 15,...).*/ 
import {escreva,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Sequência de Razão Crescente-----------]\n`
        escreva(mensagem)


    //Entrada
        const numero = get_number_positive("Digite o tamanho da sequencia: ")

    //Saída
        mensagem = (`
    ======================================================
      A sequência com ${numero} número/s é:
       ==> {${fazer_Sequencia(numero - 1)}}
    ======================================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function fazer_Sequencia(ciclos){
    let sequencia = 1
    let num_Atual = 1
    
    for (let razao = 2;ciclos > 0;razao++){
        ciclos--
        num_Atual += razao
        sequencia += "," + num_Atual
    }

    return sequencia
}


main()