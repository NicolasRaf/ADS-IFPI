/*23. Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de horas trabalhadas e o seu nº de dependentes.  Considerando que a empresa paga R$ 12,00 por hora e R$ 
40,00  por  dependentes  e  que  sobre  o  salário  são  feitos  descontos  de  8,5%  para  o  INSS  e  5%  para  IR. 
Escreva  um  algoritmo  que  leia  o  código,  número  de  horas  trabalhadas  e  número  de  dependentes  de  N 
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário líquido do funcionário.*/  
import {escreva,get_number_in_range,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[------------Salário de Funcionários------------]`
        escreva(mensagem)
        escreva("  *******Digite \"Codigo = 0\" para encerar******")


    //Entrada
        const dados = calcular_Salario()

    //Saída
        mensagem = (`
    ======================================================
     · Número de Funcionários: ${dados[0]}
     · Total de salários pagos: R$ ${dados[1].toFixed(2)}
     · Total de descontos: R$ ${dados[2].toFixed(2)}
    ======================================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function calcular_Salario(){
    let codigo = 1
    let horas_trabalhadas = 0
    let num_dependentes = 0
    let salario_bruto = 0
    let salario_liquido = 0
    let INSS = 0
    let IR = 0
    let salarios_totais = 0
    let descontos_totais = 0

    escreva("\n>>>>>>>>>Primeiro Funcionário<<<<<<<<<\n")

    for (let funcionários = 0;codigo !== 0;funcionários++){

     codigo = get_number_in_range("Insira o codigo da ficha: ",0,Infinity)

          if (codigo === 0) {
            return [funcionários,salarios_totais,descontos_totais]
        } else {
            horas_trabalhadas = get_number_positive("Qual o total de horas trabalhadas: ")
            num_dependentes = get_number_positive("Qual o numero de dependentes: ")

            salario_bruto = calcular_salario(horas_trabalhadas,num_dependentes) 
            INSS = (salario_bruto * 0.085) 
            IR = (salario_bruto * 0.05)
            salario_liquido = salario_bruto - INSS - IR
            salarios_totais += salario_liquido
            descontos_totais += (INSS + IR)

            escreva(`\n>Salário Bruto: R$ ${salario_bruto.toFixed(2)}`)
            escreva(`>Salário Líquido: R$ ${salario_liquido.toFixed(2)}\n--> INSS: R$ ${INSS.toFixed(2)}\n--> Imposto de Renda: R$ ${IR.toFixed(2)}\n`)
        }
        
     escreva(">>>>>>>>>Proximo Funcionário<<<<<<<<<\n")
    }

    return [funcionários,salarios_totais,descontos_totais]
}

function calcular_salario(hr_trab, num_dep){
    return (12 * hr_trab) + (num_dep * 40)
}


main()