import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./Home.css";

function Home() {
  return (
    <Row className="home__bg">
        <Col className='d-flex flex-direction-column align-items-center justify-content-center'>
            <div className='home-info px-5'>
                
                <h1>Welcome to CloudChat</h1>
                <p>A responsive chat app made using React, Redux, MongoDB, Express, and Socket.io. Supports user creation, user authentication, log in, group chats, and direct messaging. Fully responsive design using React Bootstrap.</p>
                
                <LinkContainer to='/chat'>
                    <Button variant='success'>
                        Start Here <i className='fas fa-comments home-message-icon'></i>
                    </Button>
                    
                </LinkContainer>
            </div>
        </Col>
        {/* <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col> */}
    </Row>
  )
}

export default Home