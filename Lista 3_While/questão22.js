/*22. Leia 2 números inteiros e escreva o quociente e o resto da divisão dos mesmos, sem que os operadores
de divisão (/ e %) sejam utilizados.*/ 
import { get_number,escreva} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-----------Divisão Sem Operador-----------]\n`
    escreva(mensagem)


//Entrada
   let numero1 = get_number("Digite o dividendo: ")
   let numero2 = get_number("Digite o divisor: ")

    if(numero2 === 0){
        escreva("!!!Não é possível dividir por 0!!!\n")
        numero2 = get_number("Digite um divisor valido: ")
    }
//Saída
    const quociente = fazer_divisão(numero1,numero2,"quociente")
    const resto = fazer_divisão(numero1,numero2,"resto")

     mensagem = (`
 ==================================================
    A divisão entre ${numero1} e ${numero2} equivale a:
    · Quociente: ${quociente}
    · Resto: ${resto}
 ==================================================
    `)

    escreva(mensagem)

}

//Processamento
function fazer_divisão(num1,num2,escolha){
    let alcançar = 0
    let quociente = 0
    let resto = 0
    let dividendo = Math.abs(num1)
    let divisor = Math.abs(num2)

    while(divisor * quociente <= dividendo){
        quociente++
        alcançar += num2
    }
        if(alcançar > num1)
            alcançar = num1
            quociente--

    resto = Math.abs((quociente * divisor) - dividendo)

    if(num1 < 0 && num2 > 0 || num2 < 0 && num1 > 0){
        quociente *= -1
        resto *= -1
    }
    if(escolha === "quociente")
        return quociente
    if(escolha === "resto")
        return resto
}

main()