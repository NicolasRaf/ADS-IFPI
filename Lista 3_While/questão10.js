/*10. Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
pode levantar vôo ou não. Considere os seguintes critérios...*/ 
import { get_number_positive,escreva,get_number_positive_zero} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = "\n[---------Liberação de Aeronave---------]\n"
    escreva(mensagem)


//Entrada
    const números_containers =  get_number_positive_zero("Informe o numero de containers: ")
    const peso_container =  get_number_positive("Informe o peso dos containers: ")
    const numero_passageiros = get_number_positive_zero("Informe o numero de passageiros: ")


//Saída    
    const volume_bagagem = bagagem_total(numero_passageiros)
    const peso_bagagem = volume_bagagem * 10
    const peso_passageiros = (numero_passageiros * 70) + (peso_bagagem)
    const peso_carga = números_containers * peso_container
    const peso_combustível = calcular_peso_comb(peso_carga,peso_passageiros)
    const peso_total = peso_combustível + peso_carga + peso_passageiros
    const volume_combustível = calcular_vol_combustível(peso_combustível)

     mensagem = (`
 ========================================================================
  · Quantidade de passageiros: ${numero_passageiros}  
  · Quantidade total de volume bagagem: ${volume_bagagem} Litros ou ${peso_bagagem} Kg
  · Peso dos passageiros: ${peso_passageiros} Kg
  · Peso da carga: ${peso_carga} Kg
  · Peso Total sem Combustível: ${peso_total - peso_combustível} Kg
  · Quantidade possível de combustível: ${volume_combustível.toFixed(2)} Litros ou ${peso_combustível} Kg

   >>>>>>>>${pode_decolar(peso_total,volume_combustível)}<<<<<<<<
 ========================================================================
    `)

    escreva(mensagem)

}

//Processamento
function bagagem_total(numero_passageiros){
    let bilhete = numero_passageiros
    let vol_bagagem = 0

    if(numero_passageiros !== 0)
        escreva("\n==========Checagem de Bilhetes==========")
        escreva("***Digite 0 para Cancelar a operação***\n")
    while(numero_passageiros !== 0){
        bilhete = get_number_positive_zero("Digite o numero do bilhete: ")
        if(bilhete > 0)
            vol_bagagem += get_number_positive_zero("Informe o volume da bagagem: ")
        else
            return escreva("\n!!!Operação Cancelada!!!")
        numero_passageiros--
        if(numero_passageiros !== 0){
        escreva("\n--------Proximo Passageiro--------\n")}
        
    }

    return vol_bagagem
}

function calcular_peso_comb(peso_carga,peso_passageiros){
    const peso_parcial = peso_carga + peso_passageiros
    let peso_final = 0

    if(peso_parcial > 500000)
        return 0
    else
        peso_final = 500000 - peso_parcial

    return peso_final
}

function calcular_vol_combustível(peso_combustível){
    return peso_combustível / 1.5
}

function pode_decolar(peso_total,volume_combustível){
    if(peso_total > 500000 && volume_combustível < 10000)
        return "Decolagem negada por excesso de peso e insuficiência de combustível"

    if(peso_total > 500000)
        return "Decolagem negada por excesso de peso"
    else if(volume_combustível < 10000)
        return "Decolagem negada por insuficiência de combustível"
    else
        return "Decolagem liberada, boa Viagem!"
     
}

main()