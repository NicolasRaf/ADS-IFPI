/*3. Leia  as  variáveis  A0,  Limite  e  R  e  escreva  os  valores  menores  que  Limite  gerados  pela  Progressão 
Aritmética que tem por valor inicial A0 e razão R*/ 
import {escreva, get_number, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[--------------Progressão Aritmética com Limite--------------]\n`
    escreva(mensagem)


//Entrada
    const razão = get_number("Digite a razao da PA: ")
    const termo1 = get_number("Digite o primeiro termo: ")
    const num_termos = get_number_positive("Quantos termos tem a PA: ")
    const limite = get_number_positive("Digite o numero limite da PA: ")

//Saída
     mensagem = (`
 ================= P.A Limitada a ${limite} ==================
  P.A = ${calcular_PA(razão,termo1,num_termos,limite)}
 =====================================================
    `)

    escreva(mensagem)

}

//Processamento
function calcular_PA(razão,termo1,num_termos,limite){
    let guardar_termos = ""
    let termos_gerados = 0
    let termo_atual = termo1
    let ultimo_termo = 0

    while(termos_gerados !== num_termos){
        termos_gerados++

        if(termos_gerados === 1 && termo_atual < limite){
            guardar_termos += termo_atual
        }else if(termo_atual < limite){
            guardar_termos += "," + termo_atual
        }

        termo_atual = termo_atual + razão

        if(termos_gerados === num_termos - 1)
            ultimo_termo = termo_atual
    }
    
    if(limite < termo1)
        return "A PA não possui termos menores que o limite!"

    if(limite > ultimo_termo)
        return `{${guardar_termos}}` + `\n  ==> A P.A não possui termos maiores que ${limite}`
            
        return `{${guardar_termos}}`
}



main()