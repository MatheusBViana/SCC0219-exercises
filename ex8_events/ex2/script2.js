"use strict";

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    document.getElementById('change_heading').textContent = "Matheus Bermudes"

    const secao = document.getElementsByTagName('section')[0];
    const cores = document.querySelectorAll('section div');
    const selected = document.getElementsByClassName('selected')[0];
    
    cores.forEach(function(cor){
        cor.addEventListener('mouseover', showColor)
    });
    
    const random = document.createElement('div');
    random.classList.add('random');
    secao.append(random);
    setInterval(change_background_color, 500);
    const new_square = document.querySelectorAll('.random');

    function showColor(){
        selected.textContent = this.classList.value.toUpperCase();
    }

    function change_background_color(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        new_square.forEach(rand => rand.setAttribute("style", "background-color :#"+randomColor))
    }
});

