/*40. Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele 
fuma, o nº de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros). */
import { question } from "readline-sync"
console.log(`[---------Gasto de cigarros---------]
`)

//Entrada
const anos = Number(question("A quantos anos ele fuma: "))
const cigarros_dia = Number(question("Quantos cigarros fumados por dia: "))
const preço_carteira = Number(question("Qual o valor da carteira de cigarros: "))

//Processamento
const preço_cigarro = preço_carteira/20
const cigarros_totais = (anos*365)*cigarros_dia
const gasto = preço_cigarro*cigarros_totais


//Saída
console.log(`
------------------------------------------------------------------
 O total gasto foi de ${gasto.toFixed(2)} R$(Cerca de ${cigarros_totais.toFixed(0)} cigarros no total)
------------------------------------------------------------------
`)