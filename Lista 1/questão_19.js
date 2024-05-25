//** 19. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14) */
import { question } from "readline-sync"
console.log(`[----Volume da Esfera----]
`)

//Entrada
var raio = Number(question("Qual o raio da esfera: "))
const pi = 3.14
//Processamento
var volume = (4*pi*raio**3)/3

//Saída
console.log(`
-----------------------------------------------------
  O volume da esfera de raio ${raio} é igual a ${volume.toFixed(2)}
-----------------------------------------------------
`)