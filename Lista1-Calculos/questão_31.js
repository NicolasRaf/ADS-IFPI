/*31. Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal. */
import { question } from "readline-sync"
console.log(`[----------Converso de numeros binarios(4 digitos) para decimal-----------]
`)

//Entrada
const bin = Number(question("Digite um numero binario de 4 digitos: "))

//Processamento
const m = Math.floor(bin/1000)
const c = Math.floor((bin%1000)/100)
const d = Math.floor(bin%100/10)
const u = Math.floor(bin%10) 
const m_binario = (m*2**3)
const c_binario = (c*2**2)
const d_binario = (d*2**1)
const u_binario = (u*2**0)
const decimal = m_binario + c_binario + d_binario + u_binario

//Saída
console.log(`
-------------------------------------------------
_______________________
 ${m}--> ${m_binario}
      +
 ${c}--> ${c_binario}
      +  
 ${d}--> ${d_binario}
      +
 ${u}--> ${u_binario}
_______________________
Base decimal: ${decimal}

-------------------------------------------------
`)