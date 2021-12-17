import express from 'express';
import { isAdmin, isAuth, requireSignin } from '../controllers/auth';
import { createUser, read, userById } from '../controllers/user';
const router = express.Router();

router.get('/user/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});
router.get('/user/:userId', requireSignin, isAuth, read)
router.param('userId', userById)

module.exports = router;