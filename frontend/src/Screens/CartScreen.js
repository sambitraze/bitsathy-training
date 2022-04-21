import React from 'react';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Message from '../components/Message';
import products from '..';
import axios from 'axios';


const CartScreen = ({ location, history }) => {
    const { id } = useParams();
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const result = await axios.get(`/api/products/${id}`);
            setProduct(result.data);
        }
        fetchProducts();
    }, []);
    const cartItems = [products]
    return (
        <Row>
            <Col md={8}>
                <h1>Cart Screen</h1>
                {cartItems.length === 0 ? <Message>
                    Your Cart is Empty<Link to='/'>GO back to home</Link></Message>
                    : <ListGroup variant='flush'>
                        {
                            cartItems.map(item =>
                                <ListGroup.Item key={item._id}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/products/${item._id}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>
                                            ${item.price}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>)
                        }</ListGroup>}
            </Col>
            <Col md={2}>
            </Col>
            <Col md={2}>
            </Col>

        </Row>
    )
}


export default CartScreen