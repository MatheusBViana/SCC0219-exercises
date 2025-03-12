"use strict";

function fillColor(color) {
    color.json().then((data) => {
        console.log(data.data);
        document.getElementById('colorbox').style.backgroundColor = data.data.color;
        document.getElementById('nomeCor').innerHTML = data.data.color + "<br>" + data.data.name;
    });
}

function fetchColor(colorID){
    fetch(`https://reqres.in/api/unknown/${colorID}`)
    .then(function(response){
        fillColor(response)
    }).catch((error) => {
        console.log(error);
    });
}

document.getElementById('btn').addEventListener('click', () => {
    let colorID = document.getElementById('cor').value;
    fetchColor(colorID);
})