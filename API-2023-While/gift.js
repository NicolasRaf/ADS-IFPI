import { ask, getNumberPositiveZero } from "./Funções/io.js"; // Importação das funções de IO

function main() {
    console.clear()

    //Apresentação
    let message = '\n[----------Cálculo de Cashback----------]\nDigite 0 no nome para finalizar a entrada!\n'
    console.log(message);

    //Entrada
    console.log(">>>>>>>>>> Primeiro Cliente <<<<<<<<<<");

    let count = 0;
    let name;
    let totalEarnings = 0;
    let highestValue = 0;
    let lowestValue = 999;
    let totalCashback = 0;

    while (name != "0") {
        //Variáveis solicitadas pela questão
        name = ask("Informe seu nome: ");

        if (name != "0") {
            count++;
            let purchases = getNumberPositiveZero("Quantas compras foram efetuadas: ");
            let amount = getNumberPositiveZero("Qual o valor total das compras: ");

            //Adição no total faturado 
            totalEarnings += amount;

            //Função para calcular o cashback
            calculateCashback(amount);

            console.log("\n>>>>>>>>>> Proximo Cliente <<<<<<<<<<");
        }
    }

    //Processamento
    
    function calculateCashback(amount) {
        let cashback;

        // Aplicação do cashback com base no montante de compras
        if (amount <= 250) {
            cashback = amount * 0.05;
        } else if (amount <= 500) {
            cashback = amount * 0.07;
        } else if (amount <= 750) {
            cashback = amount * 0.08;
        } else {
            let rest = amount - 750;
            cashback = (750 * 0.08) + rest * 0.25;
        }

        // Definição do maior e menor cashback
        if (cashback > highestValue) {
            highestValue = cashback;
        }

        if (cashback < lowestValue) {
            lowestValue = cashback;
        }

        // Iteração no total de cashback 
        totalCashback += cashback;
    }

    let averageCashback = totalCashback/count;
    let percent = (totalCashback/totalEarnings) * 100;

    //Saída
    console.clear();

    message = (`
    ==================RESULTADO===================
     • Faturamento Total: ${totalEarnings.toFixed(2)} R$
     • Cashback Distribuído: ${totalCashback.toFixed(2)} R$
     • Valor Percentual Investido em Cashback: ${percent}%
     • Maior Cashback: ${highestValue.toFixed(2)} R$
     • Menor Cashback: ${lowestValue.toFixed(2)} R$ 
     • Media de Cashback: ${averageCashback.toFixed(2)} R$
    ==============================================\n`);
    
    console.log(message);
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();