import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';

const router = routerx();

router.post('/add', usuarioController.add);
router.post('/login', usuarioController.login);

router.get('/query', usuarioController.query);
router.get('/list', usuarioController.list);

router.put('/update', usuarioController.update);
router.put('/enable', usuarioController.enable);
router.put('/disable', usuarioController.disable);

router.delete('/remove', usuarioController.remove);

export default router;

