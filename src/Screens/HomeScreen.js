import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';
export const HomeScreen = () => {
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
