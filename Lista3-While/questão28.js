/*28. Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatório = rand())
e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número
digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente
um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso,
escreva em quantas tentativas o usuário acertou.*/ 
import {escreva,get_number_positive,pergunta} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[--------Jogo de Adivinhação--------]\n`
    escreva(mensagem)


//Entrada
    const limite = get_number_positive("Ate que numero devera ser sorteado(1 a N): ")

//Saída
     mensagem = (`
   ==================VITORIA==================
                !!!Você Acertou!!!
             Numero de Tentativas: ${adivinha(limite)}
   ===========================================
    `)
    
    escreva(mensagem)
    if(pergunta(`Finalizar Programa?(Digite Algo): `))
        console.clear()

}

//Processamento
function adivinha(limite){
    let aleatório = Math.floor(Math.random() * (limite + 1))
        if(aleatório === 0){
            aleatório = 1
        }
    let tentativa = get_number_positive("Digite sua tentativa: ")
    let num_tentativas = 1

    while(tentativa !== aleatório){
    num_tentativas++

    if(tentativa < aleatório){
        escreva("O numero é MAIOR!\n")
    }else{(tentativa > aleatório)
        escreva("O numero é MENOR!\n")
        }

    if(tentativa !== aleatório)
        tentativa = get_number_positive("Digite outra tentativa: ")

    }
    
    return num_tentativas
}

main()