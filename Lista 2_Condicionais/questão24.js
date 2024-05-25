/*24. Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
coeficiente A deve ser diferente de 0 (zero)*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = `[----------Equação de 2° grau----------]`
    prompt(mensagem)

//Entrada
    const coefi_A = numerozin("Digite o valor do coeficiente A: ")
    if(coefi_A === 0)
        return [prompt(`
    O coeficiente "A" não pode ser 0`), main()]        
    const coefi_B = numerozin("Digite o valor do coeficiente B: ")
    const coefi_C = numerozin("Digite o valor do coeficiente C: ")

//Saída
     mensagem = (`
   ----------------------------------------------------
    ${calcular_equação(coefi_A,coefi_B,coefi_C)}
   ----------------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento 
function calcular_equação(cA,cB,cC){
    const delta = descriminante(cA,cB,cC)
    if(delta < 0)
        return `A equação não possui raizes reais(Delta < 0)`

    const delta_positovo = Math.sqrt(delta)
    const raiz1 = (-cB + delta_positovo)/(2*cA)
    const raiz2 = (-cB - delta_positovo)/(2*cA)
    
    
    if(delta_positovo === 0)
        return `A quação possui somente uma raiz equivale a ${raiz1}`
    else
        return `A primeira raiz equivale a ${raiz1} e a segunda a ${raiz2}`

}

function descriminante(cA, cB, cC) {
    const delta = (cB ** 2) - (4 * cA * cC)
    return delta
}

main()