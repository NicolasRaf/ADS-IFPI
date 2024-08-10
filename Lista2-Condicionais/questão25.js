/*25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não.*/ 
import { numerozin,prompt } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[----------Validade de senha----------]"
    prompt(mensagem)


//Entrada
    const senha = numerozin("Digite sua senha: ")

//Saída
     mensagem = (`
   ---------------------------------------------
    ${verificar_senha(senha)}
   ---------------------------------------------
    `)

    prompt(mensagem)

}

//Processamento
function verificar_senha(senha){
    if(senha === 1234)
        return "          Permissão Concedida!"
    else
        return "               Acesso Negado!"

}


main()