//*27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde. */ 
import { question } from "readline-sync"
console.log(`[-------Total de segundos em horas/minutos/seg-------]
`)

//Entrada
var seg = Number(question("Digite o total de segundos: "))

//Processamento
var horas = Math.floor(seg/3600)
var minutos = Math.floor((seg%3600)/60)
var segundos = Math.abs(seg - (minutos*60) - (horas*3600))

//Saída
console.log(`
-----------------------------------------------------------------
 ${seg} segundos são equivalentes a ${horas} hora/s ${minutos} minuto/s e ${segundos} segundo/s
-----------------------------------------------------------------
`)