//**22. Leia um valor em km, calcule e escreva o equivalente em m. */
import { question } from "readline-sync"
console.log(`[-------Conversor de quilometros para metros-------]
`)

//Entrada
var km = Number(question("Qual a quantidade de quilometros a ser convertida: "))

//Processamento
var metros = km*1000

//Saída
console.log(`
-------------------------------------------
  ${km} km é equivalente a ${metros} m
-------------------------------------------
`)