//**6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6) */
import { question } from "readline-sync"
console.log("[-----Converso km/h para m/s-----]")

//Entrada
var vel = Number(question("Qual a velocidade em km/h: "))

//Processamento
var res = vel/3.6

//Saída
console.log(`
----------------------------------------
${vel} km/h equivale a ${res.toFixed(2)} m/s
----------------------------------------
`)
