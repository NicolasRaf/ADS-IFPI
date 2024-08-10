/*17. Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
escreva o quadrado dos números lidos.*/
import { numerozin, prompt } from "./Funções/io.js"


function main() {
    //Apresentação
    let mensagem = `[--------Opções conforme o resto--------]
Resto 1: Soma o resto da divisão.
Resto 2: Pares ou ímpares.
Resto 3: Produto da soma pelo primeiro.
Resto 4: divisão da soma pelo segundo(2° > 0).
    
    `
    prompt(mensagem)


    //Entrada
    const numero1 = numerozin("Digite o primeiro valor inteiro: ")
    const numero2 = numerozin("Digite o segundo valor inteiro: ")

    //Saída
    mensagem = (`
   ---------------------------------------------
    ${casos_resto(numero1, numero2)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function casos_resto(num1, num2) {
    const resto = num1 % num2
    const soma = num1 + num2
    if (resto === 1) {
        prompt(`
        O resto da divisão entre os numeros foi 1`)
        return `  A soma entre os valores é igual a ${soma} `

    } if (resto === 2) {
        prompt(`
        O resto da divisão entre os numeros foi 2`)
        return impar_par(num1, num2)

    } if (resto === 3) {
        prompt(`
        O resto da divisão entre os numeros foi 3`)
        return produto_soma(num1, soma)

    } if (resto === 4 && num2 != 0) {
        prompt(`
        O resto da divisão entre os numeros foi 4`)
        return divisão_soma(soma, num2)
    }

    prompt(`
        Nenhum caso predefinido ocorreu!`)

    return `    O quadrado do primeiro valor é ${[num1 ** 2]}
        O quadrado do segundo valor é ${[num2 ** 2]} `


}

function impar_par(num1, num2) {
    if (num1 % 2 === 0)
        num1 += " é Par"
    else
        num1 += " é Impar"

    if (num2 % 2 === 0)
        num2 += " é Par"
    else
        num2 += " é Impar"

    return `       O ${num1} e o ${num2}`

}

function produto_soma(num1, soma) {
    const valor_produto = num1 * soma
    return `   O produto entre a soma é igual a ${valor_produto.toFixed(1)} `
}

function divisão_soma(soma, num2) {
    const valor_divisão = soma / num2
    return `   A divisão entre a soma é igual a ${valor_divisão.toFixed(2)}`



}
main()