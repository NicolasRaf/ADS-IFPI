//**21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9). */
import { question } from "readline-sync"
console.log(`[-------Converso de Fahrenheit para Celsius-------]
`)

//Entrada
var fahrenheit = Number(question("Qual a temperatura em Fahrenheit: "))

//Processamento
var graus = (5*fahrenheit-160)/9

//Saída
console.log(`
---------------------------------------------------------------
  ${fahrenheit} graus Fahrenheit é equivalente a ${graus.toFixed(1)} graus Celsius
---------------------------------------------------------------
`)