import { ask, getNumberInRange, getNumberPositive } from "./Funções/io.js"; // Importação das funções de IO

function main() {
    console.clear()

    //Apresentação
    let message = '\n[-----------Calculo de Empréstimo-----------]'
    console.log(message);

    //Entrada
    const monthlyIncome = getNumberPositive("Qual sua renda mensal: ");
    const salaryMin = getNumberPositive("Informe o salário mínimo atual: ")
    const loanAmount = getNumberInRange("Informe o valor do empréstimo: ",salaryMin,Infinity,"\nO valor do empréstimo deve ser no mínimo um salário mínimo!\n");
    const deadline = getNumberInRange("Qual o prazo do parcelamento: ",2,24,"\nO prazo deve estar entre 2 e 24 parcelas!\n");


    // Processamento
    const SELIC = 0.1375; // 13.75%
    const IOF = (loanAmount * 0.0038) + (0.000082 * loanAmount * (deadline * 30));
    const loanWithIOF = loanAmount + IOF;

    // Calculo da taxa de juros
    let interestRate;
    if (deadline <= 6) {
        interestRate = SELIC * 0.5;
    } else if (deadline <= 12) {
        interestRate = SELIC * 0.75;
    } else if (deadline <= 18) {
        interestRate = SELIC;
    } else {
        interestRate = SELIC * 1.3;
    }

    // Calculo do total a pagar, a prestação e do rendimento comprometido
    const totalToPay = loanWithIOF * Math.pow(1 + interestRate / 12, deadline);
    const monthlyInstallment = totalToPay / deadline;
    const incomeCommitment = (monthlyInstallment / monthlyIncome) * 100;

    // Verificação da situação para o empréstimo
    let loanApproved = ""
    if (incomeCommitment <= 40) {
        loanApproved = "APROVADO"
    } else {
        loanApproved = "NEGADO"
    }

    //Saída
    console.clear();

    message = (`
    ==================RESULTADO===================
     • Valor Pedido: R$ ${loanAmount.toFixed(2)}
     • Valor do IOF: R$ ${IOF.toFixed(2)}
     • Valor dos Juros a Pagar: R$ ${(totalToPay - loanWithIOF).toFixed(2)}
     • Valor Total a Pagar: R$ ${totalToPay.toFixed(2)}
     • Valor da Parcela Mensal: ${deadline}x de R$ ${monthlyInstallment.toFixed(2)}
     • Comprometimento da Renda Mensal: ${incomeCommitment.toFixed(2)}%
     • Situação do Empréstimo: ${loanApproved}
    =============================================\n`);
    
    console.log(message);
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();