import express from 'express';
const router = express.Router();
import {create, list, read, remove, update} from '../controllers/category'


router.get('/categories', list);

router.get('/category/:slug',read);
router.patch('/category/:slug',update);
router.post('/category', create);
router.delete('/category/:slug',remove);


module.exports = router