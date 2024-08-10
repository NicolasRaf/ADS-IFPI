/*13. Leia N e uma lista de N números e escreva o maior número da lista. */ 
import {escreva, get_number} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Localizar Maior Número------------]\n`
  escreva(mensagem)

//Entrada
    const limite = get_number("Informe o tamanho da lista: ")

//Saída
     mensagem = (`
 ===========================================
   O maior numero entre os listados é ${achar_maior(limite)}
 ===========================================
  `)

  escreva(mensagem)
}

//Processamento
function achar_maior(limite){
    let numero = 0
    let contador = 1
    let maior = get_number("Digite o primeiro numero : ")


while(contador < limite){
    contador++
    numero = get_number("Digite outro numero : ")

    if(numero > maior){
        maior = numero
      }
    }

    return maior   
}

main()