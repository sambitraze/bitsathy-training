import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';
import colors from 'colors';

import ProductRoute from './routes/product.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

//config
const app = express();
dotenv.config();
connectDB();

//routes
app.use('/api/products', ProductRoute);
app.use(notFound);
app.use(errorHandler);
app.get('/', (req, res) => {
    res.send('hi my name is jamasdades');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});