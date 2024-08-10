/*18. Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
necessários, para que a população da cidade A ultrapasse a população da cidade B.*/ 
import {escreva, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Crescimento de Cidades------------]\n`
    escreva(mensagem)


//Entrada
   const habitantes_cA = get_number_positive("Digite a populacao inicial da cidade A: ")
   const taxa_cA = get_number_positive("Digite a taxa de crescimento da cidade A: ")
   const habitantes_cB = get_number_positive("Digite a populacao inicial da cidade B: ")
   const taxa_cB = get_number_positive("Digite a taxa de crescimento da cidade B: ")

//Saída
const anos = calcular_habitantes(habitantes_cA,habitantes_cB,taxa_cA,taxa_cB,"anos")
const cidadeA = calcular_habitantes(habitantes_cA,habitantes_cB,taxa_cA,taxa_cB,"cidadeA")
const cidadeB = calcular_habitantes(habitantes_cA,habitantes_cB,taxa_cA,taxa_cB,"cidadeB")
mensagem = (`
==========================================================================================
                Serão necessários ${anos} anos, para a cidade A ultrapassar a B!
----------------------------------------------------------------------------------------
  População final de A: ${cidadeA.toFixed(2)}                População final de B: ${cidadeB.toFixed(2)}
==========================================================================================
    `)

    escreva(mensagem)

}

//Processamento
function calcular_habitantes(habitantesA,habitantesB,taxa_A,taxa_B,escolha){
    let cidadeA = habitantesA
    let cidadeB = habitantesB
    let anos = 0

    while(cidadeA < cidadeB){
        cidadeA += (taxa_A/100) * cidadeA
        cidadeB += (taxa_B/100) * cidadeB
        anos++
    }
    if(escolha === "anos")
        return anos
    if(escolha === "cidadeA")
        return cidadeA
    if(escolha === "cidadeB")
        return cidadeB
}
    
main()