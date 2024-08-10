/*20. Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de
600 km. No início da viagem, o carro está com o tanque cheio (50 litros). Durante o percurso foi usado
um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações:*/ 
import {escreva, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-----------Medição de Consumo-----------]\n`
    escreva(mensagem)


//Entrada

//Saída
     mensagem = (`
 ========================================================
 ${chegou_destino()}
 ========================================================
    `)

    escreva(mensagem)

}

//Processamento
function chegou_destino(){
    let dist_percorrida = 0
    let tanque = 50
    let consumo = 0

    escreva(">>>>>>>>>Primeira Aferição<<<<<<<<<")
    while (dist_percorrida < 600 && tanque > 0) {
        const dist_medida = get_number_positive("Qual foi a distancia percorrida desde a ultima medicao: ")
        const litros_consumidos = get_number_positive("Informe a quantidade de litros consumidos nessa distancia: ")

        dist_percorrida += dist_medida
        tanque -= litros_consumidos
        
        if (litros_consumidos > 0) {
            consumo = dist_percorrida / litros_consumidos
            
            if(dist_percorrida < 600)
                escreva(">>>>>>>>>Próxima Aferição<<<<<<<<<")
        }
    }
       return verificar_situação(dist_percorrida, tanque, consumo)

}

function verificar_situação(dist_percorrida, tanque, consumo){
    if(dist_percorrida >= 600){
        return `  O carro chegou ao seu destino (Consumo = ${consumo.toFixed(2)} Km/l)`
    }else if(tanque <= 0){
        return `  O carro parou antes de chegar por falta de combustível. 
   (Consumo = ${consumo.toFixed(2)} Km/l)`
    }
}

main()