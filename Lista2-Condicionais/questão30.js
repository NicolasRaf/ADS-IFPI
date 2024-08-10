/*30. Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos 
o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo 
milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste 
terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.*/ 
/*30. Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos 
o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo 
milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste 
terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.*/ 
import { numerozin,prompt } from "./Funções/io.js"

function main(){

//Apresentação
    let mensagem = `[-----------Verificar numero com a regra-------------]
Exemplo da regra:
2025 -> dividindo: 20 e 25 -> somando temos 45 -> 45^2 = 2025  
`

    prompt(mensagem)
    
//Entrada
  const numero = numerozin("Digite um numero de 4 digitos: ")

if(eh_valido(numero))
     return prompt(`
     Digite um numero de 4 digitos!!!
     `)
     
     
//Saída
     mensagem = (`
   ---------------------------------------------
    ${verificar_regra(numero)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento

function verificar_regra(numero){
    const dezena1 = Math.trunc(numero/100)
    const dezena2 = numero % 1000
  
  if(numero === (dezena1+dezena2)**2)
     return `     O numero ${numero} segue a regra!`
  else
     return `     O numero ${numero} não segue a regra!`
}

function eh_valido(numero){
  const verificacão = numero/1000
  return verificacão < 1
}

main()