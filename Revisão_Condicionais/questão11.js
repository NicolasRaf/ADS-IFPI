/*11. Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do
número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
o 326 = 3 centenas, 2 dezenas e 6 unidades
o 12 = 1 dezena e 2 unidades*/
import { numerozin, escreva, pergunta } from "./Funções/io.js"

function main() {
//Apresentação
    let mensagem = "[---------Quantificador de Algarismos---------]"
    escreva(mensagem)

//Entrada
    const numero = Math.abs(numerozin("Digite um numero menor que 1000: "))
    
    if(eh_valido(numero) === false)
        return escreva(`
    Por favor escreva um numero com 3 algarismos!!!`)

//Saída

    mensagem = (`
  ------------------------------------------------------
    O numero possui ${quantidade_algarismos(numero)}
  ------------------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function eh_valido(num){
    return num/1000 < 1

}

function quantidade_algarismos(num) {
    //Separa os algarismos
    const centena = Math.floor(num / 100)
    const dezena = Math.floor(num % 100 / 10)
    const unidade = (num % 100) % 10
    let resultado = ``

    //Adiciona a centena ao resultado, se ela for maior que 1 ou 0 vai no plural, se for 1 é adicionada no singular
    if (centena > 1 || centena === 0) {
        resultado += `${centena} centenas, `
    } else {
        (centena === 1)
        resultado += `${centena} centena, `
    }

    //Adiciona a dezena ao resultado, se ela for maior que 1 ou 0 vai no plural, se for 1 é adicionada no singular
    if (dezena > 1 || dezena === 0) {
        resultado += `${dezena} dezenas, `
    } else {
        (dezena === 1)
        resultado += `${dezena} dezena, `
    }

    //Adiciona a unidade ao resultado, se ela for maior que 1 ou 0 vai no plural, se for 1 é adicionada no singular
    if (unidade > 1 || unidade === 0) {
        resultado += `${unidade} unidades. `
    } else {
        (unidade === 1)
        resultado += `${unidade} unidade. `
    }

    return resultado

}


main()