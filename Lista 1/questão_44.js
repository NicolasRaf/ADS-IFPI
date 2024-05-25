/*44. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a 
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada 
pelo usuário.*/
import { question } from "readline-sync"
console.log(`[----------Porcentagem de zinco e cobre no latão----------]
`)

//Entrada
const latao = Number(question("Qual a quantidade (em kg) de latao desejada: "))

//Processamento
const cobre = 0.70*latao
const zinco = 0.30*latao

//Saída
console.log(`
-------------------------------------------------
 Para obter ${latao} kg de latão será nescessario:
            ${cobre.toFixed(2)} kg de cobre 
            ${zinco.toFixed(2)} kg de zinco  
-------------------------------------------------
`)