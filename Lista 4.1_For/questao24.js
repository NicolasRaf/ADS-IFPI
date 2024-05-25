/*24.   A  prefeitura  de  uma  cidade  fez  uma  pesquisa  entre  seus  habitantes,  coletando  dados  sobre 
 o  salário  e número  de  filhos.  Escreva  um  algoritmo  que  leia  o  salário  e  o  número  de  filhos  de    N  habitantes  e 
escreva:*/ 
import {escreva,get_number_positive_zero,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Pesquisa Salarial de Cidade-----------]`
        escreva(mensagem)
        escreva("   *****Digite \"Salário = 0\" para encerar*****\n")

    //Entrada
        const dados = verificar_habitantes()

    //Saída
        mensagem = (`
    ======================================================
      · Total de Participantes: ${dados[0]}
      · Média de salário da população: R$ ${dados[1].toFixed(2)}  
      · Média de número de filhos: ${dados[2].toFixed(1)}
      · Pessoas com salário de até mil reais: ${dados[3]}
    ======================================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function verificar_habitantes(){
    let num_Habitantes = 0
    let salario = 1
    let num_Filhos = 0
    let soma_Salario = 0
    let salarios_Ate_Mil = 0
    let media_Salarial = 0
    let media_Filhos = 0


    escreva(">>>>>>>>>Primeiro Cidadão<<<<<<<<<")

    for (;salario !== 0;) {

        salario = get_number_positive_zero("Digite seu salario: ")
        soma_Salario += salario

        if (salario === 0) { 
            return [num_Habitantes,media_Salarial,media_Filhos,salarios_Ate_Mil]
      } else {
            num_Filhos += get_number_positive_zero("Informe sua quantidade de filhos: ")
    
            if (salario <= 1000) {salarios_Ate_Mil++}
               
            num_Habitantes++
            media_Salarial = soma_Salario/num_Habitantes
            media_Filhos = num_Filhos/num_Habitantes
        }

     escreva("\n>>>>>>>>>Proximo Cidadão<<<<<<<<<")
    }

    return [num_Habitantes,media_Salarial,media_Filhos,salarios_Ate_Mil]
}

main()