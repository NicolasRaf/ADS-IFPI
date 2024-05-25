/* 45. Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para 
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o 
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor 
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de 
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria 
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um 
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o 
critério da distribuição ótima.*/
import { question } from "readline-sync"
console.log(`[---------Saque em distribuição ótima---------]
`)

//Entrada
var quantia = Number(question("Qual a quantia a ser sacada: "))

//Processamento
var cinquenta = Math.floor(quantia/50)
var dez = Math.floor((quantia%50)/10)
var cinco = Math.floor(((quantia%50)%10)/5)
var um = Math.floor(((quantia%50)%10)%5)

//Saída
console.log(`
----------------------------------------------------------------------
 A Quantia de ${quantia} R$ será distribuida da seguinte maneira:
 ///////////////////////////////
 Notas de 50 R$ = ${cinquenta}
 Notas de 10 R$ = ${dez}
 Notas de 5 R$ = ${cinco}
 Notas de 1 R$ = ${um}
 ///////////////////////////////
----------------------------------------------------------------------
`)