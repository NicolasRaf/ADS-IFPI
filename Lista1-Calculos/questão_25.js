//**25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde */
import { question } from "readline-sync"
console.log(`[-------Conversor de metros para quilometro/metro-------]
`)

//Entrada
var metros = Number(question("Digite a quantidade de metros: "))

//Processamento
var km = Math.floor(metros/1000)
var m = metros%1000

//Saída
console.log(`
-------------------------------------------------
  ${metros} metros é equivalente a ${km} km e ${m} m
-------------------------------------------------
`)