/*4. Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o
resultado da última divisão efetuada.*/ 
import { get_number,escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `[------------Divisão Por 2 Consecutiva------------]
    `
    escreva(mensagem)


//Entrada
   const numero = get_number("Digite um numero: ")
   
//Saída
     mensagem = (`
=================================================
   O resultado da ultima divisão foi: ${divisao_dois(numero)} 
=================================================
    `)

    escreva(mensagem)

}

//Processamento
function divisao_dois(numero){

    while(numero > 1 ){  
    numero = numero/2
    }

    return numero.toFixed(4)
}


main()
