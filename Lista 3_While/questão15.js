/*15. Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária
e na base hexadecimal.*/ 
import { get_number_in_range,escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[---------------Decimal para Binário e Hexadecimal---------------]\n`
    escreva(mensagem)


//Entrada
   const numero = get_number_in_range("Digite um numero(entre 0 e 255): ", 0, 255)

//Saída
    const binário = transformar_binário(numero) 
    const hexadecimal = transformar_hexadecimal(numero)

     mensagem = (`
     =================================================
            O numero ${numero} Decimal equivale a:
         ${binário}em Binário e a ${hexadecimal}em Hexadecimal!
     =================================================
    `)

    escreva(mensagem)

}

//Processamento
function transformar_binário(numero){
    let digito = " "
    if(numero === 0){
        return 0
    }

    while(numero > 1){
        digito = (numero % 2) + digito
        numero = Math.floor(numero/2)
    }

    return "1" + digito 
} 

function transformar_hexadecimal(numero){
    let digito = " "
    if(numero === 0){
        return 0
    }

    while(numero > 1){
        if(numero % 16 === 10)
            digito = "A" + digito
        else if(numero % 16 === 11)
            digito = "B" + digito
        else if(numero % 16 === 12)
            digito = "C" + digito
        else if(numero % 16 === 13)
            digito = "D" + digito
        else if(numero % 16 === 14)
            digito = "E" + digito
        else if(numero % 16 === 15)
            digito = "F" + digito 
        else
            digito = (numero % 16) + digito
        
        numero = Math.floor(numero/16)
    }

    return digito
} 

main()