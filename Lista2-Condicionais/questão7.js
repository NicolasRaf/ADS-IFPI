/*7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero)*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[-----------Classificação do triangulo quanto ao lado-----------]"
    prompt(mensagem)


//Entrada  
const lado1 = numerozin("Qual o primeiro lado(L > 0): ") 
const lado2 = numerozin("Qual o segundo lado(L > 0): ")
const lado3 = numerozin("Qual o terceiro lado(L > 0): ")

//Saída
mensagem = (`
------------------------------------------------
  ${condição_existencia(lado1,lado2,lado3)}
------------------------------------------------
 `)

 prompt(mensagem)

}

//Processamento
function condição_existencia(L1,L2,L3){
 if(L1+L2 > L3 && L1+L3 > L2 && L2+L3 > L1)
     return `Os lados formam um triângulo ${classificação(L1,L2,L3)}`
 else
     return `    Os lados não formam um triângulo`
}

function classificação(L1,L2,L3){
 if (L1 === L2 && L2 === L3)
     return 'Equilatero!'
   else if (L1 === L2 || L1 === L3 || L2 === L3)
     return 'Isósceles!'
   else
     return 'Escaleno!'
}

main()