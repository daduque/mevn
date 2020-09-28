import routerx from 'express-promise-router';
import articuloController from '../controllers/ArticuloController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add', auth.verifyAlmacenero, articuloController.add);

router.get('/query', auth.verifyAlmacenero, articuloController.query);
router.get('/queryCode', auth.verifyUser, articuloController.queryCode);
router.get('/list', auth.verifyAlmacenero, articuloController.list);

router.put('/update', auth.verifyAlmacenero, articuloController.update);
router.put('/enable', auth.verifyAlmacenero, articuloController.enable);
router.put('/disable', auth.verifyAlmacenero, articuloController.disable);

router.delete('/remove', auth.verifyAlmacenero, articuloController.remove);

export default router;

