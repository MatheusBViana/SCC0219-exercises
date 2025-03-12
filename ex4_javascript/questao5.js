let library = [
    {   author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {   author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {   author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

// Declaro um novo livro e insiro em library
let newAuthor = prompt("Autor do novo livro: ");
let newTitle = prompt("Título do novo livro: ");
let newBook = { author: newAuthor, title: newTitle, readingStatus: false}
library.push(newBook)

// Percorro library, e caso readingStatus seja falso, eu printo o livro e seus dados
for (let i = 0; i < library.length; i++){
    if(library[i].readingStatus === false){
        document.write("Autor: " + library[i].author + "<br>Título: " + library[i].title + "<br>readingStatus: " + library[i].readingStatus + "<br><br>")
    }
}  