/*29. Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar
quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do
investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se
deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00
por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída:
Saldo do investimento após 1 ano: 1268.25
Deseja processar mais um ano (S/N) ? */ 
import {escreva, get_number_positive, pergunta} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-----------Investimento Com Juros Compostos-----------]\n`
    escreva(mensagem)


//Entrada
    const valor_investido = get_number_positive("Informe o valor investido por mes: ")
    const taxa = get_number_positive("Informe a taxa de juros mensal: ")

//Saída
     mensagem = (`
 ==================================================
 · Valor Investido Mensalmente: R$ ${valor_investido}
 · Taxa de Juros Mensal: ${taxa}%
 · Resultado do investimento: ${calcular_investimento(valor_investido,taxa).toFixed(2)}
 ==================================================
    `)

    escreva(mensagem)

}

//Processamento
function calcular_investimento(valor_investido,taxa){
    let saldo_final = 0
    let taxa_total = 1
    let meses = 12
    let reprocessar = " "
    let ano = 1

    while(meses !== 0){
     meses--  
     taxa_total *= (1 + (taxa/100))   
     saldo_final = valor_investido * (taxa_total - 1 )/(taxa/100)
    
        if(meses === 0){
         reprocessar = pergunta(`\nSaldo do investimento apos ${ano} ano: ${saldo_final.toFixed(2)}
==> Deseja processar mais um ano (S/N): `)    
        if(reprocessar === "S" || reprocessar === "s"){
            meses = 12
            ano++
        }else{
            return saldo_final
        }
    }
  }   
}

main()