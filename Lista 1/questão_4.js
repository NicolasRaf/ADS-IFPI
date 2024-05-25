//**4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$). */
import { question } from "readline-sync"
console.log("[----Conversor de Dolar para Real----]")

//Entrada
var cotação = Number(question("Quanto esta valendo o Dolar: "))
var dolar = Number(question("Qual o valor em dolares: "))

//Processamento
var real = dolar * cotação

//Saída 
console.log(`${dolar} dolares equivale a ${real.toFixed(2)} reais`)