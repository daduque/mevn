import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add', auth.verifyAlmacenero, categoriaController.add);

router.get('/query', auth.verifyAlmacenero, categoriaController.query);
router.get('/list', auth.verifyAlmacenero, categoriaController.list);

router.put('/update', auth.verifyAlmacenero, categoriaController.update);
router.put('/enable', auth.verifyAlmacenero, categoriaController.enable);
router.put('/disable', auth.verifyAlmacenero, categoriaController.disable);

router.delete('/remove', auth.verifyAlmacenero, categoriaController.remove);

export default router;

