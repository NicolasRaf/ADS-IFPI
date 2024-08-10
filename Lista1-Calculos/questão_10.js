//**10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º */
import { question } from "readline-sync"
console.log("[----Elementos da divisão----}")

//Entrada
var num1 = Number(question("Digite o dividendo: "))
var num2 = Number(question("Digite o divisor: "))

//Processamento
var quociente = Math.floor(num1/num2)
var resto = num1%num2

//Saída
console.log(`
---------------------------------------------
O quociente da divisão é ${quociente} e o resto é ${resto}
---------------------------------------------
`)