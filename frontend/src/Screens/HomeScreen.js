import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { useEffect } from 'react';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';
const HomeScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <>
            <h1>Latest Products</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <Row>
                {
                    products.map(p =>
                        <Col sm={12} md={6} lg={4} xl={2} key={p._id}>
                            <Product product={p} />
                        </Col>
                    )
                }
            </Row>}
        </>
    )
}

export default HomeScreen;
