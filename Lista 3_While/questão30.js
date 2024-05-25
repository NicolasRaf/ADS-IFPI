/*Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o
nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo
número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”).*/ 
import { get_number,escreva, pergunta, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[--------Compra De Mercado--------]
  ***Digite "FIM" para encerar***\n`
    escreva(mensagem)


//Entrada
   const dados_compra = calcular_promoção()
   const nota_fiscal = dados_compra[0]
   const valor_compra = dados_compra[1]

//Saída
     mensagem = (`
 ==================NOTA FISCAL====================
    ${nota_fiscal}
 ------------------------------------------------
 Valor Total da Compra: ${valor_compra.toFixed(2)}
 =================================================
    `)

    escreva(mensagem)

}

//Processamento
function calcular_promoção(){
    let mensagem = ``
    let nome = ""
    let preço = 0
    let quantidade = 0
    let preço_total = 0
    let preço_total_compra = 0

    escreva(">>>>>>>>>Primeiro Produto<<<<<<<<<")


    while(nome !== "FIM"){
     nome = pergunta("Digite o nome do produto: ")  
        if(nome == "FIM") return [mensagem, preço_total_compra]
     preço = get_number_positive("Digite o valor do produto: ")
     quantidade = get_number_positive("Digite a quantidade a ser comprada: ")
     preço_total = calcular_preço(quantidade,preço)

     mensagem += `
  ==> Produto: ${nome} 
   Quantidade Comprada: ${quantidade}
   Preço total: R$ ${Number(preço_total).toFixed(2)}
         `
     preço_total_compra += preço_total

     escreva("\n>>>>>>>>>Proximo Produto<<<<<<<<<")

    }
        return [mensagem, preço_total_compra]
}

function calcular_preço(quantidade,preço){
    let preço_total = quantidade * preço

    if(quantidade > 10 && quantidade < 21 ){
        preço_total -= preço_total * 0.1
    }else if(quantidade >= 21 && quantidade <= 50){
        preço_total -= preço_total * 0.2
    }else if(quantidade > 50){
        preço_total -= preço_total * 0.25
    }
    return preço_total
}


main()