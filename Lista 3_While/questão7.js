/*7. Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido*/ 
import { get_number,escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = "\n[--------Encontrar Numero--------]\n"
    escreva(mensagem)


//Entrada
   const numero_final = get_number("Digite o numero a ser encontrado: ")

//Saída
     mensagem = (`
==========================================
        ${identificador_numero(numero_final)}
==========================================
    `)

    escreva(mensagem)

}

//Processamento

function identificador_numero(numero){
    let numero_lista = get_number("Digite um numero: ")

    while(numero !== numero_lista ){
        numero_lista = get_number("Digite outro numero: ")
    }

    return "O numero foi encontrado!"

}



main()