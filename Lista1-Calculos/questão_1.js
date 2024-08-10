/*1. Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. */
import { question } from "readline-sync";
 console.log("[-----Converso m/s para km/h-----]")

//Entrada
var vel = Number(question("Qual a velocidade em m/s: "))

//Processamento
var res = vel*3.6

//Saída
console.log(`${vel} m/s equivale a ${res.toFixed(2)} km/h`)