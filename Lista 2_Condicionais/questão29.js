/*29. Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas 
formadas pelos seus dois primeiros e dois últimos dígitos.
Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito. */
import { numerozin,prompt } from "./Funções/io.js"

function main(){
    //Apresentação
    let mensagem = "[----------Quadrado Perfeito----------]"
    prompt(mensagem)
        
//Entrada
    const numero = numerozin("Digite um numero de 4 digitos: ")
      
    if(eh_valido(numero))
        return prompt(`
         Digite um numero de 4 digitos!!!
         `)
       
//Saída
    mensagem = (`
    ------------------------------------------------
     ${eh_perfeito(numero)}
    -----------------------------------------------
        `)
    
    prompt(mensagem)
    
    }
    
//Processamento
function eh_perfeito(numero){
    const dezena1 = Math.trunc(numero/100)
    const dezena2 = numero % 100
       
    if(Math.sqrt(numero) === (dezena1+dezena2))
        return `O numero é um quadrado perfeito!(Raiz = ${dezena1 + dezena2})  `
    else
        return '    O numero não é um quadrado perfeito!'
      
    }
    
    function eh_valido(numero){
      const verificacão = numero/1000
      
      return verificacão < 1
      
    }
    
 
    
   

main()