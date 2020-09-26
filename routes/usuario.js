import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';
import auth from '../middlewares/auth'

const router = routerx();

router.post('/add', auth.verifyAdmin, usuarioController.add);
router.post('/login', usuarioController.login);

router.get('/query', auth.verifyAdmin, usuarioController.query);
router.get('/list', auth.verifyAdmin, usuarioController.list);

router.put('/update', auth.verifyAdmin, usuarioController.update);
router.put('/enable', auth.verifyAdmin, usuarioController.enable);
router.put('/disable', auth.verifyAdmin, usuarioController.disable);

router.delete('/remove', auth.verifyAdmin, usuarioController.remove);

export default router;

