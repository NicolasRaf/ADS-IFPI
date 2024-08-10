/*17. Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
baixa o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').*/ 
import {escreva, pergunta, get_number_positive} from "./Funções/io.js"

function main(){
//Apresentação
    let mensagem = `\n[------------Concurso de Beleza------------]
    *****Digite "FIM" para encerar*****\n`
    escreva(mensagem)
    
    //Entrada
    const cartões = ler_cartões()
    
    //Saída
    mensagem = (`
==================================================
Candidata(s) Mais Alta(s): 
--> Nome:${cartões[7]}          
    Altura:${cartões[6]} cm

Candidata(s) Mais Baixa(s):
--> Nome:${cartões[5]}       
    Altura:${cartões[4]} cm

Candidata(s) Mais Magra(s):
--> Nome:${cartões[3]}         
    Peso:${cartões[2]} Kg

Candidata(s) Mais Gorda(s):
--> Nome:${cartões[1]}          
    Peso:${cartões[0]} Kg
==================================================
`)

escreva(mensagem)

}

//Processamento
function ler_cartões(){     
    let nome = " "
    let peso = 0
    let altura = 0
    let nome_maior_altura = ""
    let maior_altura = 0
    let nome_menor_altura = ""
    let menor_altura = 0
    let nome_maior_peso = ""
    let maior_peso = 0
    let nome_menor_peso = ""
    let menor_peso = 0

    while (nome !== "FIM") {
        nome = pergunta("\nQual seu nome: ")  //Esse return ficou extenso, mas usei pra não colocar break
        if (nome === "FIM") return [maior_peso, nome_maior_peso, menor_peso, nome_menor_peso, menor_altura, nome_menor_altura, maior_altura, nome_maior_altura]
        peso = get_number_positive("Informe seu peso: ")
        altura = get_number_positive("Digite sua altura(cm): ")

        if (altura > maior_altura || nome_maior_altura === "") {
            nome_maior_altura = nome
            maior_altura = altura
        } else if (altura === maior_altura) {
            nome_maior_altura += ", " + nome
        }

        if (altura < menor_altura || nome_menor_altura === "") {
            nome_menor_altura = nome
            menor_altura = altura
        } else if (altura === menor_altura) {
            nome_menor_altura += ", " + nome
        }

        if (peso < menor_peso || nome_menor_peso === "") {
            nome_menor_peso = nome
            menor_peso = peso
        } else if (peso === menor_peso) {
            nome_menor_peso += ", " + nome
        }

        if (peso > maior_peso || nome_maior_peso === "") {
            nome_maior_peso = nome
            maior_peso = peso
        } else if (peso === maior_peso) {
            nome_maior_peso += ", " + nome
        }

        escreva("\n>>>>>>>>>Proxima Candidata<<<<<<<<<")
    }
    
    return [maior_peso, nome_maior_peso, menor_peso, nome_menor_peso, menor_altura, nome_menor_altura, maior_altura, nome_maior_altura]
}

main()