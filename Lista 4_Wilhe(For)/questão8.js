/*8. Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.*/ 
import {escreva, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[---------Múltiplos Delimitados---------]\n`
    escreva(mensagem)


//Entrada
    const numero = get_number_positive("Digite um numero: ")
    const limite_superior = get_number_positive("Digite o Limite Superior: ")
    const limite_inferior = get_number_positive("Digite o Limite Inferior: ")



//Saída
     mensagem = (`
 =========================================================
  Os Múltiplos de ${numero} entre ${limite_inferior} e ${limite_superior} são:
  ==> ${achar_multipos(numero,limite_superior,limite_inferior)}
 =========================================================
    `)

    escreva(mensagem)

}

//Processamento
function achar_multipos(numero,ls,li){
    let contador = 1
    let multiplos = ""

    while(contador * numero < ls){
    if(contador === 1 && contador * numero > li)
        multiplos += contador * numero

    if(contador !== 1 && contador * numero > li)
        multiplos += "," + contador * numero

    contador++
    }

    return multiplos
}

main()