import React, { useState } from 'react'
import { Button, Col, Row, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './MessageForm.css';

function MessageForm() {
    const [message, setMessage] = useState('');

    function getFormattedDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        const day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        return month + '/' + day + '/' + year;
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    
    const user = useSelector((state) => state.user);

    return (
    <>
    <div className='messages-output'>
        {!user && <div className="alert alert-danger">Please log in.</div>}
    </div>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={11}>
                    <Form.Group>
                        <Form.Control type='text' placeholder='Type message here' disabled={!user}></Form.Control>
                    </Form.Group>
                </Col>
                <Col md={1}>
                    <Button variant='primary' type='submit' style={{ width: '100%', backgroundColor: 'blue' }} disabled={!user}>
                        <i className='fas fa-paper-plane' ></i>
                    </Button>
                </Col>
            </Row>
        </Form>
    </>
  )
}

export default MessageForm