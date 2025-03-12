// Ler a entrada
nome = prompt("Insira um Nome");

// Remover os espaços para contar apenas as letras
// \s significa o espaço em branco, então estou selecionando os espaços e removendo-os
length = nome.replace(/\s/g, "").length;
alert(nome +": " + length + " characters");