const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    name:  {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    estoque: {
        type: Number,
        required: true
    },
    quantidadeVendida: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    subtipo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    tamanho: {
        type: String
    },
    iluminacao: {
        type: String
    },
    temperatura: {
        type: String
    },
    manutencao: {
        type: String
    },},{collection: 'Product'}    
)

module.exports = mongoose.model("Product", Product);