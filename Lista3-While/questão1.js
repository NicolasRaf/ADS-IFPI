/*1. Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
divisores. (flag número = 0).*/ 
import { get_number,escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `[----------Lista de divisores----------]
>>>Digite 0 para finalizar a lista<<<
    `
    escreva(mensagem)


//Entrada
   let numero_inicial = get_number("Digite um numero: ")
   
//Saída
     mensagem = (`
===============================================
   Os divisores dos números digitados são: 
${listar_números(numero_inicial)} 
===============================================
    `)

    escreva(mensagem)

}

//Processamento
function listar_números(numero){
    let mensagem = `
-> Numero: ${numero} 
   Divisores: ${achar_divisores(numero)}  
    `

    while(numero != 0){
    numero = get_number("Digite outro numero: ")
    if(numero != 0)
        mensagem += `
-> Numero: ${numero} 
   Divisores: ${achar_divisores(numero)} 
    `              
     }

    return mensagem
}

function achar_divisores(numero){
    let divisor = 1
    let divisores = 1

    while (divisor <= numero){
        if(numero % divisor === 0 && divisor != 1)
            divisores +=  ", " + divisor 
            divisor++
    }
    return divisores
}

main()
