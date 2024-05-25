/*19. Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.º de identificação e seu
peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.º de identificação e o peso do
boi mais magro e do boi mais gordo. (Flag: n.º identificação=0)*/ 
import { get_number_positive_zero,escreva,get_number_positive, pergunta} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[--------Identificações Frigorífico--------]
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

  Boi(s) mais Gordo(s):
    -->Identificação:${identificações[1]}
       Peso:${identificações[0]} Kg
==================================================
    `)

    escreva(mensagem)

}

//Processamento
function verificar_identificações(){
    let identificação = "R"
    let peso = 0
    let boi_gordo = 0
    let ident_gordo = 0
    let boi_magro = 0
    let ident_magro = 0

    escreva(">>>>>>>>>Primeira Identificação<<<<<<<<<\n")

    while(identificação !== "0"){
        identificação = pergunta("Digite o numero de identificacao: ")
            if(identificação === "0") return [boi_gordo,ident_gordo,boi_magro,ident_magro]
        peso = get_number_positive("Informe o peso do boi: ")
            
            if(peso > boi_gordo){
                boi_gordo = peso
                ident_gordo = identificação
            }else if(peso === boi_gordo){
                    ident_gordo += ", "  + identificação
            }

            if(peso < boi_magro|| boi_magro === 0){
                boi_magro = peso
                ident_magro = identificação
            }else if(peso === boi_magro){
                    ident_magro += ", "  + identificação
            }
            
            escreva("\n>>>>>>>>>Proxima Identificação<<<<<<<<<\n")
        } 
        return [boi_gordo,ident_gordo,boi_magro,ident_magro]
    }



main()