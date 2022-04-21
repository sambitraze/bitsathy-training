import express from 'express';
const router = express.Router()
import { getUsers,authUser,getUserProfile } from '../controllers/user.js';
import { protect} from '../middleware/authMiddleware.js';
router.get('/', getUsers).post('/', authUser);
router.get('/profile', protect , getUserProfile);

export default router
