//**9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A). */
import { question } from "readline-sync"
console.log("[----Ordem Inversa----]")

//Entrada
var num1 = question("Digite o primeiro numero: ")
var num2 = question("Digite o segundo numero: ")

//Saída
console.log(`
---------------------------------------------
(${num1}, ${num2}) em ordem inversa é (${num2}, ${num1})
---------------------------------------------
`)