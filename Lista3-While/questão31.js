/*31. Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em
numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação
de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).*/ 
import {escreva, get_number_in_range} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-----------Conversor para Numero Romanos-----------]\n`
    escreva(mensagem)


//Entrada
   let numero = get_number_in_range("Digite um numero de ate 3 digitos: ",1,999)

//Saída
     mensagem = (`
 ======================================================
  O numero ${numero} em numeração Romana equivale a ${converter_romano(numero)}
 ======================================================
    `)

    escreva(mensagem)

}

//Processamento
function converter_romano(num){
    let centena = Math.floor(num/100) * 100
    let dezena = Math.floor(num%100/10) * 10
    let unidade = (num%100)%10
    let numero_romano = ""
    let centena_romana = ""
    let dezena_romana = ""
    let unidade_romana = ""

    // Definindo as "Centenas" do numero romano
    while(centena >= 100){
        if(centena >= 900){
            centena_romana += "CM"
            centena -= 900
        }else if(centena >= 500){
            centena_romana += "D"
            centena -= 500
        }else if(centena >= 400){
            centena_romana += "CD"
            centena -= 400
        }else{
            centena_romana += "C"
            centena -= 100
        }
    }

// Definindo as "Dezenas" do numero romano
    while(dezena >= 10){
        if(dezena >= 90){
            dezena_romana += "XC"
            dezena -= 90
        }else if(dezena >= 50){
            dezena_romana += "L"
            dezena -= 50
        }else if(dezena >= 40){
            dezena_romana += "XL"
            dezena -= 40
        }else{
            dezena_romana += "X"
            dezena -= 10
        }
    }

// Definindo as "Unidades" do numero romano
    while(unidade >= 1){
        if(unidade >= 9){
            unidade_romana += "IX"
            unidade -= 9
        }else if (unidade >= 5){
            unidade_romana += "V"
            unidade -= 5
        }else if (unidade >= 4){
            unidade_romana += "IV"
            unidade -= 4
        }else{
            unidade_romana += "I"
            unidade -= 1
        }
    }

 numero_romano = centena_romana + dezena_romana + unidade_romana

 return numero_romano
}


main()