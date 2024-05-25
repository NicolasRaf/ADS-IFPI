/*13. Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a) "Telefonou para a vitima ?"
b) "Esteve no local do crime ?"
c) "Mora perto da vitima ?"
d) "Devia para a vitima ?"
e) "Já trabalhou com a vitima ?"
O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa
responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como
"Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".*/
import { numerozin, escreva, pergunta } from "./Funções/io.js"

function main() {
    //Apresentação
    let mensagem = "[---------Classificar Crime---------]"
    escreva(mensagem)


    //Entrada
    const pergunta1 = pergunta("Telefonou para a vitima?\n")
    const pergunta2 = pergunta("Esteve no local do crime?\n")
    const pergunta3 = pergunta("Mora perto da vitima?\n")
    const pergunta4 = pergunta("Devia para a vitima?\n")
    const pergunta5 = pergunta("Ja trabalhou com a vitima?\n")

    //Saída
    mensagem = (`
   -----------------------------------------------
    ${verificar_caso(pergunta1, pergunta2, pergunta3, pergunta4, pergunta5)}
   -----------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function verificar_caso(p1, p2, p3, p4, p5) {
    let perguntas_afirmativas = 0

    //Adicinar 1 ao numero de pergunta afirmativas a cada pergunta igual a sim
    if (p1 === "Sim" || p1 === "sim" || p1 === "s")
        perguntas_afirmativas += 1
    if (p2 === "Sim" || p2 === "sim" || p2 === "s")
        perguntas_afirmativas += 1
    if (p3 === "Sim" || p3 === "sim" || p3 === "s")
        perguntas_afirmativas += 1
    if (p4 === "Sim" || p4 === "sim" || p4 === "s")
        perguntas_afirmativas += 1
    if (p5 === "Sim" || p5 === "sim" || p5 === "s")
        perguntas_afirmativas += 1

    //Compara o total de perguntas afirmativas aos criterios da questão
    if (perguntas_afirmativas === 5)
        return "    Você foi classificado como Assasino!"
    else if (perguntas_afirmativas === 3 || perguntas_afirmativas === 4)
        return "    Você foi classificado como Cumplice!"
    else if (perguntas_afirmativas === 2)
        return "    Você foi classificado como Suspeito!"
    else
        return "    Você foi classificado como Inocente!"

}


main()