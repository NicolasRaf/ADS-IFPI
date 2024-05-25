/*22. Um fazendeiro possui fichas de controle sobre sua boiada.  Cada ficha contém numero de identificação, 
nome e peso (em kg) do boi.  Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o 
numero de identificação e o peso do boi mais magro e do boi mais gordo.*/ 
import {escreva,get_number_positive, pergunta} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[----------Controle de Boiada----------]
  *********Digite 0 para encerar********\n`
    escreva(mensagem)


//Entrada
   const identificações = verificar_identificações()

//Saída
     mensagem = (`
==================================================
  Boi(s) mais Magro(s):
    -->Identificação:${identificações[3]}
       Peso: ${identificações[2]} Kg
       Nome: ${identificações[5]}

  Boi(s) mais Gordo(s):
    -->Identificação:${identificações[1]}
       Peso:${identificações[0]} Kg
       Nome: ${identificações[4]}
==================================================
    `)

    escreva(mensagem)

}

//Processamento
function verificar_identificações(){
    let identificação = "R"
    let peso = 0
    let nome = ""
    let boi_gordo = 0
    let ident_gordo = 0
    let nome_gordo = ""
    let boi_magro = 0
    let ident_magro = 0
    let nome_magro = ""

    escreva(">>>>>>>>>Primeira Identificação<<<<<<<<<\n")

    while(identificação !== "0"){
        identificação = pergunta("Digite o numero de identificacao: ")
            if(identificação === "0") return [boi_gordo,ident_gordo,boi_magro,ident_magro,nome_gordo,nome_magro]
        nome = pergunta("Qual o nome do boi: ")
        peso = get_number_positive("Informe o peso do boi: ")
            
            if(peso > boi_gordo){
                boi_gordo = peso
                ident_gordo = identificação
                nome_gordo = nome
            }else if(peso === boi_gordo){
                    ident_gordo += ", "  + identificação
                    nome_gordo += ", " + nome
            }

            if(peso < boi_magro|| boi_magro === 0){
                boi_magro = peso
                ident_magro = identificação
                nome_magro = nome
            }else if(peso === boi_magro){
                    ident_magro += ", "  + identificação
                    nome_magro += ", " + nome
            }
            
            escreva("\n>>>>>>>>>Proxima Identificação<<<<<<<<<\n")
        } 
        return [boi_gordo,ident_gordo,boi_magro,ident_magro,nome_gordo,nome_magro]
    }



main()