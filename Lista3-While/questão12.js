/*12. Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
responda quem ganha a partida. A partida chega ao final se:
· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
diferença de 2 pontos sobre o adversário.*/ 
import { get_number_positive,escreva,pergunta} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Verificador de partida de pingue-pongue------------]\n`
    escreva(mensagem)


//Entrada
   const jogador1 = pergunta("Qual o nome do primeiro jogador: ")
   const jogador2 = pergunta("Qual o nome do segundo jogador: ")

//Saída
     mensagem = (`
==================================
${obter_vencedor(jogador1,jogador2)}
==================================
    `)

    escreva(mensagem)

}

//Processamento
function obter_vencedor(jogador1,jogador2){
    let pontos_j1 = 0
    let pontos_j2 = 0
    let ganha_ponto = 0

    while(jogador1 !== jogador2){ //Agora que percebi que isso é literalmente um while(true) :|
        ganha_ponto = get_number_positive(`Qual jogador ganhou o ponto (1 - ${jogador1}, 2 - ${jogador2}): `)
        if (ganha_ponto === 1){
            pontos_j1++
        }else if (ganha_ponto === 2){
            pontos_j2++
        }else{
            escreva("\nPor favor, escolha apenas 1 ou 2 para indicar o jogador.\n")
        }

        if (pontos_j1 >= 21 && Math.abs(pontos_j1 - pontos_j2) >= 2) {
            return `    ${jogador1} foi o vencedor!`
        }else if(pontos_j2 >= 21 && Math.abs(pontos_j1 - pontos_j2) >= 2) {
            return `    ${jogador2} foi o vencedor!`
        }

    }
}

main()