import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';
import Categoria from '../models/categoria';

const router = routerx();

router.post('/add', categoriaController.add);

router.get('/query', categoriaController.query);
router.get('/list', categoriaController.list);

router.put('/update', categoriaController.update);
router.put('/enable', categoriaController.enable);
router.put('/disable', categoriaController.disable);

router.delete('/remove', categoriaController.remove);

export default router;

