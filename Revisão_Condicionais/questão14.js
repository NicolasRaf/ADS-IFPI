/*14. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
1. Álcool:
· até 20 litros, desconto de 3% por litro
· acima de 20 litros, desconto de 5% por litro
2. Gasolina:
· até 20 litros, desconto de 4% por litro
· acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.*/ 
import { numerozin,escreva,pergunta } from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `[--------Desconto no Combustivel--------]
Digite 1 para Álcool(R$ 1,90)
Digite 2 para Gasolina(R$ 2,50)
    
    `
    escreva(mensagem)


//Entrada
    const tipo = numerozin("Qual sera o tipo de combustivel: ")
    if(eh_valido(tipo) === false)
        return escreva(`
    Por favor selecione uma opção valída!!!`)//Verificação 
    
    let combustivel = ``
    //Codificando o combustivel com base no selecionado
    if(tipo === 1)
        combustivel = "A-álcool"
    if(tipo === 2)    
        combustivel = "G-gasolina"
    

    const litros = numerozin("Quantos litros: ") 


//Saída
     mensagem = (`
   ---------------------------------------------
    ${preço_pago(combustivel,litros)}
   ---------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function eh_valido(tipo){
    return tipo === 1 || tipo === 2

}

function preço_pago(combustivel,litros){
    let valor_absoluto = 0
    let valor_desconto = 0

    //Preço sem desconto com base no combustivel selecionado
    if(combustivel === "A-álcool")
        valor_absoluto = litros * 1.90//preço do alcool
    if(combustivel === "G-gasolina")
        valor_absoluto = litros * 2.50//preço da gasolina

    //Aplicando o desconto caso for Alcool com base nos litros
    if(combustivel === "A-álcool" && litros < 20)
        valor_desconto = valor_absoluto - (litros * 0.03)//Abaixo de 20 litros
    if(combustivel === "A-álcool" && litros > 20 )
        valor_desconto = valor_absoluto - (litros * 0.05)//Acima de 20 litros

    //Aplicando o desconto caso for Gasolina com base nos litros
    if(combustivel === "G-gasolina" && litros < 20)   
        valor_desconto = valor_absoluto - (litros * 0.04)//Abaixo de 20 litros
    if(combustivel === "G-gasolina" && litros > 20 )
        valor_desconto = valor_absoluto - (litros * 0.06)//Acima de 20 litros

    return `     O valor a ser pago é R$ ${valor_desconto.toFixed(2)}`

}


main()
//Fiquei feliz que essa deu certo (: