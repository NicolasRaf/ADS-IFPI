/*10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Verificador de data--------]"
    prompt(mensagem)


//Entrada
    const dia = numerozin("Digite o dia: ")
    const mes = numerozin("Digite o mes: ")
    const ano = numerozin("Digite o ano: ")
   
//Saída
     mensagem = (`
   ---------------------------------------------
            ${data_valida(dia,mes,ano)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function data_valida(dia,mes,ano){
    if(dia <= 0 || dia > 31 || mes > 12 || ano < 0)
        return "A data digitada é invalida"
    else if(eh_bissexto(ano) === false && dia === 29 && mes === 2)
        return `A data digitada é invalida
           (Dia 29 em ano não bissexto)`
    else 
        return "A data digita é valida"   
        
}  

function eh_bissexto(ano){
    if(ano % 400 === 0)
        return true
    else if(ano%4 === 0 && ano%100 != 0)
        return true
    else    
        return false    
}

main()