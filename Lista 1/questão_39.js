/*39. Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
D = R+S/2 onde R = (A+B)^2 e S= (B+C)^2*/
import { question } from "readline-sync"
console.log(`[-------Resolção de expressão-------]
`)

//Entrada
const A = Number(question("Qual o valor de A: "))
const B = Number(question("Qual o valor de B: "))
const C = Number(question("Qual o valor de C: "))


//Processamento
const R = (A + B)**2
const S = (B + C)**2
const D = Math.floor((R + S)/2)
//Saída
console.log(`
---------------------------------
RESULTADO
 R(A+B)^2 = ${R} 
 S(B+C)^2 = ${S}
logo
 D(R+S/2) = ${D.toFixed(1)}
---------------------------------

`)