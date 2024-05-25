/* 16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
escreva “Reprovado”.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Media aluno--------]"
    prompt(mensagem)


//Entrada
const nota1 = numerozin("Digite a primeira nota: ")    
const nota2 = numerozin("Digite a segunda nota: ")    

//Saída
     mensagem = (`
   ---------------------------------------------------------
     ${aprovado_reprovado(nota1,nota2)}
   ---------------------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function aprovado_reprovado(n1,n2){
    const media_geral = (n1 + n2)/2
    
    if(media_geral >= 7)
        return `Você foi aprovado! com media igual a ${media_geral.toFixed(1)}`
    if(media_geral < 5)
        return "            Voce ficou reprovado!"
    prompt(`Você ficou de Prova Final!!
    `)
    
    const pós_pf = prova_final(media_geral)
    if (pós_pf >= 5)
        return `Você foi aprovado! pós prova final com media igual a ${pós_pf.toFixed(1)}`
    else            
        return "            Voce ficou reprovado!"

}

function prova_final(media_geral){
    const nota_pf = numerozin("Qual a nota da prova final: ")
    const media_pf = (media_geral + nota_pf)/2 

    return media_pf 
}
main()