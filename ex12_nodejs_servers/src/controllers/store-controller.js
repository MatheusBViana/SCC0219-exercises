'use strict';

let db = {};

exports.get = (req, res) => {
    const id = req.params.id;
    res.status(200).send({
        data: db[id]
    });
};

exports.put = (req, res) => {
    const id = req.params.id;
    db[id] = req.body;
    res.status(201).send({
        id: id, 
        item: req.body
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    delete db[id];
    res.status(200).send({
        id: 'deleted'
    });
};