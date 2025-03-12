"use strict";

const result = document.getElementById('result');

const getJoeHappiness = (happy, callback) => {
    setTimeout(() => {
        const happiness = Math.random();
        if (happiness > happy) {
            callback(happiness.toFixed(2));
        } else {
            callback(new Error("Joe is sad!"));
        }
    }, 2000);
}

function output(happiness){
    if(isNaN(happiness)){
        result.innerText = "No ! ! ! Joe is sad!"
    }else{
        result.innerText = `Yes! By ${happiness*100} %`; 
    }
}

document.getElementById('btn').addEventListener('click', function(btn) {
    getJoeHappiness(document.getElementById('threshold').value, output)
})