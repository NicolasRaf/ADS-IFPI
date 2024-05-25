//**23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama). */
import { question } from "readline-sync"
console.log(`[-------Conversor de Quilograma para Grama-------]
`)

//Entrada
var kg = Number(question("Qual o peso em quilogramas: "))

//Processamento
var gramas = kg*1000

//Saída
console.log(`
----------------------------------------
  ${kg} kg é equivalente a ${gramas} g!
----------------------------------------
`)