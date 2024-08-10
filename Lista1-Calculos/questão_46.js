/*46. Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a 
cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o 
valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da 
mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00. 
Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas 
prestações, de acordo com as regras acima. */
import { question } from "readline-sync"
console.log(`[--------Entrada e Prestações--------]
`)

//Entrada
const valor = Number(question("Qual o valor da mercadoria: "))

//Processamento
const entrada = Math.ceil(valor/3)
const prestações = Math.floor((valor - entrada)/2)
const resto_prestações = ((valor - entrada)/2) - prestações 
const entrada_real = (2*resto_prestações) + entrada

//Saída
console.log(`
-------------------------------------------------
 A entrada sera equivalente a ${entrada_real} R$
 As duas pretações terão um valor de ${prestações} R$
-------------------------------------------------
`)