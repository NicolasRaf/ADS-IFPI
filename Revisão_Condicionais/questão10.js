/*10. Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a
sua média. A atribuição de conceitos obedece à tabela abaixo.-O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem
“APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.*/ 
import { numerozin,escreva,pergunta } from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `[--------Notas com Conceitos--------]

 Média de Aproveitamento      Conceito
   Entre 9.0 e 10.0               A
   Entre 7.5 e 9.0                B
   Entre 6.0 e 7.5                C
   Entre 4.0 e 6.0                D
   Entre 4.0 e 0                  E
    `

    escreva(mensagem)

//Entrada
   const nota1 = numerozin("Digite sua primeira nota: ")
   const nota2 = numerozin("Digite sua segunda nota: ")

//Saída
    const Media = (nota1 + nota2)/2
    const conceito = qual_conceito(Media)

     mensagem = (`
   ---------------------------------------------
    Media: ${Media.toFixed(1)}
    Conceito: ${conceito}
    Situação: ${qual_situação(conceito)}
   ---------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function qual_conceito(Media){
    //Retorna o conceito com base na media
    if(Media > 9 && Media <= 10)
        return "A"
    else if(Media > 7.5 && Media <= 9)
        return "B"
    else if(Media > 6 && Media <= 7.5)
        return "C"
    else if(Media > 4 && Media <= 6)
        return "D"
    else if(Media >= 0 && Media <= 4)
        return "E"

}

function qual_situação(conc){
    //Retorna a sitação do aluno com base no conceito
    if(conc === "A" || conc === "B" || conc === "C")
        return "APROVADO!"
    else
        return "REPROVADO!"

}

main()