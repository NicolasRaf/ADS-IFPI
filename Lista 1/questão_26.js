//**26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde. */
import { question } from "readline-sync"
console.log(`[-------Quantidade de dias em semanas-------]
`)

//Entrada
var day = Number(question("Qual a quantidade de dias: "))

//Processamento
var semanas = Math.floor(day/7)
var dias = day%7

//Saída
console.log(`
------------------------------------------------------
 ${day} dias são equivalentes a ${semanas} semana/s e ${dias} dia/s
------------------------------------------------------
`)