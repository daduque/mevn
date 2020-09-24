import routerx from 'express-promise-router';
import articuloController from '../controllers/ArticuloController';

const router = routerx();

router.post('/add', articuloController.add);

router.get('/query', articuloController.query);
router.get('/list', articuloController.list);

router.put('/update', articuloController.update);
router.put('/enable', articuloController.enable);
router.put('/disable', articuloController.disable);

router.delete('/remove', articuloController.remove);

export default router;

