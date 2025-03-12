// Aula 7
// console.log(
//     document.getElementById("nome").innerHTML
// )
// console.log(
//     document.getElementsByClassName("sobrenome")
// )

// console.log(
//     document.getElementsByClassName("sobrenome")[0]
// )

// Aula 8
// console.log(
//     document.getElementsByTagName("div")[0].innerHTML
// )

// // querySelector sempre retorna o primeiro resultado
// console.log(
//     document.querySelector("#p2")
// )

// Aula 9
// console.log(
//     document.getElementById("filmes-liveaction").querySelectorAll(".filmes")[1]
// )

// Aula 10
// let paragrafo = document.getElementById("p1")
// paragrafo.innerHTML = "Inserindo no paragrafo"

// paragrafo.style.color = "white"
// paragrafo.style.backgroundColor = "blue"
// paragrafo.style.height = "700px"

// let imagem = document.getElementById("imagem")
// imagem.src = "https://br.web.img3.acsta.net/c_310_420/pictures/15/03/26/16/44/393405.jpg"
// imagem.alt = "Capa do filme Castelo Animado"
// imagem.width = "371"

// Aula 11
// console.log(
//     document.createElement("div")
// )

// let imagem = document.createElement("img")
// imagem.src = "https://br.web.img3.acsta.net/c_310_420/pictures/15/03/26/16/44/393405.jpg"

// Aula 12
// let paragrafo = document.createElement("p")
// paragrafo.innerHTML = "Aula 12"

// let img = document.createElement("img")
// img.src = "https://br.web.img3.acsta.net/c_310_420/pictures/15/03/26/16/44/393405.jpg"

// document.getElementById("content").appendChild(paragrafo)
// document.getElementById("content").appendChild(img)

// document.getElementById("content").removeChild(paragrafo)
// document.getElementById("content").removeChild(img)


// Aula 13 e 14
// console.log(
//     document.documentElement.lastChild
// )

// console.log(
//     document.body.childNodes
// )

// let lista = document.body.childNodes

// alert(lista[27].innerHTML)
// alert(lista[27].nodeType)
// alert(lista[27].nodeValue)

// Aula 15
// console.log(
//     document.getElementById("luffy").parentNode.parentNode
// )

// Aula 16
// document.getElementById("btn-listen").addEventListener("click", function(){
//     document.getElementById("titulo").setAttribute("class", "cor")
// })

// document.getElementById("btn-buy").addEventListener("click", function(){
//     document.getElementById("titulo").removeAttribute("class", "cor")
// })

// document.getElementById("btn-add").addEventListener("click", function(){
//     let valor = document.getElementById("titulo").getAttribute("class")
//     console.log(valor)
//     document.getElementById("paragrafo").innerHTML = valor;
// })

// Aula 17
// let titulo = document.querySelector("h1")
// let texto = document.createTextNode("Adicionando texto no título")

// titulo.appendChild(texto)
// titulo.textContent = "Adicionando texto"

// Aula 18 e 19
// let lista = document.getElementsByTagName("ul")[0]
// let lista_itens = lista.children 
// let adicionar_elemento = document.createElement("li")
// adicionar_elemento.textContent = "IAU"
// lista.insertBefore(adicionar_elemento, lista_itens[2])

// let lista_2 = document.getElementsByTagName("ul")[1]
// let lista_itens_2 = lista_2.children 
// let adicionar_elemento_2 = document.createElement("li")
// adicionar_elemento_2.textContent = "UFES"
// lista_2.replaceChild(adicionar_elemento_2, lista_itens_2[1])


// console.log(lista_2)