/*Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
seja utilizado.*/ 
import { get_number,escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-----------Multiplicação Sem Operador-----------]\n`
    escreva(mensagem)


//Entrada
   const numero1 = get_number("Digite o primeiro numero: ")
   const numero2 = get_number("Digite o segundo numero: ")

//Saída
     mensagem = (`
 ==================================================
    O produto entre ${numero1} e ${numero2} equivale a ${fazer_multiplicação(numero1,numero2)}
 ==================================================
    `)

    escreva(mensagem)

}

//Processamento
function fazer_multiplicação(num1,num2){
    let numero_multiplicações = Math.abs(num1)
    let resultado = 0

    while(numero_multiplicações > 0){
    resultado += num2
    numero_multiplicações--
}
    if(num1 < 0 && resultado > 0)
        return resultado = "-" + resultado
    
    if(num1 < 0 && num2 < 0)
        return resultado = Math.abs(resultado) 

    return resultado
}

main()