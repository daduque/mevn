import models from '../models';
import { model } from 'mongoose';

const aumentarStock = async(idArticulo, cantidad) => {

    let {stock} = await models.Articulo.findOne({_id: idArticulo});
    let newStock = parseInt(stock) + parseInt(cantidad);

    const reg = await model.Articulo.findByIdAndUpdate({_id: idArticulo},{stock: newStock})

};
const disminuirStock = async(idArticulo, cantidad) => {

    let {stock} = await models.Articulo.findOne({_id: idArticulo});
    let newStock = parseInt(stock) - parseInt(cantidad);

    const reg = await model.Articulo.findByIdAndUpdate({_id: idArticulo},{stock: newStock})

};

export default {
    add: async (req, res, next) => {
        try {
            const reg = await models.Ingreso.create(req.body);
            let detalles = req.body.detalles;
            detalles.map(item => {
                aumentarStock(item._id, item.cantidad);
            });
            res.status(200).send(reg);
        } catch(e) {
            res.status(500).send({
                message: 'Error!!'
            });
            next(e);
        }

    },
    query: async (req, res, next) => {
        try {
            const reg = await models.Ingreso.findOne({_id: req.query._id})
            .populate('usuario', {nombre: 1})
            .populate('persona', {nombre: 1});
            if(!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                })
            }else{
                res.status(200).json(reg);
            }
        } catch(e){
            res.status(500).send({
                message: 'Error!!'
            });
            next(e);
        }
    },
    list: async (req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Ingreso.find({$or:[{'num_comprobante': new RegExp(valor, 'i')}, {'serie_comprobante': new RegExp(valor, 'i')}]},{'createdAt': 0})
            .populate('usuario', {nombre: 1})
            .populate('persona', {nombre: 1})
            .sort({'createdAt':-1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Error!!'
            });
            next(e);
        }
    },/*
    update: async (req, res, next) => {
        try {
            const reg = await models.Ingreso.findByIdAndUpdate({_id:req.query._id}, {nombre: req.body.nombre, descripcion: req.body.descripcion})
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Error!!'
            });
            next(e);
        }
    },
    remove: async (req, res, next) => {
        try {
            const reg = await models.Ingreso.findByIdAndDelete({_id:req.query._id});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Error!!'
            });
            next(e);
        }
    },*/
    enable: async (req, res, next) => {
        try {
            const reg = await models.Ingreso.findByIdAndUpdate({_id:req.query._id}, {estado:1});
            let detalles = reg.detalles;
            detalles.map(item => {
                aumentarStock(item._id, item.cantidad);
            });
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Error!!'
            });
            next(e);
        }
    },
    disable: async (req, res, next) => {
        try {
            const reg = await models.Ingreso.findByIdAndUpdate({_id:req.query._id}, {estado:0});
            let detalles = reg.detalles;
            detalles.map(item => {
                disminuirStock(item._id, item.cantidad);
            });
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Error!!'
            });
            next(e);
        }
    }
}