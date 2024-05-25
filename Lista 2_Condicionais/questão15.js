/*15.Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
Escreva na tela qual dos professores tem salário total maior*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Salario Professores--------]"
    prompt(mensagem)


//Entrada
    const horas1 = numerozin("Qual o total de horas de aulas lecionadas pelo primeiro professor: ")
    const valor1 = numerozin("Qual o valor recebido por hora pelo primeiro professor: ")
    const horas2 = numerozin("Qual o total de horas de aulas lecionadas pelo segundo professor: ")
    const valor2 = numerozin("Qual o valor recebido por hora pelo segundo professor: ")

//Saída
     mensagem = (`
  ----------------------------------------------------
    ${calcular_salario(horas1,valor1,horas2,valor2)}
  ----------------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function calcular_salario(h1,v1,h2,v2){
    const salario_prof1 = h1 * v1
    const salario_prof2 = h2 * v2

if(salario_prof1 > salario_prof2)
    return `O Primeiro professor um possui o salario maior.
    Professor 1: ${salario_prof1} R$
    Professor 2: ${salario_prof2} R$`  
                           
else    
    return `O Segundo professor um possui o salario maior.
    Professor 1: ${salario_prof1} R$
    Professor 2: ${salario_prof2} R$`
                                       

}


main()