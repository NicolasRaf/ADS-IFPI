/*O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
 
Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção,
porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o
cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um programa que peça o tipo
e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da
compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.*/ 
import { numerozin,escreva,pergunta } from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `[--------Cupom Fiscal Açougue--------]
Selecione uma opção:
Opção 1: File
Opção 2: Alcatra
Opção 3: Picanha
`
    escreva(mensagem)

//Entrada

    //Solicitando o tipo de carne
    const tipo_carne = numerozin("Digite o numero da carne escolhida: ")

    if(eh_valido(tipo_carne) === false)
        return escreva(`
    Por favor selecione uma opção valida!!!`)//Verificação da opção de carve
    
    const Kg_carne = numerozin(`Quantos Kg de carne: `)//Quantidade da carne comprada

    //Solicitando o método de pagamento
    escreva(lista_pagamento())//Lista de opções para pagar

    const forma_pagamento = numerozin("Digite o numero do método desejado: ")
    
    if(forma_valida(forma_pagamento)  === false)
        return escreva(`
    Por favor selecione uma opção valida!!!`)//Verificação do método de pagamento


//Saída
    const preço_total = preço_carne_kg(tipo_carne,Kg_carne) * Kg_carne
    const desconto_total = calcular_desconto(forma_pagamento,preço_total,Kg_carne)
     
     mensagem = (`
   ---------------------------------------------
   · Tipo de Carne: ${selecionar_carne(tipo_carne)}
   · Quantidade(Kg): ${Kg_carne} Kg
   · Preço Total: R$ ${preço_total.toFixed(2)}
   · Tipo de Pagamento: ${selecionar_pagamento(forma_pagamento)}
   · Valor do Desconto: R$ ${desconto_total.toFixed(2)}
   · Valor a Pagar: R$ ${calcular_preço(preço_total,desconto_total).toFixed(2)}
   ---------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function calcular_preço(preço_total,desconto_total){
    const preço_final = preço_total - desconto_total

    return preço_final
}

function preço_carne_kg(tipo_carne,Kg_carne){
    let preço = 0

    //Precificação da carne se for File com base na quantidade comprada
    if(Kg_carne > 5 && tipo_carne === 1)
        preço = 5.80 //Comprando mais que 5 Kg
    if(Kg_carne <= 5 && tipo_carne === 1)
        preço = 4.90 //Comprando menos que 5 Kg

    //Precificação da carne se for Alcatra com base na quantidade comprada
    if(Kg_carne > 5 && tipo_carne === 2)
        preço = 6.80 //Comprando mais que 5 Kg
    if(Kg_carne <= 5 && tipo_carne === 2)
        preço = 5.90 //Comprando menos que 5 Kg

    //Precificação da carne se for Picanha com base na quantidade comprada
    if(Kg_carne > 5 && tipo_carne === 3)
        preço = 7.80 //Comprando mais que 5 Kg
    if(Kg_carne <= 5 && tipo_carne === 3)
        preço = 6.90 //Comprando menos que 5 Kg

        return preço
}

function calcular_desconto(forma_pagamento,preço_total,Kg_carne){
    let desconto = 0

    //Desconto do cartão tabajara, único desconto da questão.
    if(forma_pagamento === 1)
        desconto = (preço_total * 0.05)
    
    return desconto

}

function lista_pagamento(){
    return`\nSelecione o método de pagamento:
Opção 1: Cartão Tabajara(Desconto de 5%)
Opção 2: Dinheiro
Opção 3: Cartão
Opção 4: Pix
`

}

function selecionar_pagamento(forma_pagamento){
//Retorna o nome da forma de pagamento para a área de saída conforme a opção escolhida
    if(forma_pagamento === 1)
        return "Cartão Tabajara"
    else if(forma_pagamento === 2)
        return "Dinheiro"
    else if(forma_pagamento === 3)
        return "Cartão"
    else
        return "Pix"

}

function forma_valida(forma_pagamento){
    //verifica se a opção de pagamento escolhida esta entre as validas.
    return forma_pagamento === 1 || forma_pagamento === 2 || forma_pagamento === 3 || forma_pagamento === 4

}

function selecionar_carne(tipo_carne){
//Retorna o nome da carne escolhida para a área de saída conforme as opções dadas.
    if(tipo_carne === 1)
        return "File"
    else if(tipo_carne === 2)
        return "Alcatra"
    else
        return "Picanha"
}

function eh_valido(opção){
    //verifica se a opção de carne escolhida esta entre as validas.
    return opção === 1 || opção === 2 || opção === 3
}


main()
//Tentei deixar legível e comentado na medida do possível :)