/*21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
contrario, é arredondado para o inteiro imediatamente inferior.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Arredondamento Padrão--------]"
    prompt(mensagem)


//Entrada
    const numero = numerozin("Digite um numero fracionario: ")

//Saída
     mensagem = (`
   ---------------------------------------------
   O numero digitado arredondado é igual a ${arredondamento(numero)}
   ---------------------------------------------
    `) //Um Math.round(numero) aqui resolveria :)

    prompt(mensagem)

}

//Processamento
function arredondamento(num){
    const parte_inteira = Math.trunc(num)
    const parte_fracionaria = Math.abs(num - parte_inteira)
    const complemento = (Math.ceil(num)) - num 

    if(parte_fracionaria >= 0.5)
        return [num + complemento]
    else
        return [num - parte_fracionaria]


}


main()