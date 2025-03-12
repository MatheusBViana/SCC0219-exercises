'use strict';

const Model = require('../models/product.model');
const axios = require('axios');
const dbo = require('../app');

exports.post = async (req, res) => {
    console.log("passo1");
    console.log(req.body);

    const product = new Model(req.body)

    try{
        console.log("passo2");
        console.log(req.body);

        await product.save();
        console.log("passo3");
    console.log(req.body);


    }catch(err){
        console.log("errou");
        console.log(req.body);

        res.status(400).send({
            message: "falha",
            data: err
        })
    }
    console.log(req.body)
    res.status(201).send({
        message: "Produto Cadastrado."
    });
}

exports.get = async (req, res, next) => {
    var str = req.protocol + '://' + req.get('host') + req.originalUrl;
    var n = str.lastIndexOf('/');
    var resultado = str.substring(n + 1);
    console.log(resultado);
    try{
        const result = await Model.findOne({
            id: resultado
        });
        res.status(200).send(result);
        console.log(result);
    }
    catch(e){
        console.error(e);
    }
}

exports.put = async (req, res, next) => {
    
    try{
        let resp = await axios.get("http://localhost:3000/products/" + req.body.id);
        resp = resp.data;
        const newProduct = new Model(req.body);   
        await newProduct.save()
        res.status(201).send("Produto inserido com sucesso!"); 
    }
    catch(e){
        console.error(e);
    }
}

exports.delete = async (req, res, next) => {
    try{
        const result = await Model.remove(req.body)
        res.status(200).json(result);
    }
    catch(e){
        console.error(e);
    }
}