import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./Home.css";

function Home() {
  return (
    <Row>
        <Col className='d-flex flex-direction-column align-items-center justify-content-center'>
            <div className='home-info'>
                
                <h1>Welcome to CloudChat</h1>
                <p>A responsive chat app made using React, Redux, MongoDB, Express, and Socket.io. Supports user creation, user authentication, log in, group chats, and direct messaging. Fully responsive design using React Bootstrap.</p>
                
                <LinkContainer to='/chat'>
                    <Button variant='success'>
                        Start Here <i className='fas fa-comments home-message-icon'></i>
                    </Button>
                    
                </LinkContainer>
            </div>
        </Col>
        <Col md={6} className="home__bg">
        
        </Col>
    </Row>
  )
}

export default Home