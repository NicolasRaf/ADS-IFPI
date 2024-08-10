/*8. Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos).*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[------Idade exata------]"
    prompt(mensagem)


//Entrada
    const dia_atual = numerozin(`Que dia e hoje: `)
    const mes_atual = numerozin(`Qual o numero do mes atual: `)
    const ano_atual = numerozin(`Em que ano estamos: `)
    const dia_nasc = numerozin(`Qual o dia do seu nascimento:`)
    const mes_nasc = numerozin(`Qual o mes do seu nascimento:`)
    const ano_nasc = numerozin(`Qual o ano do seu nascimento:`)
   
//Saída
     mensagem = (`
   ---------------------------------------------
           ${idade_exata(dia_atual,dia_nasc,mes_atual,mes_nasc,ano_atual,ano_nasc)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function idade_exata(dia_atual,dia_nasc,mes_atual,mes_nasc,ano_atual,ano_nasc){
    if(mes_atual < mes_nasc)
        return `Você tem exatamente ${ano_atual - ano_nasc - 1} anos!`
    else if(dia_atual < dia_nasc)
        return `Você tem exatamente ${ano_atual - ano_nasc - 1} anos!`
    else
        return `Você tem exatamente ${ano_atual - ano_nasc} anos!`


}

main()