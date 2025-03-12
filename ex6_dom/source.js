document.body.style.fontFamily = 'Courier New';
document.body.style.margin = '50px';
document.body.style.fontSize = "20px";

document.getElementById('name').innerHTML = "Nanna Bryndís"
document.getElementById('nickname').innerHTML = "Nanna" 
document.getElementById('favorites').innerHTML = "Singing • Indie • Folk • Pop "
document.getElementById('hometown').innerHTML = "Gardur"

let foto = document.createElement("img");
foto.src = "https://media.gettyimages.com/photos/nanna-bryndis-hilmarsdottir-with-of-monsters-and-men-performs-as-part-picture-id170573218?s=612x612";
document.body.appendChild(foto);