import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Col, ListGroup, Row, Form } from 'react-bootstrap';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Message from '../components/Message';
import { addToCart, removeCartItem } from '../actions/cartActions';
import { useNavigate } from 'react-router-dom';


const CartScreen = () => {
    const navigate = useNavigate();
    const { id, qty } = useParams();
    const dispatch = useDispatch();
    const productId = id;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    useEffect(() => {
        if (productId) {
            dispatch(
                addToCart(productId, qty)
            )
        }
    }, [dispatch, productId, qty]);


    const removeCartItemHandler = (productId) => {
        // dispatch(removeCartItem(productId));
    }
    const checkoutHandler = () => {
        navigate("/login?redirect=shipping")
    }
    return (
        <Row>
            <Col md={8}>
                <h1>Cart Screen</h1>
                {cartItems.length === 0 ? <Message>
                    Your Cart is Empty<Link to='/'>GO back to home</Link></Message>
                    : <ListGroup variant='flush'>
                        {
                            cartItems.map(item =>
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>
                                            ${item.price}
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                {[...Array(item.countInStock).keys()].map((x) => (<option key={x + 1} value={x + 1}>{x + 1}</option>))}</Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            <Button type='button' variant='danger' onClick={removeCartItemHandler(item.product)}><i className='fas fa-trash'></i></Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>)
                        }</ListGroup>}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}) itmes</h2>
                            <h3>${cartItems.reduce((acc, item) => acc + (Number(item.qty) * item.price), 0).toFixed(2)}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' variant='success' disabled={cartItems.length === 0} onClick={checkoutHandler}>Checkout</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col md={2}>
            </Col>

        </Row>
    )
}


export default CartScreen