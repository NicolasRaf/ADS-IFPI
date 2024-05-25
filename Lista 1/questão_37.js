/*37. Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.*/
import { question } from "readline-sync"
console.log(`[-------Idade em dias para anos/meses/dias-------]
`)

//Entrada
const dias_totais = Number(question("Qual sua idade total em dias: "))

//Processamento
const anos = Math.floor(dias_totais/365)
const meses = Math.floor((dias_totais%365)/30)
const dias = Math.abs(dias_totais - (anos*365) - (meses*30))


//Saída
console.log(`
----------------------------------------------------------------
Você possui ${anos} ano/s, ${meses} mês/s e ${dias} dia/s
----------------------------------------------------------------
`)