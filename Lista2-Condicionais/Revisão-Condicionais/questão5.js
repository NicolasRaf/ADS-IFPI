/*5. Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é
sempre pelo mais barato.*/
import { numerozin, escreva, pergunta } from "./Funções/io.js"

function main() {
//Apresentação
    let mensagem = "[----------Selecionar Barato----------]"
    escreva(mensagem)

//Entrada
    const produto1 = numerozin(`Qual o valor do primeiro produto: `)
    const produto2 = numerozin(`Qual o valor do segundo produto: `)
    const produto3 = numerozin(`Qual o valor do terceiro produto: `)

//Saída
    mensagem = (`
   -----------------------------------------------
    ${mais_barto(produto1, produto2, produto3)}
   -----------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function mais_barto(pro1, pro2, pro3) {
    if (pro1 === pro2 && pro2 === pro3)
        return "    Os produtos possuem o mesmo preço!"
    else if (pro1 < pro2 && pro1 < pro3)
        return ` O primeiro produto deve ser comprado(${pro1} R$)`
    else if (pro2 < pro3)
        return ` O segundo produto deve ser comprado(${pro2} R$)`
    else
        return ` O terceiro produto deve ser comprado(${pro3} R$)`

}


main()