/*3. Leia uma letra e verifique se a letra digitada é vogal ou consoante.*/ 
import { numerozin,escreva,pergunta } from "./Funções/io.js"


function main(){
//Apresentação
    let mensagem = "[--------Consoante ou Vogal--------]"
    escreva(mensagem)


//Entrada
    const letra = pergunta("Digite uma letra: ")

//Saída
     mensagem = (`
   ---------------------------------------------
    ${vogal_consoante(letra)}
   ---------------------------------------------
    `)

    escreva(mensagem)

}

//Processamento
function vogal_consoante(letra){
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u")
        return `     A letra digitada é uma vogal!`
    else if(letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U")    
        return `     A letra digitada é uma vogal!`
    else
        return `    A letra digitada é uma consoante!`


}

main()