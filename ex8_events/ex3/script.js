"use strict";

// Questão 1
var paragraph = document.getElementsByTagName('p')[0];
var link = document.createElement('a');
link.setAttribute('href', '#'); 
link.textContent = "Home";
paragraph.after(link);

// Questão 2
var quantidade = paragraph.innerHTML.split(' ').length;
console.log(quantidade);
document.getElementsByTagName('h1')[0].before("Quantidade de palavras: " + quantidade);

// Questão 3 e 4
var palavras_destacadas = document.createElement('p');
let texto = paragraph.innerText;
let regex = new RegExp("[\.\?\!\"\;\,\:\(\)\\s+]")
let destaque = "";

function highlight(texto){
    if(texto.length >= 8){
        destaque = "<span style='color: pink'>" + texto + "</span>";
    } else if (texto.length == 6){
        destaque = "<span style='color: purple'>" + texto + "</span>";
    } else if (texto.length == 4 || texto.length == 5){
        destaque = "<span style='color: blue'>" + texto +"</span>";
    } else {
        destaque = texto;
    }
    return destaque;
}

let word = "";
document.getElementById('btn').addEventListener("click", () => {
    console.log(this.document.body.tag);
    for (var i = 0; i < texto.length; i++) {
        let c = texto[i];
        if(regex.test(c)) {
            if (word != ""){
                if(word[0] == "'" && word[word.length - 1] == "'"){
                    palavras_destacadas.innerHTML += "'";
                    word = word.slice(1,-1);
                    palavras_destacadas.innerHTML += highlight(word);
                    palavras_destacadas.innerHTML += "'";
                    word = "";
                }else{
                    palavras_destacadas.innerHTML += highlight(word);
                    word = "";
                }
            }
            if(c == '.' || c == '!' || c == '?'){
                palavras_destacadas.innerHTML += c + "<br><br>"
            }
            else{
                palavras_destacadas.innerHTML += c;
            }
        }else{
            word += c;
        }
    }
})

document.body.append(palavras_destacadas);