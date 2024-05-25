//**5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U). */
import { question } from "readline-sync"
console.log("[-------Soma dos elementos de um numero-------]")

//Entrada
var num = Number(question("Digite seu numero: "))

//Processamento
var centena = Math.floor(num/100)
var dezena = Math.floor(num%100/10)
var unidade = (num%100)%10
var soma = centena + dezena + unidade 

//Saída
const mensagem = ` 
------------------------
Unidade: ${unidade}
   + 
Dezena: ${dezena}
   +     
Centena: ${centena}
___________________
Soma: ${soma}
------------------------
`
console.log(mensagem)