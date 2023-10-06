import {
    Router
} from 'express'

import ProductManager from '../../managers/productManager.js';

const router = Router()
const productManager = new ProductManager();

router.get('/', async (req, res) => { 
    res.render('realTimeProducts', { products: productManager.getProducts() });
});

export default router;