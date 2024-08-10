/*8. Para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que
depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a
11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde
ao salário bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a
quantidade de horas trabalhadas no mês.
Desconto do IR:
o Salário Bruto até R$ 900,00 (inclusive) - isento
o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5%
o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10%
o Salário Bruto acima de R$ 2.500,00 - desconto de 20%*/ 
import { numerozin,escreva,pergunta } from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = "[----------Folha de pagamento----------]"
    escreva(mensagem)

//Entrada
   const valor_hora = numerozin("Qual o valor da hora de trabalho: ")
   const horas_trab = numerozin("Quantidade de horas trabalhadas no mes: ")

//Processamento Main
    const salario_bruto = valor_hora * horas_trab
    const FGTS = salario_bruto * 0.11
    const INSS = salario_bruto * 0.1
    const IR = calcular_ir(salario_bruto)
    const soma_descontos = descontos(INSS, IR)
    const salario_liquido = salario_bruto - soma_descontos

//Saída
     

     mensagem = (`
   ---------------------------------------------
    · Salário Bruto(${valor_hora}×${horas_trab}): R$ ${salario_bruto.toFixed(2)}  
    · FGTS(11%): R$ ${FGTS.toFixed(2)}  
    · (-)INSS(10%): R$ ${INSS.toFixed(2)} 
    · (-)IR(${porcentagem_IR(salario_bruto)}): R$ ${IR.toFixed(2)} 
    · Total de descontos: R$ ${soma_descontos.toFixed(2)}
    · Salário Liquido: R$ ${salario_liquido.toFixed(2)}
   ---------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento externo
function porcentagem_IR(salario_bruto){
    //Seleciona o desconto do imposto de renda e volta a pocentagem na saída
    if(salario_bruto > 0 && salario_bruto <= 900)
        return "0%"
    else if(salario_bruto > 900 && salario_bruto <= 1500)
        return "5%"
    else if(salario_bruto > 1500 && salario_bruto <= 2500)
        return "10%"
    else (salario_bruto > 2500 )
        return "20%"
        
}

function calcular_ir(salario_bruto){
    //Aplica a porcentagem de desconto com base nos intervalos do imposto de renda e volta o valor dele.
    if(salario_bruto > 0 && salario_bruto <= 900)
        return 0
    else if(salario_bruto > 900 && salario_bruto <= 1500)
        return salario_bruto * 0.05 
    else if(salario_bruto > 1500 && salario_bruto <= 2500)
        return salario_bruto * 0.1
    else (salario_bruto > 2500 )
        return salario_bruto * 0.2
    
}

function descontos(INSS,IR){
    if(IR === "Isento de descontos!")
        return INSS //Caso o imposto de renda seja 0(ate 900 reais)
    else
        return INSS + IR

}

main()