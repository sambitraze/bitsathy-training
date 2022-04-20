const express = require('express');
// const connectDB = require('./config/db.js');
const products = require('./data/products');

// const ProductRoute = require('./routes/product');

//app intialization
const app = express();

// connectDB

//routes
// app.use('/api/products', ProductRoute);
app.get('/', (req, res) => {
    res.send('hi my name is jamasdades');
});

app.get('/api/products', (req, res) => {
    res.json(products)
});

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find(product => product._id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
})

//connect to live server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});