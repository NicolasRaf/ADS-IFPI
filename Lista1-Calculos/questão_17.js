//**17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura) */
import { question } from "readline-sync"
console.log(`[----Área do Retângulo----]
`)

//Entrada
var base = Number(question("Qual o tamanho da base do retangulo: "))
var altura = Number(question("Qual a altura do retangulo: "))

//Processamento
var area = base*altura

//Saída
console.log(`-------------------------------------------
    A área do retangulo é igual a ${area}
-------------------------------------------`)