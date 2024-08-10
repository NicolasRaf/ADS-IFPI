/*42. Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e 
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo. d = √(x'- x")^2 + (y'- y")^2 */ 
import { question } from "readline-sync"
console.log(`[---------Distancia entre Pontos---------]
`)

//Entrada
const x1 = Number(question("Qual o valor de x do primeiro ponto: "))
const y1 = Number(question("Qual o valor de y do primeiro ponto: "))
const x2 = Number(question("Qual o valor de x do segundo ponto: "))
const y2 = Number(question("Qual o valor de y do segundo ponto: "))

//Processamento
const distância = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2)

//Saída
console.log(`
-------------------------------------------------
 A distancia entre os pontos é de ${distância.toFixed(2)}
-------------------------------------------------
`)