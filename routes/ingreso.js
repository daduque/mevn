import routerx from 'express-promise-router';
import ingresoController from '../controllers/IngresoController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add', auth.verifyAlmacenero, ingresoController.add);

router.get('/query', auth.verifyAlmacenero, ingresoController.query);
router.get('/list', auth.verifyAlmacenero, ingresoController.list);

// router.put('/update', auth.verifyAlmacenero, ingresoController.update);
router.put('/enable', auth.verifyAlmacenero, ingresoController.enable);
router.put('/disable', auth.verifyAlmacenero, ingresoController.disable);

// router.delete('/remove', auth.verifyAlmacenero, ingresoController.remove);

export default router;

