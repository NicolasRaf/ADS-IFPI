/*13. Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são
diferentes.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Maior e menor--------]"
    prompt(mensagem)


//Entrada
    const numero1 = numerozin("Digite o primeiro valor inteiro: ")
    const numero2 = numerozin("Digite o segundo valor inteiro: ")
    const numero3 = numerozin("Digite o terceiro valor inteiro: ")
    const numero4 = numerozin("Digite o quarto valor inteiro: ")
    const numero5 = numerozin("Digite o quinto valor inteiro: ")
    if(numero_diferentes(numero1,numero2,numero3,numero4,numero5))
        return main()
           
//Saída
     mensagem = (`
   ---------------------------------------------
    ${maior_menor(numero1,numero2,numero3,numero4,numero5)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function maior_menor(num1,num2,num3,num4,num5){
    let maior = num1;
    if (num2 > maior) maior = num2
    if (num3 > maior) maior = num3
    if (num4 > maior) maior = num4
    if (num5 > maior) maior = num5

    let menor = num1;
    if (num2 < menor) menor = num2
    if (num3 < menor) menor = num3
    if (num4 < menor) menor = num4
    if (num5 < menor) menor = num5

    return `    O maior valor é ${maior} e o menor é ${menor}`
   
}


function numero_diferentes(num1,num2,num3,num4,num5){
    //Verifica a se há igualdade entre algum numero
    if(num1 === num2 || num1 === num3 || num1 === num4 || num1 === num5)
        return [prompt(`
    Digite valores diferentes entre si!!! 
    `)]  //Espaço para ficar visualmente melhor no terminal
                                     
    else if(num2 === num3 || num2 === num4 || num2 === num5)
        return [prompt(`
    Digite valores diferentes entre si!!!
    `)] //Espaço para ficar visualmente melhor no terminal

    else if(num3 === num4 || num3 === num5)
        return [prompt(`
    Digite valores diferentes entre si!!!
    `)] //Espaço para ficar visualmente melhor no terminal

    else if(num4 === num5)    
        return [prompt(`
    Digite valores diferentes entre si!!!
    `)] //Espaço para ficar visualmente melhor no terminal
}

main()
