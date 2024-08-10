//**24. Leia um valor em m, calcule e escreva o equivalente em cm. */
import { question } from "readline-sync"
console.log("[-------Conversor de metros para centimetros-------]")

//Entrada
var metros = Number(question("Qual o tamanho em metros: "))

//Processamento
var cent = metros*100

//Saída
console.log(`
---------------------------------
${metros} m é equivalente a ${cent} cm
---------------------------------
`)
