/*27. Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
nascimento e a data (dia, mês e ano) atual.*/ 
import { numerozin,prompt} from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Idade Completa--------]"
    prompt(mensagem)


//Entrada
    const dia_atual = numerozin(`Que dia e hoje: `)
    const mes_atual = numerozin(`Qual o numero do mes atual: `)
    const ano_atual = numerozin(`Em que ano estamos: `)
    const dia_nasc = numerozin(`Qual o dia do seu nascimento: `)
    const mes_nasc = numerozin(`Qual o mes do seu nascimento: `)
    const ano_nasc = numerozin(`Qual o ano do seu nascimento: `)

//Saída
     mensagem = (`
   ---------------------------------------------
    ${idade_inteira(dia_atual,dia_nasc,mes_atual,mes_nasc,ano_atual,ano_nasc)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function idade_inteira(dia_atual,dia_nasc,mes_atual,mes_nasc,ano_atual,ano_nasc){
    let anos =``
    let meses = ``
    let dias = ``

    //Calcula os anos considerando o aniversario
    if(mes_atual < mes_nasc && mes_atual === mes_nasc || dia_atual < mes_nasc){
        anos = ano_atual - ano_nasc - 1
    }else{
        anos = ano_atual - ano_nasc
    }
    
      // Calcula os meses
      if (mes_atual > mes_nasc || (mes_atual === mes_nasc && dia_atual >= dia_nasc)) {
        meses = mes_atual - mes_nasc;
    } else {
        meses = (12 - mes_nasc) + mes_atual;
    }

    //Calcula os dias levando em conta o mes(30 dias) e diferença entre as datas
    if (mes_atual > mes_nasc || (mes_atual === mes_nasc && dia_atual >= dia_nasc)) {
        dias = Math.abs(30 - dia_nasc + dia_atual)
    } else {
        dias = Math.abs(30 - dia_nasc + dia_atual)
    }

    
    return `Você tem ${anos} anos, ${meses} meses e ${dias} dias.`

}

main()