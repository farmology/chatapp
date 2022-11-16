import React, { useState } from 'react'
import { Button, Col, Container, Row, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Signup.css'
import defaultImg from '../assets/almond.png'

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    const [image, setImage] = useState(null);
    const [uploadingImg, setUploadingImg] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    function handleSignup(e) {
        e.preventDefault();
    }

    function validateImg(e) {
        const file = e.target.files[0];
        if (file.size >= 1048576) {
            return alert('Max img size is 1mb')
        } else {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

  return (
    <Container>
    <Row>
        <Col md={5} className='signup__bg' ></Col>
        <Col md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
    <Form style={{ width: '80%', maxWidth: 500 }} onSubmit={handleSignup} >
        <h1 className='text-center'>Create account</h1>
        <div className='signup-profile-pic__container'>
            <img src={ imagePreview || defaultImg} className='signup-profile-pic'/>
            <label htmlFor='image-upload' className='image-upload-label'>
                <i className='fas fa-plus-circle add-picture-icon'></i>
            </label>
            <input type='file' id='image-upload' hidden accept='image.png, image/jpeg' onChange={validateImg} />
        </div>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name}/>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create account
      </Button>
      <div className="py-4">
        <p className="text-center">
            Already have an account? <Link to='/signup' >Login</Link>
        </p>
      </div>
    </Form>
    </Col>
    </Row>
    </Container>
  )
}

export default Signup