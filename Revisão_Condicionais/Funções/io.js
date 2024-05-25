import { question } from "readline-sync";

export function  numerozin(pergunta){
    const numero = Number(question(pergunta))

    return numero
}

export function escreva(mensagem){
    console.log(mensagem)
}


export function pergunta(texto){
    const per  = question(texto) 

    return per
}

