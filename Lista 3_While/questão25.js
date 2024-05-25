/*25. Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
mostrando ao final, o número de cada canal e sua respectiva audiência.*/ 
import { get_number,escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[----------Pesquisa de Audiência----------]
  *********Digite 0 para encerar********\n
Emissoras: 2/4/5/7/10
`
    escreva(mensagem)

//Entrada
    const dados = coletar_audiência()
    const total_entrevistados = dados[5]
    const emissora_2 = dados[0]
    const emissora_4 = dados[1]
    const emissora_5 = dados[2]
    const emissora_7 = dados[3]
    const emissora_10 = dados[4]


//Saída
    const percentuais = calcular_percentual(emissora_2,emissora_4,emissora_5,emissora_7,emissora_10,total_entrevistados)
    const perc_em2 = percentuais[0].toFixed(2)
    const perc_em4 = percentuais[1].toFixed(2)
    const perc_em5 = percentuais[2].toFixed(2)
    const perc_em7 = percentuais[3].toFixed(2)
    const perc_em10 = percentuais[4].toFixed(2)

     mensagem = (`
 ====================RESULTADOS====================
 · Total de Entrevistados: ${total_entrevistados} espectadores.

 · Emissora 2: ${emissora_2} espectador${tem_s(emissora_2)}(${perc_em2}%)
 · Emissora 4: ${emissora_4} espectador${tem_s(emissora_2)}(${perc_em4}%)
 · Emissora 5: ${emissora_5} espectador${tem_s(emissora_2)}(${perc_em5}%)
 · Emissora 7: ${emissora_7} espectador${tem_s(emissora_2)}(${perc_em7}%)
 · Emissora 10: ${emissora_10} espectador${tem_s(emissora_2)}(${perc_em10}%)
 ==================================================
    `)

    escreva(mensagem)

}

//Processamento
function get_number_emissora(pergunta){
    const emissora = get_number(pergunta)

    if(emissora !== 2 && emissora !== 4 && emissora !== 5 && emissora !== 7 && emissora !== 10 && emissora !== 0){
        escreva("!!!Emissora Invalida!!!\n")
        return get_number_emissora(pergunta)
    }
        return emissora
}

function coletar_audiência(){
    let emissora = 1
    let total_entrevistados = -1 // Começa negativo para retirar a leitura do 0 ao parar o while
    let emissora_2 = 0
    let emissora_4 = 0
    let emissora_5 = 0
    let emissora_7 = 0
    let emissora_10 = 0
    
    escreva(">>>>>>>>>Primeiro Entrevistado<<<<<<<<<")

    while(emissora !== 0){
     emissora = get_number_emissora("Informe o canal da emissora: ")
     total_entrevistados++
     
    if(emissora === 2)
        emissora_2++
    if(emissora === 4)
        emissora_4++
    if(emissora === 5)
        emissora_5++
    if(emissora === 7)
        emissora_7++
    if(emissora === 10)
        emissora_10++

    if(emissora !== 0)
        escreva("\n>>>>>>>>>Proximo Entrevistado<<<<<<<<<")
    }

    return [emissora_2,emissora_4,emissora_5,emissora_7,emissora_10,total_entrevistados]
}

function calcular_percentual(em2,em4,em5,em7,em10,total){

    const perc_em2 = (em2/total) * 100
    const perc_em4 = (em4/total) * 100
    const perc_em5 = (em5/total) * 100
    const perc_em7 = (em7/total) * 100
    const perc_em10 = (em10/total) * 100

    return [perc_em2,perc_em4,perc_em5,perc_em7,perc_em10]
}

function tem_s(emissora){
    if(emissora > 1){
        return "es"
    }
    return ""
}

main()