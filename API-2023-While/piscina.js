import { ask, getNumberPositive } from "./Funções/io.js"; // Importação das funções de IO

function main() {
    console.clear();

    // Apresentação
    let message = '\n[-----------Litragem de Piscina-----------]';
    console.log(message);

    // Entrada
    const WIDTH = getNumberPositive("Informe a largura da piscina(em cm): ");
    const LENGTH = getNumberPositive("Informe o comprimento da piscina(em cm): ");
    const DEPTH = getNumberPositive("Informe a profundidade da piscina(em cm): ");
    const PRICE = getNumberPositive("Qual o preço a ser pago por 1000 litros de água: ");

    // Processamento
    const CAPACITY = WIDTH * LENGTH * DEPTH; // em cm
    const LITERS = CAPACITY / 1000; // convertendo para litros
    const RECOMMENDED = LITERS * 0.85; 

    let totalCost = calculateCost(RECOMMENDED, PRICE);
    let monthlyCost = calculateCost(RECOMMENDED * 0.1, PRICE);

    // Função para calcular o custo
    function calculateCost(volume, price) {
        let cost = 0;

        if (volume > 0) {
            let intPart = Math.floor(volume / 1000);
            let decPart = volume % 1000;
            
            if (decPart > 0) {
                cost = (intPart + 1) * price; // se há parte decimal, soma 1 ao inteiro
            } else {
                cost = intPart * price;
            }
        }
        return cost;
    }

    // Saída
    console.clear();
    message = (`
    ==================RESULTADO===================
     • Capacidade Recomendada: ${RECOMMENDED.toFixed(1)} litros
     • Preço Total: ${totalCost.toFixed(2)} R$
     • Custo Mensal: ${monthlyCost.toFixed(2)} R$
    ==============================================\n`);
    
    console.log(message);

    // Mensagem para finalizar o programa
    ask("Finalizar Programa?(Press Enter)");
    console.clear();
}

main();
