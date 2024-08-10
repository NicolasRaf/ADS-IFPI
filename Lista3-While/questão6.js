/*6. Escreva um algoritmo para determinar o número de dígitos de um número informado.*/ 
import {  get_number_positive_zero,escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = "\n[--------Número de dígitos--------]\n"
    escreva(mensagem)


//Entrada
    const numero =  get_number_positive_zero("Informe um numero: ")

//Saída
    const num_dígitos = contar_dígitos(numero)

     mensagem = (`
==========================================
      O número possui ${num_dígitos} ${qual_digito(num_dígitos)}! 
==========================================
    `)

    escreva(mensagem)
}

//Processamento

function contar_dígitos(numero){
    let divisões = 0
    let numero_dividido = numero
    
    if(numero === 0){
        return 1
    }

    while(numero_dividido > 0){
        numero_dividido = Math.floor(numero_dividido/10)
       divisões++
    }

    return divisões
}

function qual_digito(num){
    if(num === 1)
        return "digito"
    else    
        return "dígitos"
}

main()