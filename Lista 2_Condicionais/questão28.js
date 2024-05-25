/*28. Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
não pode ser negativo. */
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Área do Retângulo com coordenadas--------]"
    prompt(mensagem)


//Entrada
   const cord_x1 = numerozin("Digite a coordenada x do primeiro ponto: ") 
   const cord_y1 = numerozin("Digite a coordenada y do primeiro ponto: ") 
   const cord_x2 = numerozin("Digite a coordenada x do segundo ponto: ") 
   const cord_y2 = numerozin("Digite a coordenada y do segundo ponto: ")

//Saída
     mensagem = (`
   ---------------------------------------------
    ${area_retangulo(cord_x1,cord_y1,cord_x2,cord_y2)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function area_retangulo(cord_x1,cord_y1,cord_x2,cord_y2){
    const base = Math.abs(cord_x1 - cord_x2)
    const altura = Math.abs(cord_y1 - cord_y2)
    const area = base * altura

    if(cord_x1 === cord_x2 || cord_y1 === cord_y2){
        return "Os pontos não formam um retângulo!!"}
    
    return `A área do retângulo é equivalente a ${area}`

}


main()