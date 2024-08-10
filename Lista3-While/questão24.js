/*24. Escreva um algoritmo que leia a razão de uma PA (Progressão Aritmética) e o seu primeiro termo e
escreva os N termos da PA. Ler o valor de N.*/ 
import { get_number,escreva, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[-----------Progressão Aritmética(PA)-----------]\n`
    escreva(mensagem)


//Entrada
    const razão = get_number("Digite o valor da razao: ")
    const termo1 = get_number("Digite o primeiro termo da PA: ")
    const num_termos = get_number_positive("Quantos termos tem a PA: ")

//Saída
     mensagem = (`
 ====================RESULTADO=====================
  PA = {${calcular_PG(razão,termo1,num_termos)}}
 ==================================================
    `)

    escreva(mensagem)

}

//Processamento
function calcular_PG(razão,termo1,num_termos){
    let guardar_termos = ""
    let termos_gerados = 0
    let termo_atual = termo1

    while(termos_gerados !== num_termos){
        termos_gerados++

        if(termos_gerados === 1){
            guardar_termos += termo_atual
        }else{
            guardar_termos += "," + termo_atual
        }

        termo_atual = termo_atual + razão
    }

        return guardar_termos
}

main()