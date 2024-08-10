/*23. Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
recente*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Comparador de Datas--------]"
    prompt(mensagem)


//Entrada
    const dia_A = numerozin("Qual o dia da primeira data: ")
    const mes_A = numerozin("Qual o mes da primeira data: ")
    const ano_A = numerozin("Qual o ano da primeira data: ")
    const dia_B = numerozin("Qual o dia da segunda data: ")
    const mes_B = numerozin("Qual o mes da segunda data: ")
    const ano_B = numerozin("Qual o ano da segunda data: ")

//Saída
     mensagem = (`
   ---------------------------------------------
    ${comapardor_datas(dia_A,mes_A,ano_A,dia_B,mes_B,ano_B)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function comapardor_datas(dA,mA,anoA,dB,mB,anoB){
    if(anoA === anoB && mA === mB && dA === dB)
        return "     As datas digitadas são iguais!"


    if(anoA > anoB)
        return `     A primeira data é mais recente!`
    else if(anoA < anoB)
       return `    A segunda data é mais recente!`
    else if(mA > mB)
        return `     A primeira data é mais recente!`
    else if(mA < mB)
       return `     A segunda data é mais recente!`
    else if(dA > dB)
        return `     A primeira data é mais recente!`
    else if(dA < dB)
        return `     A segunda data é mais recente!`
       
}


main()