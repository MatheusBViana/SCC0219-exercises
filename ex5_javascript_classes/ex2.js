function checa_dominio(){
    
    let regex = new RegExp("^https:\/\/.*\.usp\.br\/$");

    let url_entrada = window.prompt("Insira alguma URL: ");
    let eh_valida = regex.test(url_entrada)

    if(eh_valida === true){
        window.alert("É uma URL USP válida")
    }else{
        window.alert("Não é uma URL USP válida")
    }
    
}

checa_dominio()