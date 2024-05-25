/*9. Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da
prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e
quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo,
clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:
Ao final, o algoritmo deve escreva os totais de pontos de cada clube, indicando o clube vencedor. */ 

import { get_number,escreva,pergunta} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[--------Competição de natação--------]
          Lugar       Pontos
            1°           9
            2°           6
            3°           4
            4°           3
    `
    escreva(mensagem)


//Entrada
    let número_prova = get_number("Digite o numero de provas: ")
    let quantidade_nadadores = get_number("Digite a quantidade de nadadores: ")
    
    //Saída
    const pontuações = competição_natação(número_prova,quantidade_nadadores)
    const pontuaçãoA = pontuações[0]
    const pontuaçãoB = pontuações[1]
    
mensagem = (`
==================RESULTADO FINAL=========================
Clube A: ${pontuaçãoA} pontos 
Clube B: ${pontuaçãoB} pontos  

>>>>>>>${eh_campeão(pontuaçãoA,pontuaçãoB)}<<<<<<<
                               
==========================================================
    `)

    escreva(mensagem)

}

//Processamento

function competição_natação(num_prova,quant_nadadores){ 
    let quant_nadadores_temp = quant_nadadores
    let nome = " "
    let classificação = 0
    let tempo = 0 
    let clube = " "
    let pontuaçãoA = 0
    let pontuaçãoB = 0

    while(num_prova !== 0){
        num_prova--
        escreva(`\n=====${num_prova + 1}° Prova======\n`) 
    
        while(quant_nadadores_temp !== 0){
            nome = pergunta("Qual seu nome: ")
            classificação = get_number("Qual a sua classificacao: ")
            tempo = get_number("Qual foi seu tempo de prova: ")
            clube = pergunta("A qual clube voce pertence: ") 
            quant_nadadores_temp--
            if(quant_nadadores_temp > 0){ 
                escreva("\n-----------Proximo Nadador-----------\n")}
            pontuaçãoA += calcular_pontuaçãoA(classificação, clube)
            pontuaçãoB += calcular_pontuaçãoB(classificação, clube)
        }
           quant_nadadores_temp = quant_nadadores 
           
    }

    return [pontuaçãoA , pontuaçãoB]
}

function calcular_pontuaçãoA(classificação,clube){
    let pontuação = 0

    if(clube === "A" || clube === "a"){
        if(classificação === 1)
            pontuação = 9
        else if(classificação === 2)
            pontuação = 6
        else if(classificação === 3)
            pontuação = 4
        else 
            pontuação = 3
    }
        return pontuação

}

function calcular_pontuaçãoB(classificação,clube){
    let pontuação = 0

    if(clube === "B" || clube === "b"){
        if(classificação === 1)
            pontuação = 9
        else if(classificação === 2)
            pontuação = 6
        else if(classificação === 3)
            pontuação = 4
        else 
            pontuação = 3
    }
        return pontuação

}

function eh_campeão(pontuaçãoA, pontuaçãoB) {
    if (pontuaçãoA > pontuaçãoB) {
        return "O vencedor foi o clube A!!";
    } else if (pontuaçãoB > pontuaçãoA) {
        return "O vencedor foi o clube B!!";
    } else {
        return "O resultado da competição foi Empate!!";
    }
}


main()