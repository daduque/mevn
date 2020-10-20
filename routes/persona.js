import routerx from 'express-promise-router';
import personaController from '../controllers/PersonaController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add', auth.verifyUser, personaController.add);

router.get('/query', auth.verifyUser, personaController.query);
router.get('/list', auth.verifyUser, personaController.list);
router.get('/listClientes', auth.verifyUser, personaController.listClientes);
router.get('/listProveedores', auth.verifyUser, personaController.listProveedores);

router.put('/update', auth.verifyUser, personaController.update);
router.put('/enable', auth.verifyUser, personaController.enable);
router.put('/disable', auth.verifyUser, personaController.disable);

router.delete('/remove', auth.verifyUser, personaController.remove);

export default router;

