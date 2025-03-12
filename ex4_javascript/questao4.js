// Função para adicionar o sufixo nos números:
// 1 -> st
// 2 -> nd
// 3 -> rd
// 4 ou maior -> th
function sufixo(i){

    if (i == 1){
        return i + "st";
    }
    if (i == 2){
        return i + "nd";
    }
    if (i == 3 ){
        return i + "rd";
    }
    return i + "th";
}

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo"];
let order = [2, 1, 4, 5, 6, 3];

let output = []

// Armazeno no array output a ordem das cores
for (let i = 0; i < color.length; i++) {
    output.splice(order[i]-1, 0, color[i]);
}

// Formato a output com o sufixo de cada número
for (let i = 0; i < color.length; i++) {
    document.write(sufixo(i+1) +" choice is: " + output[i] + "<br>")
}