export function generateNumbers(size,min,max){
    console.clear();
    let count = 0;
    let vector = [];

    while (count < size){
        var number = Math.floor(Math.random() * ((max + 1) - min)) + min;
        vector.push(number);
        count++;
    }   

    console.log("Vetor gerado com sucesso!")
    return vector;

}



