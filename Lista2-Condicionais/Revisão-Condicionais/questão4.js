/*4. Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
o "Aprovado", se a média alcançada for maior ou igual a sete;
o "Reprovado", se a média for menor do que sete;
o "Aprovado com Distinção", se a média for igual a dez.*/ 
import { numerozin,escreva,pergunta } from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = "[-----------Media e Resultado das Notas-----------]"
    escreva(mensagem)


//Entrada
    const nota1 = numerozin(`Qual a primeira nota: `)
    const nota2 = numerozin(`Qual a segunda nota: `)

//Saída
     mensagem = (`
   ------------------------------------------------
    ${conferir_media(nota1,nota2)}
   ------------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function conferir_media(n1,n2){
    const Media = (n1 + n2)/2

    if(Media < 7)
        return `      Você foi reprovado/a!(Media = ${Media})`
    else if(Media >= 7 && Media < 10)
        return `      Você foi aprovado/a!(Media = ${Media})`
    else(Media === 10)
        return `Você foi aprovado/a com Distinção!(Media = ${Media})`


}


main()