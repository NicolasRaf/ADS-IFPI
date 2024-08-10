/*15. Uma fruteira está vendendo frutas com a seguinte tabela de preços:
 
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.*/ 
import { numerozin,escreva,pergunta } from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `[--------Descontos da Fruteira--------]
Selecione uma opção:
Morangos: 1
Maçãs: 2
Morangos e Maçãs: 3
    `
    escreva(mensagem)


//Entrada
   const opção = numerozin("Digite sua escolha: ")
    if(eh_valido(opção) === false)
        return escreva(`
    Por favor selecione uma opção valída!!!`)//Verificação da opção 

    let kg_maça = 0
    let kg_morango = 0
    
    //Perguntando a pesagem conforme a opção de maças, morangos ou os dois
    if(opção === 1){
        kg_morango = numerozin("\nQuantos kg de morango: ")
    }
    if(opção === 2){
        kg_maça = numerozin("\nQuantos kg de maca: ")
    }
    if(opção === 3){
        kg_morango = numerozin("\nQuantos kg de morango: ")
        kg_maça = numerozin("Quantos kg de maca: ")
    }

//Saída
     mensagem = (`
   ------------------------------------------------
    ${valor_pago(kg_morango,kg_maça)}
   ------------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function eh_valido(opção){
    return opção === 1 || opção === 2 || opção === 3
}

function valor_pago(kg_morango,kg_maça){
    let preço_kg_morango = 0
    let preço_kg_maça = 0
    let peso_total = kg_morango + kg_maça

    //Definindo o preço do morango com base nos kg
    if(kg_morango > 5)
        preço_kg_morango = 2.20
    if(kg_morango <= 5)
        preço_kg_morango = 2.50

    //Definindo o preço da maça com base nos kg
    if(kg_maça > 5)
        preço_kg_maça = 1.50
    if(kg_maça <= 5)
        preço_kg_maça = 1.80
    
    //Calculando o custo a ser pago
    let custo_morango = kg_morango * preço_kg_morango
    let custo_maça = kg_maça * preço_kg_maça
    let custo_total = custo_morango + custo_maça
    const desconto = custo_total * 0.1

    //Aplicando desconto caso o peso total ultrapasse 8Kg ou o preço ultrapasse R$ 25
    if(peso_total > 8 || custo_total > 25)
        custo_total = custo_total - desconto
    
    return ` O preço a ser pago no total é de R$ ${custo_total.toFixed(2)}`
}


main()