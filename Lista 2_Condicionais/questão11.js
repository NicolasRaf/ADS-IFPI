/*11. Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Selecionador de opção--------]"
    prompt(mensagem)


//Entrada

    const opção = numerozin("Escolha uma opcao(1, 2 ou 3): ")
    //Verificação da opção
    if(cancelar(opção)){
        prompt (`
        Escolha uma opção valida!!
        `) 
        return main()
}
    const num1 = numerozin("Digite o primeiro numero: ")
    const num2 = numerozin("Digite o segundo numero: ")
    const num3 = numerozin("Digite o terceiro numero: ")


//Saída
     mensagem = (`
   ---------------------------------------------
      ${igualdade_opção(opção,num1,num2,num3)} 
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Cancelar caso opção for invaldia
function cancelar(opção){
   return (opção > 3 || opção < 1) 
    
}

//Processamento
function igualdade_opção(op,num1,num2,num3){
    if(op === 1)
        return `O resultado com a opção escolhida é ${num1}`
    else if(op === 2)
        return `O resultado com a opção escolhida é ${num2}`
    return `O resultado com a opção escolhida é ${num3}` 

}


main()