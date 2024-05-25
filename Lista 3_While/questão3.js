/*3. Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum)
 entre os números lidos.*/ 
import { get_number_positive_zero,escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = "[--------M.D.C--------]"
    escreva(mensagem)

//Entrada
    const numero1 = get_number_positive_zero("Digite o primeiro numero: ")
    const numero2 = get_number_positive_zero("Digite o segundo numero: ")

//Saída
     mensagem = (`
   ==========================================
            O MDC de ${numero1} e ${numero2} é ${fazer_mdc(numero1,numero2)}
   ==========================================
    `)

    escreva(mensagem)

}

//Processamento

function fazer_mdc(numero1,numero2){
    let maior = 0
    let menor = 0
    let resto = 0  

    if(numero1 > numero2){
        maior = numero1  
        menor = numero2
    }else{
        maior = numero2
        menor = numero1
    }

    if(maior/menor === 0)
        return menor 

    while(menor !== 0){
        resto = maior % menor
        maior = menor
        menor = resto 
    }

    return maior
}


main()