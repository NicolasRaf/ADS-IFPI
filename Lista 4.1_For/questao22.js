/*22. Um fazendeiro possui fichas de controle sobre sua boiada.  Cada ficha contém numero de identificação, 
nome e peso (em kg) do boi.  Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o 
numero de identificação e o peso do boi mais magro e do boi mais gordo.*/ 
import {escreva,get_number_positive, pergunta} from "./Funções/io.js"

function main(){

    //Apresentação
        let mensagem = `\n[-----------Controle de Boiada-----------]`
        escreva(mensagem)
        escreva("    *******Digite 0 para encerar*******\n")

    //Entrada
        const identificações = verificar_identificações()

    //Saída
        mensagem = (`
     ==============================================
        Boi(s) mais Magro(s):                               
          -->Identificação:${identificações[3]}             
              Peso: ${identificações[2]} Kg                 
              Nome: ${identificações[5]}                   
                                                          
        Boi(s) mais Gordo(s):                               
          -->Identificação:${identificações[1]}             
              Peso: ${identificações[0]} Kg                  
              Nome: ${identificações[4]}                    
     ==============================================
    `)

        escreva(mensagem)
        if (! pergunta(`Finalizar Programa?(Press Enter)`))
            console.clear()

}

//Processamento

function verificar_identificações(){
    let peso = 0
    let nome = ""
    let boi_Gordo = 0
    let ident_Gordo = 0
    let nome_Gordo = ""
    let boi_Magro = 0
    let ident_Magro = 0
    let nome_Magro = ""

    escreva(">>>>>>>>>Primeira Identificação<<<<<<<<<\n")

    for (let identificação = "";identificação !== "0";) {

        identificação = pergunta("Digite o numero de identificacao: ")
            if(identificação === "0") return [boi_Gordo,ident_Gordo,boi_Magro,ident_Magro,nome_Gordo,nome_Magro]

        nome = pergunta("Qual o nome do boi: ")
        peso = get_number_positive("Informe o peso do boi: ")
            
              if (peso > boi_Gordo) {
                boi_Gordo = peso
                ident_Gordo = identificação
                nome_Gordo = nome
            } else if (peso === boi_Gordo) {
                    ident_Gordo += ", "  + identificação
                    nome_Gordo += ", " + nome
            }

              if (peso < boi_Magro || boi_Magro === 0) {
                boi_Magro = peso
                ident_Magro = identificação
                nome_Magro = nome
            } else if (peso === boi_Magro) {
                    ident_Magro += ", "  + identificação
                    nome_Magro += ", " + nome
            }
            
            escreva("\n>>>>>>>>>Proxima Identificação<<<<<<<<<\n")
        } 
        return [boi_Gordo,ident_Gordo,boi_Magro,ident_Magro,nome_Gordo,nome_Magro]
    }


main()