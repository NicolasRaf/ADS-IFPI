/*29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde*/
import { question } from "readline-sync"
console.log(`[-------Total de meses em anos/meses-------]
`)

//Entrada
var months = Number(question("Digite a quantidade de meses: "))

//Processamento
var anos = Math.floor(months/12)
var meses = Math.floor(months%12)

//Saída
console.log(`
-----------------------------------------------------
 ${months} meses são equivalentes a ${anos} ano/s e ${meses} mês/s
-----------------------------------------------------
`)