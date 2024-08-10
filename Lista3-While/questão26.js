/*26. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).*/
import {escreva,get_number_in_range} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[----------Avaliação De Filme----------]
***Digite "-1" na idade para encerar***\n
1-Ótimo
2-Bom
3-Regular 
4-Péssimo
`
    escreva(mensagem)

//Entrada
  const dados = coletar_espectadores()
  const total_espectadores = dados[0]
  const qtd_ótimo = dados[1]
  const soma_idade_ótimo = dados[2]
  const qtd_bom = dados[3]
  const qtd_regular = dados[4]
  
//Saída
  const media_idade_ótimo = soma_idade_ótimo/qtd_ótimo
  const percentual_bom = (qtd_bom/total_espectadores) * 100

     mensagem = (`
 ==============================================================================
   · Média das idades das pessoas que responderam ótimo: ${media_idade_ótimo.toFixed(2)} anos.
   · Quantidade de pessoas que respondeu regular: ${qtd_regular} espectadores.
   · Percentual de pessoas que respondeu bom entre os entrevistados: ${percentual_bom.toFixed(2)}%
 ===============================================================================
    `)

    escreva(mensagem)

}

//Processamento
function coletar_espectadores(){

    let idade = 0
    let opinião = 0
    let total_espectadores = 0
    let ótimo = 0
    let idade_ótimo = 0
    let bom = 0
    let regular = 0
    
    escreva(">>>>>>>>>Primeiro Espectador<<<<<<<<<")

    while(idade !== -1){
    idade = get_number_in_range("Informe sua idade: ",-1,Infinity)
    if(idade === -1) return [total_espectadores,ótimo,idade_ótimo,bom,regular]
    opinião = get_number_in_range("Digite o numero da sua opiniao: ",1,4)
    total_espectadores++
  
    if(opinião === 1){
      ótimo++
      idade_ótimo += idade
    }else if(opinião === 2){
      bom++
    }else if(opinião === 3){
      regular++
    }
      
    if(idade !== -1)
        escreva("\n>>>>>>>>>Proximo Espectador<<<<<<<<<")
  }
    return [total_espectadores,ótimo,idade_ótimo,bom,regular]
}

main()