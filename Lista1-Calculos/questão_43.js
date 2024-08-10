/* 43. Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo*/
import { question } from "readline-sync"
console.log(`[------Equação linear--------]
`)

//Entrada
const coef_a = Number(question("Qual o valor do coeficiente a :"))
const coef_b = Number(question("Qual o valor do coeficiente b :"))
const coef_c = Number(question("Qual o valor do coeficiente c :"))
const coef_d = Number(question("Qual o valor do coeficiente d :"))
const coef_e = Number(question("Qual o valor do coeficiente e :"))
const coef_f = Number(question("Qual o valor do coeficiente f :"))

//Processamento
const valor_x = ((coef_c*coef_e) - (coef_b*coef_f))/((coef_a*coef_e) - (coef_b* coef_d))
const valor_y = ((coef_a*coef_f) - (coef_c*coef_d))/((coef_a*coef_e) - (coef_b* coef_d))

//Saída
console.log(`
---------------------------------------------------------------
 O valor de x é equivalente a ${valor_x.toFixed(2)} e o de y é igual a ${valor_y.toFixed(2)}
---------------------------------------------------------------
`)