//**15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2) */
import { question } from "readline-sync"
console.log(`[----Área do triângulo----]
`)

//Entrada
var base = Number(question("Qual o tamanho da base do triangulo: "))
var altura = Number(question("Qual a altura do triangulo: "))

//Processamento
var area = base*altura/2

//Saída
console.log(`
------------------------------------------
A área do trianglo é ${area.toFixed(2)}
------------------------------------------
`)