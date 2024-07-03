import { ask, getNumberPositive } from "./Funções/io.js"; // Importação das funções de IO

// Função responsável por calcular os dois tipos de Scores
function calculateScore(itemA,itemB,itemC,type) {

    if (type === 1) { // Verificação de qual Score esta sendo processado(Antigo ou Novo)
        return ((itemA/100) * 260) + ((itemB/100) * 570) + ((itemC/100) * 170);
    } else {
        return  ((itemA/100) * 620) + ((itemB/100) * 190) + ((itemC/100) * 190);
    }  
}

// Função que classifica a situação da pessoa com base nos Scores
function scoreClassifier(score,type) {

    if (type === 1) { // Verificação de qual Score esta sendo processado(Antigo ou Novo)
        if (score <= 400) {
            return "Baixo";
        } else if (score <= 600) {
            return "Regular";
        } else if (score <= 800) {
            return "Bom";
        } else if (score <= 1000) {
            return "Muito Bom";
        }
    } else {
        if (score <= 300) {
            return "Baixo";
        } else if (score <= 500) {
            return "Regular";
        } else if (score <= 700) {
            return "Bom";
        } else if (score <= 1000) {
            return "Muito Bom";
        }
    }

}

function main() {
    console.clear();

    //Apresentação
    let message = '\n[-----------Score Serasa-----------]\n'
    console.log(message);

    //Entrada
    const itemA = getNumberPositive("Informe o valor para o critério \"A\"(0 a 100): ");
    const itemB = getNumberPositive("Informe o valor para o critério \"B\"(0 a 100): ");
    const itemC = getNumberPositive("Informe o valor para o critério \"C\"(0 a 100): ");
    
    //Processamento
    const SCORE1 = calculateScore(itemA,itemB,itemC,1);
    const SCORE2 = calculateScore(itemA,itemB,itemC,2);

    //Saída
    console.clear();

    message = (`
    ===================SCORES===================
        Score Antigo: ${SCORE1.toFixed(1)} --> ${scoreClassifier(SCORE1,1)}
         Score Novo:  ${SCORE2.toFixed(1)} --> ${scoreClassifier(SCORE2,2)}
    ============================================\n`);
    
    console.log(message);
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();