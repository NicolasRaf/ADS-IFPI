import { question } from "readline-sync";

export function  get_number(pergunta){
    const numero = Number(question(pergunta))

    return numero
}

export function get_number_positive(pergunta){
    const numero = get_number(pergunta)
  
    if (numero <= 0){
      escreva('!!!Digite um valor valido!!!\n')
      return get_number_positive(pergunta)
    }
    return numero
}

export function get_number_positive_zero(pergunta){
    const numero = get_number(pergunta)
  
    if (numero < 0){
      escreva('!!!Digite um valor valido!!!\n')
      return get_number_positive(pergunta)
    }
    
    return numero
}

export function get_number_in_range(mensagem, min, max){
    const numero = get_number(mensagem)
    
    if (numero < min || numero > max){
      escreva('Número inválido! Digite novamente\n')
      return get_number_in_range(mensagem, min, max)
    }
    return numero
}

export function escreva(mensagem){
    console.log(mensagem)
}

export function pergunta(texto){
    const per  = question(texto) 

    return per
}

