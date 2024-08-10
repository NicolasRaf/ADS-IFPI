/*28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele 
corresponde*/
import { question } from "readline-sync"
console.log(`[---------Total de horas em semanas/dias/horas---------]
`)

//Entrada
var hr = Number(question("Qual o total de horas: "))

//Processamento
var semanas = Math.floor(hr/168)
var hrs_semanas = Math.abs((semanas*168) - hr)
var dias = Math.floor(hrs_semanas/24)
var horas_restantes = Math.abs(hr - (dias*24) - (semanas*168))

//Saída
console.log(`
---------------------------------------------------------------------
 ${hr} horas são equivalentes a ${semanas} semana/s ${dias} dia/s e ${horas_restantes} hora/s
---------------------------------------------------------------------
`)