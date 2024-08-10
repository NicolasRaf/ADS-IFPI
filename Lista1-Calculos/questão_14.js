//**14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada */
import { question } from "readline-sync"
console.log(`[----Media Pondereada----]
`)

//Entrada
var nota1 = Number(question("Qual a primeira nota: "))
var nota2 = Number(question("Qual a segunda nota: "))
var nota3 = Number(question("Qual a terceira nota: "))
var peso1 = Number(question("Qual o peso da primeira nota: "))
var peso2 = Number(question("Qual o peso da segunda nota: "))
var peso3 = Number(question("Qual o peso da terceira nota: "))

//Processamento
var media = (nota1*peso1 + nota2*peso2 + nota3*peso3)/(peso1+peso2+peso3)

//Saída
console.log(`
--------------------------------------------------
    A media ponderada das notas é ${media.toFixed(2)}
--------------------------------------------------
    `)