"use strict";

class BankAccount {
    #balance;
    #client;

    constructor() {
        this.#balance = 0;
        this.#client = undefined;
    }

    get balance() {
        return this.#balance;
    }

    get client() {
        return this.#client
    }

    set balance(saldo) {
        this.#balance = saldo;
    }

    set client(novo_cliente) {
        if (this.#client === undefined) {
            this.#client = novo_cliente;
        }
    }

    depositar(deposito) {
        this.#balance += Number(deposito)
    }

    lucro_juros(juros) {
        let money_added = this.#balance * (Number(juros)/100);
        this.#balance += money_added
    }

    sacar(saque) {
        this.balance -= saque;
    }

}

class Client{
    #name;
    #address;

    constructor(name, address){
        this.#name = name;
        this.#address = address;
    }

    get name(){
        return this.#name;
    }
}

function nova_conta(){

    let name = window.prompt("Digite seu nome: ");
    let address = window.prompt(" Digite seu endereço: ");
    let client = new Client(name, address);

    let conta_bancaria = new BankAccount();
    conta_bancaria.client = client;

    return conta_bancaria;
}

function depositar(conta_bancaria) {
    let deposito = window.prompt("Digite a quantia que você quer depositar: ")
    conta_bancaria.depositar(deposito);

    window.alert(conta_bancaria.client.name + ", você tem: R$" + conta_bancaria.balance + " na sua conta")
}

function lucro_juros(conta_bancaria) {
    let juros = window.prompt("Digite a quantidade de juros: ");
    conta_bancaria.lucro_juros(juros);

    window.alert(conta_bancaria.client.name + ", você tem: R$" + conta_bancaria.balance + " na sua conta")
}

function sacar(conta_bancaria) {
    let deposito = window.prompt("Digite a quantia que você quer sacar: ");
    conta_bancaria.sacar(deposito);

    window.alert(conta_bancaria.client.name + ", você sacou R$" + deposito +" e agora seu saldo é de R$" + conta_bancaria.balance)
}

let conta = nova_conta()
depositar(conta)
lucro_juros(conta)
sacar(conta)