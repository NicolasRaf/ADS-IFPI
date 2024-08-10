/* 6. Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90º), retângulo (1 ângulo = 90º) ou
obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau). */ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[------------Condição de existência e classificação do triangulo-------------]"
    prompt(mensagem)

//Entrada 
    const angulo1 = numerozin("Qual o primeiro angulo(ang > 0): ") 
    const angulo2 = numerozin("Qual o segundo angulo(ang > 0): ")
    const angulo3 = numerozin("Qual o terceiro angulo(ang > 0): ")

//Saída
     mensagem = (`
   ------------------------------------------------
     ${condição_existencia(angulo1,angulo2,angulo3)}
   ------------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function condição_existencia(ang1,ang2,ang3){
    if(ang1+ang2+ang3 === 180 && ang1 != 0 && ang2 != 0 && ang3 != 0)
        return `Os ângulos formam um triângulo ${classificação(ang1,ang2,ang3)}`
    else
        return `    Os ângulos não formam um triângulo`
}

function classificação(ang1,ang2,ang3){
    if (ang1 < 90 && ang2 < 90 && ang3 < 90){
        return 'Acutângulo!'
      }else if (ang1 === 90 || ang2 === 90 || ang3 === 90){
        return 'Retângulo!'
      }else
        return 'Obtusângulo!'
}

main()