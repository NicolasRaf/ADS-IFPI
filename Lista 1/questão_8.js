//**8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos
import { question } from "readline-sync"
console.log("[----Soma pela diferença----]")

//Entrada
var num1 = Number(question('Qual o primeiro numero: '))
var num2 = Number(question('Qual o segundo numero: '))

//Processamento
var div = (num1 + num2)/(Math.abs(num1 - num2))


//Saída
console.log(`
------------------------------------
O resultado davisão é ${div.toFixed(2)}
------------------------------------
`)
    
