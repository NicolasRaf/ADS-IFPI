/*6. Escreva a tabuada dos números de 1 a 10.*/ 
import {escreva} from "./Funções/io.js"

function main(){
//Entrada
    //sem entradas ):

//Saída
    const mensagem = (`
================ TABUADAS DE 1 a 10 ====================\n
${fazer_tabuada()}
========================================================
    `)

    escreva(mensagem)

}

//Processamento
function fazer_tabuada(){
    let contador = 0
    let tabuada1 = ""
    let numero = 1

    while(contador <= 10){
    contador++

    if(contador === 1){
    tabuada1 += `Tabuada do ${numero}: ` + numero * contador    
    }else if(contador <= 9){
        tabuada1 +=  "," + (numero * contador) 
    }

    if(contador === 10 && numero !== 10){
        tabuada1 +=  "," + (numero * contador) + "\n\n"
    }else if(contador === 10 && numero === 10){
        tabuada1 +=  "," + (numero * contador)
    }
    if(contador === 10 && numero !== 10){
        numero = numero + 1
        contador = 0
    }
}

    return tabuada1
}


main()