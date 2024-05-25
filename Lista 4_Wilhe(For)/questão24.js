/*24.   A  prefeitura  de  uma  cidade  fez  uma  pesquisa  entre  seus  habitantes,  coletando  dados  sobre 
 o  salário  e número  de  filhos.  Escreva  um  algoritmo  que  leia  o  salário  e  o  número  de  filhos  de    N  habitantes  e 
escreva:  */
import {escreva, get_number_in_range, get_number_positive, pergunta} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-----------Pesquisa Salarial de Cidade-----------]\n
  *****Digite "Salário = 0" para encerar****\n`
    escreva(mensagem)


//Entrada
   const dados = verificar_habitantes()

//Saída
     mensagem = (`
 ==================================================
  · Total de Participantes: ${dados[0]}
  · Média de salário da população: R$ ${dados[1].toFixed(2)}  
  · Média de número de filhos: R$ ${dados[2].toFixed(2)}
  · Pessoas com salário de até mil reais: ${dados[3]}
 ==================================================
    `)

    escreva(mensagem)
    if(pergunta(`Finalizar Programa?(Digite Algo): `))
        console.clear()

}

//Processamento
function verificar_habitantes(){
    let num_filhos = 0
    let salario = 1
    let soma_salario = 0
    let salarios_ate_mil = 0
    let num_habitantes = 0
    let media_salarial = 0
    let media_filhos = 0


    escreva(">>>>>>>>>Primeiro Cidadão<<<<<<<<<")

    while(salario !== 0){
      salario = get_number_in_range("Digite seu salario: ",0,Infinity)
      soma_salario += salario
    if(salario === 0) 
        return [num_habitantes,media_salarial,media_filhos,salarios_ate_mil]
    else
      num_filhos += get_number_positive("Informe sua quantidade de filhos: ")
    
    if(salario <= 1000)
        salarios_ate_mil++

     num_habitantes++
     media_salarial = soma_salario/num_habitantes
     media_filhos = num_filhos/num_habitantes

     escreva("\n>>>>>>>>>Proximo Cidadão<<<<<<<<<")
    }

    return [num_habitantes,media_salarial,media_filhos,salarios_ate_mil]
}

main()