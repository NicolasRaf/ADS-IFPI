/*6. Escreva a tabuada dos números de 1 a 10.*/ 
import {escreva,pergunta} from "./Funções/io.js"

function main(){    

    //Saída
    const mensagem = (`
    ================ TABUADAS DE 1 a 10 ====================\n
       Tabuada do 1: ${fazer_tabuada(1)}

       Tabuada do 2: ${fazer_tabuada(2)}

       Tabuada do 3: ${fazer_tabuada(3)}

       Tabuada do 4: ${fazer_tabuada(4)}

       Tabuada do 5: ${fazer_tabuada(5)}

       Tabuada do 6: ${fazer_tabuada(6)}

       Tabuada do 7: ${fazer_tabuada(7)}

       Tabuada do 8: ${fazer_tabuada(8)}

       Tabuada do 9: ${fazer_tabuada(9)}

       Tabuada do 10: ${fazer_tabuada(10)}
    ========================================================
        `)
    
        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function fazer_tabuada (num) {
    let tabuada = ""

    for (let contador = 1;contador <= 10; contador++) {

        if (contador === 1){
            tabuada += contador * num
        }
        else
            tabuada += "," + contador * num
    }
    return tabuada
   
}


main()