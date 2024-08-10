//**7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos. */
import { question } from "readline-sync"
console.log("[----Soma e Diferença dos primeiros----]")

//Entrada
var num1 = Number(question("Qual o primeiro numero: "))
var num2 = Number(question("Qual o segundo numero: "))
var num3 = Number(question("Qual o terceiro numero: "))

//Processamento
var soma = num1 + num2
var diferença = Math.abs(num2 - num3)

//Saída
console.log(`
-------------------------------------------------------------------------
A soma dos dois primeiros é ${soma} e diferença dos ultimos dois é ${diferença}
-------------------------------------------------------------------------
`)
