/*21. Calcule e escreva o valor de S. (S = 1/1 + 3/2 + 5/3 + ... + 99/50)*/ 
import {escreva,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Calcular Expressão 5------------]\n`
        escreva(mensagem)


    //Entrada
        

    //Saída
        mensagem = (`
    ============================
        O valor de S é ${calcular_Formula().toFixed(2)}
    ============================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function calcular_Formula () {
    let resultado = 0 
    let denominador = 1
    
  for (let numerador = 1;numerador < 99;denominador++) {
   resultado += numerador/denominador
   numerador += 2
  }
  
  return resultado     
}

main()