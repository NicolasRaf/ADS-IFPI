/**3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos. */
import { question } from "readline-sync"
console.log("[---Minutos para horas----]")

//Entrada
var temp = Number(question("Qual o tempo em minutos: "))

//Processamento
var hr = Math.floor(temp/60)
var min = temp%60

//Saída
console.log(`${temp} min é igual a ${hr} hora/s e ${min} minutos/s `)
