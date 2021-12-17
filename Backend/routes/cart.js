import express from 'express';
import { AddCart, listCart } from '../controllers/cart';
const router = express.Router();



router.get('/cart', listCart);
router.post('/cart', AddCart);




module.exports = router