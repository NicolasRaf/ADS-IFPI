/*33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso. 
(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767) */
import { question } from "readline-sync"
console.log(`[------Soma com o Inverso--------]
`)

//Entrada
const num = Number(question("Digite um numero de 3 digitos: "))

//Processamento
const c = Math.floor(num/100)
const d = Math.trunc(num%100/10)
const u = (num%100)%10
const inverso = (u*100) + (d*10) + c
const soma = num + inverso


//Saída
console.log(`
--------------------------------------------------------
 A soma entre ${num} e ${inverso} é igual a ${soma}
--------------------------------------------------------
`)