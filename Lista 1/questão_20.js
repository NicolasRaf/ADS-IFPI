//**20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5) */
import { question } from "readline-sync"
console.log(`[-------Converso de Celsius para Fahrenheit-------]
`)

//Entrada
var graus = Number(question("Qual a temperatura em Celsius: "))

//Processamento
var fahrenheit = ((9 * graus)+160)/5 

//Saída
console.log(`
---------------------------------------------------------------
  ${graus} graus Celsius é equivalente a ${fahrenheit} graus Fahrenheit
---------------------------------------------------------------
`)