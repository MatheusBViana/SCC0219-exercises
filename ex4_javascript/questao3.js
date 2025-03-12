const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9];
let frequencia_aux = 0;
let mais_frequente_final = 1;
let resultado;

// no _aux eu armazeno a frequência de cada letra até terminar de contar
// Após isso, o mais_frequente_final armazena a maior frequência, e o "resultado" armazena 
// o item de maior frequência
for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j]){
            frequencia_aux++;
        }
        if (mais_frequente_final < frequencia_aux){
            mais_frequente_final = frequencia_aux; 
            resultado = arr1[i];
        }
    }
    frequencia_aux = 0;
}

alert(resultado + " ( " + mais_frequente_final + " times )");