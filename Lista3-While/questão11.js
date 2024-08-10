/*11. Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:
Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3) ...*/ 
import { get_number_positive_zero,escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-----------Resultados Gerais da Avaliação----------]\n
    >>>>Digite 0 na matricula para finalizar o programa!<<<<
    `
    escreva(mensagem)


//Entrada
   const avaliação = obter_resultados()

//Saída
     mensagem = (`
================RESULTADO GERAL=================
· Total de Aprovados: ${avaliação[1]}
· Total de Reprovados: ${avaliação[2]}
· Total de Aluno: ${avaliação[0]}
================================================
    `)

    escreva(mensagem)

}

//Processamento
function obter_resultados(){
    let num_alunos = 0
    let num_aprovados = 0
    let num_reprovados = 0
    let matricula = 1
    let nota1 = 0
    let nota2 = 0
    let nota3 = 0
    let media = 0


    while(matricula !== 0 ){
     matricula = get_number_positive_zero("Digite sua matricula: ")
        if(matricula !== 0){
        num_alunos++
        nota1 = get_number_positive_zero("Informe a sua primeira nota: ")
        nota2 = get_number_positive_zero("Informe a sua segunda nota: ")
        nota3 = get_number_positive_zero("Informe a sua terceira nota: ")
        media = fazer_media(nota1,nota2,nota3)
      
        if(media >= 7){
            num_aprovados++
        }else{
            num_reprovados++
        }
        if(matricula !== 0){
        escreva("\n-----------Proximo Aluno-----------\n")}
        }   
    }
    
    return [num_alunos, num_aprovados, num_reprovados] 
}

function fazer_media(nota1,nota2,nota3){
    return ((nota1 * 2) + (nota2 * 3) + (nota3 * 5))/10
}

main()