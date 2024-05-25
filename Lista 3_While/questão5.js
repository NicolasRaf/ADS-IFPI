/*5. Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
chegar a 2.*/ 
import { get_number,escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Divisão entre X e N------------]\n`
    escreva(mensagem)


//Entrada
const numeroX = get_number("Digite um numero pra X: ")
const numeroN = get_number("Digite um numero pra N: ")

//Saída
     mensagem = (`
==================================================
   O resultado das divisões entre X e N foram:
   ${divisao_NX(numeroX,numeroN)}
==================================================
    `)

    escreva(mensagem)

}

//Processamento
function divisao_NX(numeroX, numeroN){
    let posição = 1
    let divisões = `${posição}° Divisão: ` + (numeroX/numeroN).toFixed(5)
    
    while(numeroN > 2 ){
    numeroX = numeroX/numeroN
    posição++  
    numeroN--
    divisões += `
   ${posição}° Divisão: ` + (numeroX/numeroN).toFixed(5)
    
    }
    
    return divisões
}


main()
