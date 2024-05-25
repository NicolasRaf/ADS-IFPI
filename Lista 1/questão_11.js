//**11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235) */
import { question } from "readline-sync"
console.log("[----Inverso numero de 3 dígitos----] ")

//Entrada
var num = Number(question("Digite seu numero: "))

//Processamento
var c = Math.floor(num/100)
var d = Math.trunc(num%100/10)
var u = (num%100)%10

//Saída
console.log(`
---------------------------------
Ordem inversa de ${num}: >> ${u}${d}${c} <<
---------------------------------
`)