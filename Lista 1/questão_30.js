/*30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele 
corresponde. */
import { question } from "readline-sync"
console.log(`[-------Total de minutos em dias/horas/minutos-------]
`)

//Entrada
var min = Number(question("Digite quantos minutos a serem convertidos: "))

//Processamento
var dias = Math.floor(min/1440)
var min_dias = Math.floor(Math.abs((dias*1440) - min))
var horas = Math.floor(min_dias/60)
var minutos = Math.floor(Math.abs(min - (dias*1440) - (horas*60)))

//Saída
console.log(`
-------------------------------------------------------------
 ${min} minutos equivalem a ${dias} dia/s ${horas} hora/s e ${minutos} minuto/s
-------------------------------------------------------------
`)