/*6. Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e
escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.*/
import { numerozin, escreva, pergunta } from "./Funções/io.js"

function main() {
//Apresentação
    let mensagem = `[--------Recepção de Turno--------]
M = matutino
V = vespertino
N = noturno
    `
    escreva(mensagem)

//Entrada
    const nome = pergunta("Qual o seu nome: ")
    const turno = pergunta("Qual seu turno: ")

    if (eh_valido(turno) === false)
        return escreva(`
    !!!Digite um turno válido!!!`) /*Vefirica se a opção esta entre as validas 
                                            aceitando maisculas e minusculas*/

//Saída
    mensagem = (`
   ---------------------------------
    ${conferir_turno(turno, nome)}
   ---------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function eh_valido(tur) {
    return tur === "M" || tur === "m" || tur === "V" || tur === "v" || tur === "N" || tur === "n"
}

function conferir_turno(turno, nome) {
    if (turno === "M" || turno === "m")
        return `     Bom dia, ${nome}!`
    else if (turno === "V" || turno === "v")
        return `     Boa tarde, ${nome}!`
    else (turno === "N" || turno === "n")
    return `     Boa noite, ${nome}!`

}

main()