/*7. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe
contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o
salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
o salários até R$ 280,00 (incluindo) : aumento de 20%
o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
o salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
· o salário antes do reajuste;
· o percentual de aumento aplicado;
· o valor do aumento;
· o novo salário, após o aumento.*/
import { numerozin, escreva, pergunta } from "./Funções/io.js"

function main() {
//Apresentação
    let mensagem = "[--------Reajsute Salárial--------]"
    escreva(mensagem)

//Entrada
    const salário = numerozin(`Qual seu salario atual: `)

//Saída
    const porcentagem_aumento = percentual_aumento(salário) * 100 //Transforma a saida decimal em porcentagem

    mensagem = (`
   ---------------------------------------------
   · Salário antes do reajuste: R$ ${salário}
   · Percentual de aumento: ${porcentagem_aumento} %
   · Valor do aumento: R$ ${aumento(salário).toFixed(2)}
   · Novo salário: R$ ${novo_salario(salário).toFixed(2)}
   ----------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function percentual_aumento(salario) {
    //Compara o salario com base dos intervalos da questão e volta as porcentagens
    if (salario >= 0 && salario <= 280)
        return 0.2
    else if (salario > 280 && salario <= 700)
        return 0.15
    else if (salario > 700 && salario < 1500)
        return 0.1
    else (salario > 1500)
        return 0.05

}

function aumento(salario) {
    return salario * percentual_aumento(salario)

}

function novo_salario(salario) {
    return salario + aumento(salario)

}

main()