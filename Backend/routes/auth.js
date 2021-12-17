import express from 'express';
import { listUser, signin, signout, signup } from '../controllers/auth';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);
router.get('/users', listUser);

module.exports = router;