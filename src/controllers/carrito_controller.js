const express = require('express');
const router = express.Router();
const conn = require('../../index');
const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn) =>{
        conn.getConnection('select * from productos', (err, carritoItems) =>{
            if(err){
                res.json(err);
            }
            res.render('Carrito', {
                data: carritoItems
            });
        });
    });
};

module.exports = controller;