import express from 'express';
const router = express.Router();
import {createProduct, listProduct, listRelated, readProduct, removeProduct, search, updateProduct} from '../controllers/product'


router.get('/products', listProduct );
router.get('/product/:slug',readProduct);
router.get('/product/:slug',search);
router.patch('/product/:slug',updateProduct);
router.post('/product', createProduct);
router.delete('/product/:slug',removeProduct);




module.exports = router