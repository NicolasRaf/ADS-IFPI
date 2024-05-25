/*41. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor 
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e 
escreva o custo ao consumidor.*/
import { question } from "readline-sync"
console.log(`[-------Precificação do Carro-------]
`)

//Entrada
const preço_fabrica = Number(question("Digite o valor de fabrica do carro: "))

//Processamento
const distribuidor = 0.28*preço_fabrica
const impostos = 0.45*preço_fabrica
const custo = preço_fabrica + distribuidor + impostos

//Saída
console.log(`
-------------------------------------------------
_______________________________________
Preço de fábricação: ${preço_fabrica} R$
    +
impostos: ${impostos.toFixed(1)} R$
    +
Porc.Distribuidora: ${distribuidor.toFixed(1)} R$  
_______________________________________
Custo total: ${custo.toFixed(1)} R$  
-------------------------------------------------
`)