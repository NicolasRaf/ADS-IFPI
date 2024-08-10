/*38. Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o 
resultado em forma de fração */
import { question } from "readline-sync"
console.log(`[-------Soma de frações-------]
`)

//Entrada
const fração_1n = Number(question("Qual o numerador da primeira fracao: "))
const fração_1d = Number(question("Qual o denominador da primeira fracao: "))
const fração_2n = Number(question("Qual o numerador da segunda fracao: "))
const fração_2d = Number(question("Qual o denomindor da segunda fracao: "))

//Processamento
const soma = (fração_1n/fração_1d) + (fração_2n/fração_2d)
const numerador = (fração_1n*fração_2d + fração_2n*fração_1d)
const denominador = fração_1d*fração_2d

//Saída
console.log(`
---------------------------------------------------------------
A soma(não simplificada) de ${fração_1n}/${fração_1d} e ${fração_2n}/${fração_2d} é igual a ${numerador}/${denominador}
---------------------------------------------------------------
`)