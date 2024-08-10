/*13. Leia N e uma lista de N números e escreva o maior número da lista.*/ 
import {escreva,get_number,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Soma e Media de Lista-----------]\n`
        escreva(mensagem)


    //Entrada
        const limite = get_number_positive("Informe o tamanho da lista: ")

    //Saída

        mensagem = (`
    ===========================================
      O maior numero entre os listados é ${achar_Maior(limite)}
    ===========================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function achar_Maior (lim) {
    let indice = 1
    let maior = get_number(`\nDigite o ${indice}º numero: `)
        

    for (let ciclos = 2; ciclos <= lim; ciclos++) {
        indice++
        let num = get_number(`Digite o ${indice}º numero: `)
        
        if (num > maior){
            maior = num
        }
    }
    return maior

}

main()