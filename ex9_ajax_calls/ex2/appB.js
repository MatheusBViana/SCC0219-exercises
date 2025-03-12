"use strict";

// Output se está feliz ou não
const result = document.getElementById('result');

function getJoeHappiness (happy) {
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            var happiness = Math.random();
            if (happiness > happy) {
                resolve(happiness.toFixed(2));
            } else {
                reject(new Error ("Joe is sad!"));
            }
        }, 2000);
    }).then(function(response){
        output(response);
    }).catch(function(response){
        output(response);
    })

}

function output(felicidade) {
    // NaN => Not a Number, função que identifica se é numérico
    if(isNaN(felicidade)){
        result.innerText = "No ! ! ! Joe is sad!"
    }else{
        result.innerText = `Yes! By ${felicidade*100} %`; 
    }
}

document.getElementById('btn').addEventListener('click', function(btn) {
    getJoeHappiness(document.getElementById('threshold').value)
})