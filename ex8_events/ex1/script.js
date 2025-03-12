"use strict";

document.getElementById('lib-button').addEventListener('click', makeMadTalk)

function makeMadTalk(){
    const substantivo = document.getElementById('noun').value;
    const adjetivo = document.getElementById('adjective').value;
    const pessoa = document.getElementById('person').value;
    let frase = "Eu tava na aula de Web quando o " + pessoa + " disse que " + substantivo + " é " + adjetivo + " demais";
    document.getElementById('story').innerHTML = frase;
}
