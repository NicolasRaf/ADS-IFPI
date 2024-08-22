import { question } from "readline-sync";

// Pergunta algo ao usuário e recebe uma string
export function ask(text) {
  const answer = question(text);
  
  return answer;
}

export function aksLetter(text){
  const answer = ask(text);
  const ASCII = answer.charCodeAt(0);

  if (answer.length > 1){
    console.log("\nDigite apenas um caractere!\n");
    return aksLetter(text);
  } else if (ASCII < 65 || ASCII > 90 && ASCII < 97 || ASCII > 122 || answer === ""){
    console.log("\nDigite somente letras!\n");
    return aksLetter(text);
  }

  return answer;
}

// Função para obter um número do usuário
export function getNumber(prompt) {
  let input = question(prompt); 

  // Verifica se a entrada contém apenas dígitos e opcionalmente um sinal de menos no início
  for (let char of input) {
    let charCode = char.charCodeAt(0);

    // Permite um sinal de menos no início
    if (charCode === 45 && char === input[0]) {
      continue;
    }

    // Verifica se o caractere está fora do intervalo de dígitos
    if (charCode < 48 || charCode > 57) {
      console.log("\nDigite somente números!\n");
      return getNumber(prompt); // Solicita novamente se a entrada for inválida
    }
  }

  // Converte a entrada para número e retorna
  return Number(input);
}

// Recebe um numero positivo com base na pergunta enviada ao usuário
export function getNumberPositive(text){
    const number = getNumber(text);
  
    if (number <= 0){
      console.log('!!!Digite um valor valido!!!\n');
      return getNumberPositive(text);
    }
    return number;
}

// Recebe um numero positivo com zero incluso com base na pergunta enviada ao usuário
export function getNumberPositiveZero(text){
    const number = getNumber(text);
  
    if (number < 0){
      console.log('!!!Digite um valor valido!!!\n');
      return getNumberPositive(text);
    }
    
    return number;
}

// Recebe um numero delimitado ao limite recebido nos parâmetros com base na pergunta enviada ao usuário
export function getNumberInRange(message, min, max,text){
    const number = getNumber(message);
    
    if (number < min || number > max){
      console.log(text);
      return getNumberInRange(message, min, max,text);
    }
    return number;
}

export function getNumberInRangeZero(message, min, max,text){
  const number = getNumber(message);
  
  if (number != 0){
    if (number < min || number > max){
      console.log(text);
      return getNumberInRange(message, min, max,text);
    }
    return number;
  }
}

export function getNumberVector(vector,text){
  let number = getNumber(text);

  for (let i of vector){
    if (number === Number(i)){
      return number;
      
    }
  }
  console.log("\n!Digite um valor valido!\n");
  return getNumberVector(vector,text);
}