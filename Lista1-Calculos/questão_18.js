//**18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r) */
import { question } from "readline-sync"
console.log(`[----Comprimento da Circuferência----]
`)

//Entrada
var raio = Number(question(`Qual a medida do raio: `))
var pi = 3.14

//Processamento
var comp = 2*pi*raio

//Saída
console.log(`
------------------------------------------------------------
 A circuferência de raio ${raio} possui comprimento de ${comp.toFixed(2)}
------------------------------------------------------------`)