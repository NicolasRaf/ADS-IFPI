/*Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos. 
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:s*/ 
import {escreva,get_number,pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Contador de Números-----------]`
        escreva(mensagem)
        escreva(`***Digite \"Voto = -1\" para encerar***\n          
                Opções de Voto
        --------------------------------                                 
         1-Candidato A    9-Nulo
         2-Candidato B    0-Em branco
         3-Candidato C            
        ---------------------------------`)
        
    //Entrada
        const dados = executar_Eleição()
        const vencedor = verificar_Vencedor(dados[0],dados[1],dados[2],dados[3],dados[4],dados[5],dados[6])

    //Saída
        mensagem = (`
        =======================CONTAGEM DE VOTOS========================
          · Total de Eleitores: ${dados[5]}
          · Votos em Candidato A: ${dados[0]}
          · Votos em Candidato B: ${dados[1]}
          · Votos em Candidato C: ${dados[2]}
          · Total de votos nulos: ${dados[3]}
          · Total de votos em branco: ${dados[4]}
        -------------------------------------------------
           ${vencedor}
       ===============================================================
           `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function executar_Eleição(){
    let voto = 0
    let votos1 = 0
    let votos2 = 0
    let votos3 = 0
    let votos9 = 0
    let votos0 = 0

    escreva("\n--------Primeiro Eleitor--------\n")

    for (let total_Eleitores = 0;voto !== -1;total_Eleitores++) {
        voto = get_Number_Eleição("Digite o numero do seu voto: ")

        if(voto === -1){
            return [votos1,votos2,votos3,votos9,votos0,total_Eleitores] //break
        }else{

            if(voto === 0){
                votos0++
            }else if(voto === 1){
                votos1++
            }else if(voto === 2){
                votos2++
            }else if(voto === 3){
                votos3++
            }else if(voto === 9){
                votos9++
            }
    }
        escreva("\n--------Proximo Eleitor--------\n")
    }

     return [votos1,votos2,votos3,votos9,votos0,total_Eleitores]
}

function verificar_Vencedor (vt1,vt2,vt3,vt9,vt0,eleitores) {
    const porcentagens = calcular_Porcentagem(vt1,vt2,vt3,vt9,vt0,eleitores) 

    const por_vt1 = porcentagens[0] 
    const por_vt2 = porcentagens[1] 
    const por_vt3 = porcentagens[2] 
    const por_vt9 = porcentagens[3]
    const por_vt0 = porcentagens[4] 

    if(por_vt0 + por_vt9 > 50){ 
        return "Não houve maioridade de votos em nenhum candidato!"
    }else if(por_vt1 === por_vt2 && por_vt2 === por_vt3){
        return "Empate, os candidatos tiveram os mesmo numero de votos!"
    }else if(por_vt1 > 50){
        return "Candidato A foi o vencedor!!"
    }else if(por_vt2 > 50){
        return "Candidato B foi o vencedor!!"
    }else if(por_vt3 > 50){
        return "Candidato C foi o vencedor!!"
    }
}

function calcular_Porcentagem(vt1,vt2,vt3,vt9,vt0,eleitores){
    const por_vt1 = (vt1/(eleitores-vt0-vt9)) * 100 
    const por_vt2 = (vt2/(eleitores-vt0-vt9)) * 100 
    const por_vt3 = (vt3/(eleitores-vt0-vt9)) * 100 
    const por_vt9 = (vt9/eleitores) * 100
    const por_vt0 = (vt0/eleitores) * 100

    return [por_vt1,por_vt2,por_vt3,por_vt9,por_vt0].map(Number)
}

function get_Number_Eleição(pergunta){
    const numero = get_number(pergunta)
  
    if (numero !== 0 && numero !== 1 && numero !== 2 && numero !== 3 && numero !== 9 && numero !== -1){
      escreva('!!!Digite um valor valido!!!\n')
      return get_Number_Eleição(pergunta)
    }
    return numero
}


main()