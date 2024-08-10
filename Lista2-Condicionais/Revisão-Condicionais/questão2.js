/*2.Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.*/ 
import { numerozin,escreva,pergunta } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = `[--------Verificador de Sexo--------]
F = feminino.
M = masculino.
    `
    escreva(mensagem)

//Entrada
    const sexo = pergunta(`Selecione uma opcao de sexo: `)

    if(eh_valido(sexo) === false)
        return escreva(`
    !!!Sexo inválido!!!`)// Verifica se a opção esta entre as validas

//Saída
     mensagem = (`
   ---------------------------------------------
    ${qual_sexo(sexo)}
   ---------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function eh_valido(sexo){
   return sexo === "M" || sexo === "m" || sexo === "F" || sexo === "f"

}

function qual_sexo(sexo){
    if(sexo === "M" || sexo === "m")
        return "        Sexo masculino selecionado!"
    else
        return "        Sexo feminino selecionado!"


}


main()