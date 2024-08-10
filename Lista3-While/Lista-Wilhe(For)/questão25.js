/*Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos. 
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:   
· 1, 2, 3 = voto para os respectivos candidatos;   
· 9 = voto nulo;   
· 0 = voto em branco;  
Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva: */
import {escreva,get_number,pergunta} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-----------Eleição Presidencial-----------]\n
   ***Digite "Voto = -1" para encerar***\n
         Opções de Voto
 --------------------------------                                 
  1-Cleitin    9-Nulo
  2-Tiririca   0-Em branco
  3-Anita            
 ---------------------------------
    `
    escreva(mensagem)

//Entrada
    const dados = executar_eleição()
    const vencedor = achar_vencedor(dados[0],dados[1],dados[2],dados[3],dados[4],dados[5],dados[6])

//Saída
     mensagem = (`
=======================CONTAGEM DE VOTOS========================
 · Total de Eleitores: ${dados[5]}
 · Votos em Cleitin: ${dados[0]}
 · Votos em Tiririca: ${dados[1]}
 · Votos em Anita: ${dados[2]}
 · Total de votos nulos: ${dados[3]}
 · Total de votos em branco: ${dados[4]}
 -------------------------------------------------
    ${vencedor}
===============================================================
    `)

    escreva(mensagem)
    if(pergunta(`Finalizar Programa?(Digite Algo): `))
        console.clear()

}

//Processamento
function executar_eleição(){
    let voto = 0
    let votos1 = 0
    let votos2 = 0
    let votos3 = 0
    let votos9 = 0
    let votos0 = 0
    let total_eleitores = 0

    escreva("\n--------Primeiro Eleitor--------\n")

    while(voto !== -1){
     voto = get_number_eleição("Digite o numero do seu voto: ")
    if(voto === -1)
        return [votos1,votos2,votos3,votos9,votos0,total_eleitores]
    else

     if(voto === 0){
       votos0++
     }else if(voto === 1){
        votos1++
     }else if(voto === 2){
        votos2++
     }else if(voto === 3){
        votos3++
     }else if(voto === 9){
        votos9++
     }
     total_eleitores++
     escreva("\n--------Proximo Eleitor--------\n")
    }

     return [votos1,votos2,votos3,votos9,votos0,total_eleitores]
}

function achar_vencedor(vt1,vt2,vt3,vt9,vt0,eleitores){
    const porcentagens = fazer_porcentagem(vt1,vt2,vt3,vt9,vt0,eleitores) 

    const por_vt1 = porcentagens[0] 
    const por_vt2 = porcentagens[1] 
    const por_vt3 = porcentagens[2] 
    const por_vt9 = porcentagens[3]
    const por_vt0 = porcentagens[4] 

    if(por_vt0 + por_vt9 > 50){ 
        return "Não houve maioridade de votos em nenhum candidato!"
    }else if(por_vt1 === por_vt2 && por_vt2 === por_vt3){
        return "Empate, os candidatos tiveram os mesmo numero de votos!"
    }else if(por_vt1 > 50){
        return "Cleitin foi o vencedor!!"
    }else if(por_vt2 > 50){
        return "Tiririca foi o vencedor!!"
    }else if(por_vt3 > 50){
        return "Anita foi a vencedora!!"
    }
}

function fazer_porcentagem(vt1,vt2,vt3,vt9,vt0,eleitores){
    const por_vt1 = (vt1/(eleitores-vt0-vt9)) * 100 
    const por_vt2 = (vt2/(eleitores-vt0-vt9)) * 100 
    const por_vt3 = (vt3/(eleitores-vt0-vt9)) * 100 
    const por_vt9 = (vt9/eleitores) * 100
    const por_vt0 = (vt0/eleitores) * 100

    return [por_vt1,por_vt2,por_vt3,por_vt9,por_vt0].map(Number)
}

function get_number_eleição(pergunta){
    const numero = get_number(pergunta)
  
    if (numero !== 0 && numero !== 1 && numero !== 2 && numero !== 3 && numero !== 9 && numero !== -1){
      escreva('!!!Digite um valor valido!!!\n')
      return get_number_eleição(pergunta)
    }
    return numero
}

main()