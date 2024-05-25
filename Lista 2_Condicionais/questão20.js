/*20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Localizador de quadrante--------]"
    prompt(mensagem)


//Entrada
    const ângulo = numerozin("Digite um angulo entre 0 e 360 graus: ")
   
//Saída
     mensagem = (`
   ---------------------------------------------
    ${achar_quadrante(ângulo)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function achar_quadrante(ang){
    if(ang === 0 || ang > 0 && ang < 90)
        return `O ângulo digitado esta no 1° quadrante!`
    else if(ang === 90 || ang > 90 && ang < 180)
        return `O ângulo digitado esta no 2° quadrante!`
    else if(ang === 180 || ang > 180 && ang < 270)
        return `O ângulo digitado esta no 3° quadrante!`
    else
        return `O ângulo digitado esta no 4° quadrante!`
}

main()