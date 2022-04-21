import express from 'express';
const router = express.Router()
import { getProducts, getProductById } from '../controllers/product.js';

router.get('/', getProducts);
router.get('/:id', getProductById);

export default router
