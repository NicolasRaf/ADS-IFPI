/*27. Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino,
2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:*/ 
import { escreva, get_number_positive, get_number_in_range} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[----------Pesquisa do Estado Civil----------]
   ******Digite 0 no sexo para encerar*****\n 
  Estado Civil               Sexo      
 --------------        ---------------- 
  1-Casado               1- Masculino    
  2-Solteiro             2- Feminino     
  3-Divorciado         -----------------             
  4-Viúvo 
 ---------------          
`
    //Coloquei o "Flag = 0" para facilitar o exemplo
    escreva(mensagem)

//Entrada
    const dados = coletar_idade_estado()
    const media_homens = dados[0]
    const media_mulheres = dados[1]
    const perc_Hsolteiros = dados[2]
    const perc_Msolteiros = dados[3]
    const mulheres_divorciadas_acima30 = dados[4]

//Saída
     mensagem = (`
 ==================================================
 · Média de idade das mulheres: ${media_mulheres.toFixed(1)} anos.
 · Média de idade dos homens: ${media_homens.toFixed(2)} anos.
 · Percentual de homens solteiros: ${perc_Hsolteiros.toFixed(2)}% 
 · Percentual de mulheres solteiras: ${perc_Msolteiros.toFixed(2)}%
 · Mulheres divorciadas acima de 30 anos: ${mulheres_divorciadas_acima30}
 ==================================================
    `)

    escreva(mensagem)

}

//Processamento

function coletar_idade_estado(){
    let sexo = 0
    let total_entrevistados = 0
    let total_homens = 0
    let total_mulheres = 0
    let estado_civil = 0
    let idade = 0
    let idade_homens = 0
    let idade_mulheres = 0
    let homens_solteiros = 0
    let mulheres_solteiras = 0
    let mulheres_divorciadas30 = 0
    
    let flag = 1

    escreva(">>>>>>>>>Primeiro Entrevistado<<<<<<<<<")

    while(total_entrevistados !== 100 && flag !== 0){
    sexo = get_number_in_range("Digite o numero do seu sexo: ",0,2)
    if(sexo !== 0){
      estado_civil = get_number_in_range("Digite o numero do seu estado civil: ",1,4)
      idade = get_number_positive("Informe sua idade: ")
      total_entrevistados++
    }
    if(sexo === 0){
       flag = 0
       estado_civil = 0
    }

    if(sexo === 1){
        idade_homens += idade
        total_homens++
    }
    if(sexo === 2){
        idade_mulheres += idade
        total_mulheres++
    }

    if(estado_civil === 2){
      if(sexo === 1)
        homens_solteiros++
      if(sexo === 2) 
        mulheres_solteiras++
    }

    if(estado_civil === 3 && idade > 30 && sexo === 2){
        mulheres_divorciadas30++
    }

    if(total_entrevistados !== 100 && flag !== 0)
        escreva("\n>>>>>>>>>Proximo Entrevistado<<<<<<<<<")
  }
    const media_mulheres = idade_mulheres/total_mulheres
    const media_homens = idade_homens/total_homens

    const perc_Hsolteiros = (homens_solteiros/total_homens) * 100
    const perc_Msolteiros = (mulheres_solteiras/total_mulheres) * 100

    return [media_homens,media_mulheres,perc_Hsolteiros,perc_Msolteiros,mulheres_divorciadas30]
}

main()