/*16. Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo*/ 
import { get_number_positive,escreva, pergunta, get_number_in_range} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[----------Pagamento de Emprestimo----------]\n`
    escreva(mensagem)


//Entrada
   const emprestimo = get_number_positive("Informe o valor do emprestimo: ")
   const pagamento_diario = get_number_positive("Informe o valor do pagamento diario: ")

//Saída
    const dias = simular_quitação(emprestimo,pagamento_diario)
     mensagem = (`
==================================================
O tempo total para a quitação foi de ${dias} 
==================================================
    `)

    escreva(mensagem)
}

//Processamento
function simular_quitação(emprestimo,pagamento_diario){
    let valor_pendente = emprestimo
    let dias_totais = 0

    escreva("\n-------------Primeiro Dia-------------")
    while(valor_pendente > 0){
        dias_totais++
        if(eh_Dia_Util()){
            if(verificar_pagamento()){
                valor_pendente -= pagamento_diario
                escreva(`\nValor pendente atual: ${pendencia_positiva(valor_pendente).toFixed(2)}`)
            }else{
                valor_pendente += 0.0085 * valor_pendente
                escreva(`\nValor pendente atual(+0,85%): ${Number(valor_pendente).toFixed(2)} `)
            }
                if(valor_pendente > 0)
                    escreva("\n-------------Proximo Dia-------------")
        }else{ 
            if(valor_pendente > 0)
                escreva("\n-------------Proximo Dia-------------")
        }
    }
        if(dias_totais === 1)
            return "1 dia!" 
        else
            return `${dias_totais} dias!`
}

function eh_Dia_Util(){
    const resposta =  get_number_in_range("\nEstamos em um dia util(1-sim/2-nao): ", 1, 2)
    return resposta === 1  
}

function verificar_pagamento(){
    const resposta = get_number_in_range("O pagamento foi realizado(1-sim/2-nao): ", 1, 2)
    return  resposta === 1 
}

function pendencia_positiva(valor_pendente){
    if(valor_pendente > 0){
        return valor_pendente
    }
        return 0
}

main()