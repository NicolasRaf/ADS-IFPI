/*14. Leia  N,  calcule  e  escreva  o  maior  quadrado  menor  ou  igual  a  N. Por  exemplo,  se  N  for  
igual  a  38,  o maior quadrado menor que 38 é 36 (quadrado de 6).*/ 
import {escreva,get_number_positive,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Menor Quadrado Proximo-----------]\n`
        escreva(mensagem)


    //Entrada
        const numero = get_number_positive("Digite um numero: ") 

    //Saída
        mensagem = (`
    ======================================================
     O menor quadrado mais proximo de ${numero} é ${achar_Quadrado(numero)}
    ======================================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function achar_Quadrado (num) {

    let num_Quad = Math.sqrt(num)
    let num_Int =  Math.floor(num_Quad)
    let num_Dec = Math.abs(num_Quad - num_Int)
    
    if (num_Dec === 0 )
        return num

    for (; num_Dec !== 0;num--) {
        num_Quad = Math.sqrt(num)
        num_Int = Math.floor(num_Quad)
        num_Dec = Math.abs(num_Quad - num_Int)
    }

    return num + 1 
}

main()