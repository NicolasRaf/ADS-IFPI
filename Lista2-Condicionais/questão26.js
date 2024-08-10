/*26. Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Hipotenusa e Catetos--------]"
    prompt(mensagem)


//Entrada
    const lado1 = numerozin("Digite o tamanho do primeiro lado: ")
    const lado2 = numerozin("Digite o tamanho do segundo lado: ")
    const lado3 = numerozin("Digite o tamanho do terceiro lado: ")
    if(condição_existencia(lado1,lado2,lado3) === false)
        return prompt(`
    Os valores não formam um triangulo!!!`)
    if(eh_retangulo(lado1,lado2,lado3) === false)
        return prompt(`
    Os valores não formam um triangulo retângulo!!!`)
    


//Saída
     mensagem = (`
   ---------------------------------------------
    ${conferir_hipotenusa(lado1,lado2,lado3)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function condição_existencia(L1,L2,L3){
    return L1+L2 > L3 && L1+L3 > L2 && L2+L3 > L1

}

function eh_retangulo(L1,L2,L3){
 return L1**2 + L2**2 === L3**2 || L2**2 + L3**2 === L1**2  || L3**2 + L1**2 === L2**2 

}


function conferir_hipotenusa(l1,l2,l3){
    if(l1 > l2 && l1 > l3 )
        return `A hipotenusa é ${l1} e os catetos são ${l2} e ${l3}`
    else if(l2 > l3)
        return `A hipotenusa é ${l2} e os catetos são ${l1} e ${l3}`
    else
        return `A hipotenusa é ${l3} e os catetos são ${l1} e ${l2}`

}


main()