import { getNumber, getNumberInRange, getNumberPositive} from "./io.js"

export function initializeVector(){
    console.log(`
    -----------------------------
        [1] Dados Automáticos
        [2] Informa Valores     
        [3] Ler Arquivo 
    `)

    let option = getNumberInRange("==> ",1,3,"\nSelecione uma opção valida!\n")
    
    if (option === 1){
        let size = getNumberPositive("Informe a tamanho do vetor: ")
        let limitMin = getNumber("Informe o valor mínimo para os valores: ")
        let limitMax = getNumberInRange("Informe o valor máximo para os valores: ",limitMin + 1,Infinity,"\nO valor deve ser maior que o limite inferior!\n")

        generateNumbers(size,limitMin,limitMax)
    }else if(option === 2){
        let size = getNumberPositive("Informe a tamanho do vetor: ")
        let limitMin = getNumber("Informe o valor mínimo para os valores: ")
        let limitMax = getNumberInRange("Informe o valor máximo para os valores: ",limitMin + 1,Infinity,"\nO valor deve ser maior que o limite inferior!\n")
        
        storageNumbers(size,limitMin,limitMax)
    }else{
        let name = ask("Informe o nome do arquivo")

        readFile(name)
    }
}

