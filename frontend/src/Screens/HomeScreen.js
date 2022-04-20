import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products2 from '../products';
import Product from '../components/Product';
import { useState, useEffect } from 'react';
import axios from 'axios';
const HomeScreen = () => {
    const [products, setProduct] = useState([...products2]);
    useEffect(() => {
        const fetchProducts = async () => {
            const result = await axios.get('http://localhost:4000/api/products');
            setProduct(result.data);
        }
        fetchProducts();
    }, []);
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {
                    products.map(p => 
                    <Col sm={12} md={6} lg={4} xl={2} key={p._id}>
                        <Product product={p} />
                    </Col> 
                    )
                }
            </Row>
        </>
    )
}

export default HomeScreen;
