//**16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2) */
import { question } from "readline-sync"
console.log(`[----Área do Quadrado----]
`)

//Entrada
var lado = Number(question("Qual a medida do lado do quadrado: "))

//Processamento
var area = lado**2

//Saída
console.log(`
-------------------------------
A área do quadrado é ${area}
-------------------------------
`)