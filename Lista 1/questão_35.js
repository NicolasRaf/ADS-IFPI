/*35. Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.: 
número = 9534 ; soma = 9+5+3+4 = 21 */
import { question } from "readline-sync"
console.log(`[---------Soma dos elementos de um numero-----------]
`)

//Entrada
const num = Number(question("Digite um numero de ate 4 digitos: "))

//Processamento
const m = Math.floor(num/1000)
const c = Math.floor(num/100)
const d = Math.trunc(num%100/10)
const u = (num%100)%10
const soma = m + c + d + u

//Saída
console.log(`
---------------------------------------------------
 A soma dos elemetos de ${num} é equivalente a ${soma}
---------------------------------------------------
`)