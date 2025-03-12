"use strict";

// Output se está feliz ou não
const result = document.getElementById('result');

const getJoeHappiness = async (happy) => {
    await new Promise(r => setTimeout(r, 2000));

    const happiness = Math.random();
    if (happiness > happy) {
        return happiness.toFixed(2);
    } else {
        throw new Error ("Joe is Sad");
    }
}


async function output(inputNumber){
    try{
        result.innerText = `Yes! By ${await getJoeHappiness(inputNumber)*100} %`; 
    }catch{
        result.innerText = "No ! ! ! Joe is sad!"
    }
}

document.getElementById('btn').addEventListener('click', function(btn) {
    output(document.getElementById('threshold').value)
})