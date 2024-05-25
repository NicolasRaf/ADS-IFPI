/*32. Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso. */
import { question } from "readline-sync"
console.log(`[------Diferença entre o Inverso--------]
`)

//Entrada
const num = Number(question("Digite um numero de 3 digitos: "))

//Processamento
const c = Math.floor(num/100)
const d = Math.trunc(num%100/10)
const u = (num%100)%10
const inverso = (u*100) + (d*10) + c
const diferença = Math.abs(num - inverso)


//Saída
console.log(`
--------------------------------------------------------
 A diferença(em modulo) entre ${num} e ${inverso} é igual a ${diferença}
--------------------------------------------------------
`)