/*13.Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
somas. (Flag: salário=0)*/ 
import { get_number_positive_zero,escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[--------Reajuste Salarial--------]\n
    >>>>Digite 0 no salário para finalizar o programa!<<<<
    `
    escreva(mensagem)


//Entrada
   let salário = get_number_positive_zero("Digite o valor do seu salario: ")

//Saída
    const somas = calcular_salários(salário)
    const soma_atuais = somas[0]
    const soma_reajustados = somas[1]
    const diferença_salários = Math.abs(soma_reajustados - soma_atuais)
    

     mensagem = (`
==========================================================\n
Soma dos salários atuais: R$ ${soma_atuais.toFixed(2)}
Soma dos salários reajustados: R$ ${soma_reajustados.toFixed(2)}
Diferença entre salários atuais e reajustados: R$ ${diferença_salários.toFixed(2)}
\n===========================================================
    `)

    escreva(mensagem)

}

//Processamento

function calcular_salários(salário){
    let posição = 1
    let salário_novo = 0
    let soma_salários_atuais = 0
    let soma_salários_reajustados = 0
    
    escreva(`\n--------${posição}° Funcionário---------`)
    while(salário !== 0){
    soma_salários_atuais += salário
    salário_novo = salário + reajuste_salário(salário)
    soma_salários_reajustados += salário_novo
    escreva(mensagem_reajuste(salário,salário_novo))
    posição++
    escreva(`\n--------${posição}° Funcionário---------\n`)
    salário = get_number_positive_zero("Digite o valor do seu salario: ")
    }

    return [soma_salários_atuais, soma_salários_reajustados]
}


function reajuste_salário(salário){
    let porcentagem = 0

     if(salário <= 2999.99){
        porcentagem = 0.25
    }else if(salário <= 5999.99){
        porcentagem = 0.2
    }else if(salário <= 9999.99){
        porcentagem = 0.15
    }else{(salário >= 10000)
        porcentagem = 0.1
    }

    return salário * porcentagem
}

function mensagem_reajuste(salário,salário_novo){
    let porcentagem = " "

    if(salário <= 2999.99){
        porcentagem = "25%"
    }else if(salário <= 5999.99){
        porcentagem = "20%"
    }else if(salário <= 9999.99){
        porcentagem = "15%"
    }else{(salário >= 10000)
        porcentagem = "10%"
    }

    const mensagem = `
    Salário Antigo: R$ ${salário}
    Salário Reajustado(+ ${porcentagem}): R$ ${Number(salário_novo).toFixed(2)}`
    return mensagem

}

main()