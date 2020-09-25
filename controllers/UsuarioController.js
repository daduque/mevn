import models from '../models';
import bcrypt from 'bcryptjs';
import { model } from 'mongoose';

export default {
    add: async (req, res, next) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const reg = await models.Usuario.create(req.body);
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
            const reg = await models.Usuario.findOne({_id: req.query._id});
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
            const reg = await models.Usuario.find({$or:[{'nombre': new RegExp(valor, 'i')}, {'email': new RegExp(valor, 'i')}, {'num_documento': new RegExp(valor, 'i')}]},{'createdAt': 0})
            .sort({'createdAt':-1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Error!!'
            });
            next(e);
        }
    },
    update: async (req, res, next) => {
        try {
            let passw = req.body.password;
            const reg0 = await model.Usuario.findOne({_id: req.body._id});
            if(passw !== reg0.password)
            {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.query._id}, { rol: req.body.rol, nombre: req.body.nombre, tipo_documento: req.body.tipo_documento, num_documento: req.body.num_documento, direccion: req.body.direccion, telefono: req.body.telefono, email: req.body.email, password: req.body.password})
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
            const reg = await models.Usuario.findByIdAndDelete({_id:req.query._id});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Error!!'
            });
            next(e);
        }
    },
    enable: async (req, res, next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.query._id}, {estado:1});
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
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.query._id}, {estado:0});
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Error!!'
            });
            next(e);
        }
    },

    login: async (req, res, next) => {
        try{
            let user = await models.Usuario.findOne({email: req.body.email});
            if(user){
                //Existe un usuario con el email ingresado
                let match = await bcrypt.compare(req.body.password, user.password)
                if (match){
                    res.json('Password correcto');
                }else{
                    res.status(404).send({
                        message: 'Password incorrecto'
                    })
                }
            }else{
                res.status(404).send({
                    message: 'No existe el usuario'
                })
            }
        } catch(e){
            res.status(500).send({
                message: 'Error!!'
            });
            next(e);
        }
    }
}