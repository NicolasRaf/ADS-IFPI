//**13. Leia um valor em real (R$), calcule e escreva 70% deste valor */
import { question } from "readline-sync"
console.log("[-------Redução percentual de 30%-------]")

//Entrada
var valor = Number(question("Qual o valor em real: "))

//Processamento
var valor_final = valor*0.7

//Saída
console.log(`
---------------------------------------------
70% de ${valor}R$ equivale a ${valor_final.toFixed(2)} R$
---------------------------------------------
`)