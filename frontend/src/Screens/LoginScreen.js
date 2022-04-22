import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Con } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import { redirect } from 'express/lib/response';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirect = ""
    return (
        <Container>
            <h1>Sign In</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant='primary' type='submit'>Sign In</Button>
            </Form>
            <Row>
                <Col>
                    New Customer? <Link to={redirect ? '/register?redirect=${redirect}': '/register'}>Register</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginScreen
