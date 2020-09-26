import tokenService from '../services/token';

export default{

    verifyUser: async(req, res, next) => {
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No existe token'
            })
        }else{
            const response = await tokenService.decode(req.headers.token);
            if(response.rol === 'Administrador' || response.rol === 'Vendedor' || response.rol === 'Almacenero'){
                next();
            }else{
                return res.status(403).send({
                    message: 'Usuario no autorizado'
                });
            }
        }
    },

    verifyAdmin: async(req, res, next) => {
        if(!req.headers.token){
            return res.status(404).send({
                message: 'No existe token'
            })
        }else{
            const response = await tokenService.decode(req.headers.token);
            if(response.rol === 'Administrador'){
                next();
            }else{
                return res.status(403).send({
                    message: 'Usuario no autorizado'
                });
            }
        }

    },

    verifyAlmacenero: async(req, res, next) => {

        if(!req.headers.token){
            return res.status(404).send({
                message: 'No existe token'
            })
        }else{
            const response = await tokenService.decode(req.headers.token);
            if(response.rol === 'Administrador' || response.rol === 'Almacenero'){
                next();
            }else{
                return res.status(403).send({
                    message: 'Usuario no autorizado'
                });
            }
        }

    },

    verifyVendedor: async(req, res, next) => {

        if(!req.headers.token){
            return res.status(404).send({
                message: 'No existe token'
            })
        }else{
            const response = await tokenService.decode(req.headers.token);
            if(response.rol === 'Administrador' || response.rol === 'Vendedor'){
                next();
            }else{
                return res.status(403).send({
                    message: 'Usuario no autorizado'
                });
            }
        }
    },
}