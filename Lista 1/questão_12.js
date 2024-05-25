//**12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%. */
import { question } from "readline-sync"
console.log("[----Aumento de 25%----]")

//Entrada
var salario_inicial = Number(question("Qual seu salario: "))

//Processamento
var aumento = salario_inicial/4
var salario_novo = salario_inicial + aumento

//Saída
console.log(`
------------------------------------------------
O salario após o aumento sera de ${salario_novo.toFixed(2)} reais
------------------------------------------------
`)