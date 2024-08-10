/* 9. Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro
valor deve aparecer valor inválido.*/ 
import { numerozin,escreva,pergunta } from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `[--------Verificador de data--------]`
    escreva(mensagem)


//Entrada
   const dia = numerozin("Digite um numero correspndente a um dia da semanda(1 a 7): ")
   if(cancelar(dia) === false)
        return escreva(`
    !!!Valor Inválido!!!`)//Valida se a opção corresponde a um numero da semana

//Saída
     mensagem = (`
   ---------------------------------------------
    ${conferir_dia(dia)}
   ---------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function cancelar(dia){
    return dia === 1 || dia === 2 || dia === 3 || dia === 4 || dia === 5 || dia === 6 || dia === 7
}

function conferir_dia(dia){
    if(dia === 1)
        return `       O dia escolhido foi domingo!`
    else if(dia === 2)
        return `    O dia escolhido foi segunda-feira!`
    else if(dia === 3)
        return `    O dia escolhido foi terça-feira!`
    else if(dia === 4)
        return `    O dia escolhido foi quarta-feira!`
    else if(dia === 5)
        return `    O dia escolhido foi quinta-feira!`
    else if(dia === 6)
        return `    O dia escolhido foi sexta-feira!`
    else (dia === 7)
        return `       O dia escolhido foi sabádo!`


}


main()