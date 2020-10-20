import routerx from 'express-promise-router';
import ventaController from '../controllers/VentaController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add', auth.verifyVendedor, ventaController.add);

router.get('/query', auth.verifyVendedor, ventaController.query);
router.get('/list', auth.verifyVendedor, ventaController.list);

// router.put('/update', auth.verifyVendedor, ventaController.update);
router.put('/enable', auth.verifyVendedor, ventaController.enable);
router.put('/disable', auth.verifyVendedor, ventaController.disable);

// router.delete('/remove', auth.verifyVendedor, ventaController.remove);

export default router;

