import {
    Router
} from 'express'

import productManager from '../../managers/productManager.js';

const router = Router();
const manager = new productManager();

router.get('/', async (req, res) => { 
    res.render('realTimeProducts', { products: manager.getProducts() });
});

export default router;