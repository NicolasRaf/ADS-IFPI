/*14. Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1.*/ 
import {escreva, get_number} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Pesquisa de Eleições Presidenciais------------]\n
Opções de Voto:
--------------------------------                                 
 45-Ciro Gomes   0-Nulo/branco
 23-Serra        99-Indeciso
 13-Dilma        98-Outros     
---------------------------------
    `
    escreva(mensagem)

//Entrada
    let voto = get_number_voto("Digite o numero do seu voto: ")

    //Saída
    const resultado = apuração_votos(voto) // Recebe uma array com cada porcentagem dos candidatos
/*   [0] = Serra       [3] = Indecisos  [7] = Qtd. de Entrevistados 
     [1] = Dilma       [4] = Outros 
     [2] = Ciro Gomes  [5] = Nulos                                       */

     mensagem = (`
====================CONTAGEM DE VOTOS================================
· Serra: ${resultado[0].toFixed(2)}% 
· Dilma: ${resultado[1].toFixed(2)}%
· Ciro Gomes: ${resultado[2].toFixed(2)}%
· Outros Candidatos: ${resultado[4].toFixed(2)}%
· Eleitores Indecisos: ${resultado[3].toFixed(2)}%
· Votos Nulos/Brancos: ${resultado[5].toFixed(2)}%
· Total de entrevistados : ${resultado[6].toFixed(2)}

· Possibilidade de Segundo Turno:${checar_segundo_turno(resultado)}
=====================================================================
    `)

    escreva(mensagem)
}

//Processamento
function get_number_voto(pergunta){
    const numero = get_number(pergunta)
  
    if(numero != 45 && numero != 13 && numero != 23 && numero != 99 && numero != 98 && numero != 0 && numero != -1){
      escreva('!!!Digite um candidato valido!!!\n')
      return get_number_voto(pergunta)
    }
    return numero
}

function apuração_votos(voto){
    let votos_totais = 0
    let numero_eleitores = 0
    let Serra = 0
    let Dilma = 0
    let Ciro = 0
    let indeciso = 0 
    let outros = 0
    let nulo = 0
    
    while(voto !== -1){
    escreva("\n------Proximo Entrevistado------\n")
    votos_totais = adicionar_voto(voto)
    numero_eleitores++
    voto = get_number_voto("Digite o numero do seu voto: ")
    Serra += votos_totais[0]
    Dilma += votos_totais[1]
    Ciro += votos_totais[2]
    indeciso += votos_totais[3]
    outros += votos_totais[4]
    nulo += votos_totais[5]
    }

   return fazer_porcentagem(numero_eleitores,Serra,Dilma,Ciro,indeciso,outros,nulo)
}

function adicionar_voto(voto){
    let Serra = 0
    let Dilma = 0
    let Ciro = 0
    let indeciso = 0 
    let outros = 0
    let nulo = 0

    if(voto === 45)
        Serra++
    else if(voto === 13)
        Dilma++
    else if(voto === 23)
        Ciro++
    else if(voto === 99)
        indeciso++
    else if(voto === 98)
        outros++
    else
        nulo++

    return [Serra, Dilma , Ciro, indeciso, outros, nulo]
}

function fazer_porcentagem(numero_eleitores,Serra,Dilma,Ciro,indeciso,outros,nulo){
    const por_serra = (Serra/numero_eleitores) * 100
    const por_dilma = (Dilma/numero_eleitores) * 100
    const por_ciro = (Ciro/numero_eleitores) * 100
    const por_indeciso = (indeciso/numero_eleitores) * 100
    const por_outros = (outros/numero_eleitores) * 100
    const por_nulo = (nulo/numero_eleitores) * 100

    return [por_serra, por_dilma, por_ciro, por_indeciso, por_outros, por_nulo, numero_eleitores].map(Number)
}

function checar_segundo_turno(resultado){
    const serra = resultado[0]
    const dilma = resultado[1]
    const ciro = resultado[2]
    const outros = resultado[4]

    if(serra > 50 || dilma > 50 || ciro > 50 || outros > 50)
        return " Não haverá segundo turno!"
    else if(serra === dilma && dilma === ciro && ciro === outros)
        return "  \nEmpate, os candidatos tiveram os mesmo numero de votos!"
    else
        return " Poderá ocorrer um segundo turno!"
}

main()