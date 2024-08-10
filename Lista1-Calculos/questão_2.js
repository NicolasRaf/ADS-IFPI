//**2. Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos. */
import { question } from "readline-sync";
console.log("[----Total de minutos---}")

//Entrada
var horas = Number(question("Qual o tempo em horas: "))
var minutos = Number(question("Qual o tempo em minutos: "))

//Processamento
var somatorio = horas*60 + minutos

//Saída
console.log(`O total de minutos equivale a: ${somatorio} minuto/s`)