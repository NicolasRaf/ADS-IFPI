import { ask, getNumberInRange, getNumberPositive } from "./Funções/io.js"; // Importação das funções de IO

function main() {
    console.clear()

    //Apresentação
    let message = '\n[-----------Investimento para Objetivo-----------]'
    console.log(message);

    //Entrada
    const OBJECTIVE = ask("Qual seu objetivo: ");
    const PRICE = getNumberPositive("Quanto custa seu objetivo: ");
    const SALARY = getNumberPositive("Qual o seu salário: ");
    const INVESTMENT = getNumberInRange("Quantos % será investido mensalmente: ",0,29, "\nO valor não pode ser superior a 30%\n");
    const TAX = getNumberInRange("Qual taxa de juros do investimento: ",0.01,1,"\nValor superou a taxa limite!\n");
    console.clear()

    //Processamento
    let monthlyInvestment = (INVESTMENT / 100) * SALARY; 
    let monthlyTax = TAX/ 100; // Transformando em decimal
    let balance = 0;
    let months = 0;
    let index = 1

    while (balance < PRICE) {
        //Calculo do montante
        balance += monthlyInvestment;
        balance += balance * monthlyTax;

        console.log(`   ${index} mês: ${balance.toFixed(2)} R$`);

        index++;
        months++;
    }


    // Saída
    const YEARS = Math.floor(months / 12);
    let remainingMonths = months % 12;

    console.log(`
    ==================RESULTADO===================
     • Objetivo: R$ ${PRICE.toFixed(2)}
     • Tempo total: ${YEARS} anos e ${remainingMonths} meses
    ==============================================\n`);

    // Mensagem para finalizar o programa
    ask("Finalizar Programa? (Press Enter)");
    console.clear();
}

main();