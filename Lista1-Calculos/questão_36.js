/*36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias */
import { question } from "readline-sync"
console.log(`[-------Idade total em dias-------]
`)

//Entrada
const anos = Number(question("Qual o numero de anos: ")) 
const meses = Number(question("Qual o numero de meses: ")) 
const dias = Number(question("Qual o numero de dias: ")) 

//Processamento
const dias_anos = (anos*365)
const dias_meses = (meses*30)
const dias_totais = dias_anos + dias_meses + dias

//Saída
console.log(`
-----------------------------------------------------------------------------------
 ${anos}(${dias_anos} dias) ano/s, ${meses}(${dias_meses} dias) mês/s e ${dias} dia/s é equivalente a ${dias_totais} dias
-----------------------------------------------------------------------------------
`)