/*14. Leia  N,  calcule  e  escreva  o  maior  quadrado  menor  ou  igual  a  N.  Por  exemplo,  se  N  for  igual  a  38,  o 
maior quadrado menor que 38 é 36 (quadrado de 6). */ 
import {escreva, get_number, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Quadrado mais Proximo------------]\n`
  escreva(mensagem)

//Entrada
    const numero = get_number_positive("Digite um numero: ")

//Saída
     mensagem = (`
 =============================================
   O menor quadrado mais proximo de ${numero} é ${achar_quadrado(numero)}
 =============================================
  `)

  escreva(mensagem)
}

//Processamento
function achar_quadrado(num){
    let num_quad = Math.sqrt(num)
    let num_int =  Math.floor(num_quad)
    let num_dec = Math.abs(num_quad - num_int)

    while(num_dec !== 0){
    num--
    num_quad = Math.sqrt(num)
    num_int = Math.floor(num_quad)
    num_dec = Math.abs(num_quad - num_int)
        
    }

    return num 
}

main()