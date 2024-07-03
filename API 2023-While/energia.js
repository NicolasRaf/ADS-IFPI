import { ask, getNumberPositive } from "./Funções/io.js"; // Importação das funções de IO

// Função que calcula o custo do consumo por KWh sem tarifas e impostos
function calculateCost(cons) {

    if (cons <= 30) {
        return 0;
    } else if (cons <= 100) {
        return cons * 0.59;
    } else {
        return cons * 0.75;
    }
}

// Calcula o custo adicional pela bandeira
function calculateFlag(cost) {

    const count = Math.trunc(cost/100);

    return count * 8;
}

function main() {
    
    console.clear();

    //Apresentação
    let message = '\n[-----------Gerador de Talão-----------]'
    console.log(message);

    //Entrada
    const currentReading = getNumberPositive("Informe a leitura atual do medidor de energia: ");
    const previousReading = getNumberPositive("Informe a leitura anterior do medidor de energia: ");

    //Processamento
    const consumption = Math.abs(currentReading - previousReading);
    let energyCost = calculateCost(consumption);
    let flag = calculateFlag(consumption);
    let lightingTax = 0;

    // Taxação da iluminação pública apos consumo superior a 80 KWh
    if (consumption > 80){
        lightingTax = energyCost * 0.06;
    }

    // Calculo dos impostos sobre o custo de energia tarifado
    const ICMS = energyCost * 0.25;
    const PIS = energyCost * 0.15;

    const valueTotal = ICMS + PIS + flag + lightingTax + energyCost; 

    //Saída
    console.clear();

    message = (`
    ===============Talão de Energia===============
     • Consumo: ${consumption.toFixed(1)} KWh  
     • Valor Faturado: R$ ${valueTotal.toFixed(2)}
     • Bandeira: R$ ${flag.toFixed(2)} (${flag/8} bandeiras)  
     • ICMS: R$ ${ICMS.toFixed(2)}
     • PIS/CONFIS: ${PIS.toFixed(2)} 
     • Taxa Iluminação: R$ ${lightingTax.toFixed(2)}
    ==============================================\n`);
    
    console.log(message);
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();