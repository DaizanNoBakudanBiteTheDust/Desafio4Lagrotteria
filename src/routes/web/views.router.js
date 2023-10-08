import {
    Router
} from 'express'
import { productsFilePath } from '../../utils.js';

import ProductManager from '../../managers/productManager.js';


const router = Router();
const manager = new ProductManager(productsFilePath);

router.get('/realTimeProducts', async (req, res) => { 
    res.render('realTimeProducts', { products: manager.getProducts() });
});

export default router;