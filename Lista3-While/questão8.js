/*8. Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
quando a soma de dois números consecutivos da lista for igual a X.*/ 
import { get_number,escreva} from "./Funções/io.js"

function main(){

//Apresentação
    let mensagem = "\n[----------Soma de Consecutivos--------]\n"
    escreva(mensagem)

//Entrada
   const numero = get_number("Digite um numero para finalizar a lista: ")

//Saída
     mensagem = (`
==========================================================
    O numero foi encontrado e lista de números foi:\n
    ${soma_consecutivos(numero)}
==========================================================
    `)

    escreva(mensagem)

}

//Processamento

function soma_consecutivos(numero){
    let numero_atual = get_number("Digite um numero: ")
    let numero_antecessor = get_number("Digite outro numero: ")
    let lista = numero_atual + "/"
        lista += numero_antecessor 
    

    while( (numero_atual + numero_antecessor) !== numero){
        numero_antecessor = numero_atual
        numero_atual  = get_number("Digite outro numero: ")
        lista +=  "/"  + numero_atual 
    }

    return lista
}

main()