import { numerozin, prompt } from "./Funções/io.js"

function main() {
    //Apresentação
    let mensagem = "[-----------Calcular tempo de jogo-----------]"
    prompt(mensagem);

    //Entrada
    const hora_inicio = numerozin("Qual foi a hora de inicio: ")
    const min_inicio = numerozin("Qual foi o minuto de inicio: ")
    const hora_fim = numerozin("Qual foi o horario de termino: ")
    const min_fim = numerozin("Qual foi o minuto de termino: ")

    //Saída
    mensagem = `
   ------------------------------------------------
    ${tempo_jogo(hora_inicio, min_inicio, hora_fim, min_fim)}
   ------------------------------------------------
    `

    prompt(mensagem)
}

//Processamento
function tempo_jogo(hr_i, min_i, hr_f, min_f) {
    if (hr_i === 0) hr_i = 24; //Caso coloque meia noite como 00
    if (hr_f === 0) hr_f = 24; //Caso coloque meia noite como 00

    // Calculando a duração do jogo
    let duracao_hr, duracao_min
    if (hr_i < hr_f || (hr_i === hr_f && min_i <= min_f)) {
        duracao_hr = hr_f - hr_i
        duracao_min = min_f - min_i
    } else {
        duracao_hr = 24 - hr_i + hr_f
        duracao_min = min_f - min_i
    }

    // Corrigindo os minutos negativos
    if (duracao_min < 0) {
        duracao_hr-- //-- retira 1 da variavel após utilizada
        duracao_min += 60
    }

    if (duracao_hr === 24 && duracao_min === 0) {
        return "O tempo de jogo foi de 24 hrs!"
    } else if (duracao_hr >= 24) {
        return "O tempo de jogo ultrapassou o limite de 24 hrs"
    } else {
        return `O tempo de jogo foi de ${duracao_hr} hr e ${duracao_min} min!`
    }
}


main()