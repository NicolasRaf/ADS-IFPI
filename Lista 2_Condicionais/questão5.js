/*5. Leia 3 (três) números e escreva-os em ordem crescente.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Ordem Crescente--------]"
    prompt(mensagem)


//Entrada 
    const num1 = numerozin("Qual o primeiro numero: ") 
    const num2 = numerozin("Qual o segundo numero: ")
    const num3 = numerozin("Qual o terceiro numero: ")

//Saída
     mensagem = (`
   -----------------------------------------------------
    ${crescente(num1,num2,num3)}
   -----------------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function crescente(numero1,numero2,numero3){
    if (numero1 === numero2 && numero2 === numero3) {
        return "Por favor digite 3 números diferentes!";
    } else {
        if (numero1 > numero2) {
            [numero1, numero2] = [numero2, numero1]
        }
        if (numero1 > numero3) {
            [numero1, numero3] = [numero3, numero1]
        }
        if (numero2 > numero3) {
            [numero2, numero3] = [numero3, numero2]
        }
        return `Os numeros digitados em ordem crescente: ${numero1}, ${numero2}, ${numero3}`;
    }
}


main()