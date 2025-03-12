"use strict";

function myFunction() {
    let colorID = document.getElementById('cor').value;
    let url = `https://reqres.in/api/unknown/${colorID}`
    loadColor(url);
}
    
async function loadColor (url) {
    const data = await fetch(url)
    const color = await data.json();

    document.getElementById('colorbox').style.backgroundColor = color.data.color;
    document.getElementById('nomeCor').innerHTML = color.data.color + "<br>" + color.data.name;
}

document.getElementById("btn").onclick = () => {
    myFunction()
};
