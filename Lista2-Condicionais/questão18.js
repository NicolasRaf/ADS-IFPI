/*18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = `[--------Calculadora--------]
Opção 1: Adição
Opção 2: Subtração(Em modulo)
Opção 3: Multiplicação
Opção 4: Divisão
`
    prompt(mensagem)

//Entrada
    const opcão = numerozin("Selecione uma operacao: ")
    if(cancelar(opcão))//Verificação da opção
        return prompt(`Selecione uma opção valida!!`)
    
    const numero1 = numerozin("Qual o primeiro valor: ")  
    const numero2 = numerozin("Qual o segundo valor: ")  

//Saída
     mensagem = (`
   ---------------------------------------------
    O resultado da operação escolhida é ${operação(opcão,numero1,numero2)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento

function operação(opcão,num1,num2){
    if(opcão === 1)
        return num1 + num2
    else if(opcão === 2)
        return Math.abs(num1 - num2)
    else if(opcão === 3)
        return num1 * num2
    else(opcão === 4)
        return [(num1/num2).toFixed(2)]
    
}

function cancelar(op){
    if(op === 1 || op === 2 || op === 3 || op === 4)
        return false
    else 
        return true
}

main()