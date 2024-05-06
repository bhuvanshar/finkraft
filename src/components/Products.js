import React, { useState } from 'react'
import { Container, Navbar, Nav, Button, Row, Col, Card, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Products() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
  
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Finkraft</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link as={Link} to="/learnMore">About</Nav.Link>
                
              </Nav>
              <Button variant="outline-success" onClick={
                handleShow}>Login</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
  
              <Button variant="primary" as={Link} to="/AgBoard" onClick={handleClose}>
                Login
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
  
        <Container className="my-5">
          <Row className="align-items-center">
            <Col md={6}>
              <h1>Welcome to Finkraft</h1>
              <p>Learn how Finkraft solved travel linked GST Input challenges for the world’s 6th largest IT services firm.</p>
              <Button as={Link} to="/learnMore" variant="primary" >Learn More</Button>
            </Col>
            <Col md={6}>
              <img src="https://www.finkraftjuniorcyclingteam.com/wp-content/uploads/MG_5734-scaled.jpeg" alt="placeholder" className="img-fluid" />
            </Col>
          </Row>
        </Container>
  
        <Container className="my-5">
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://cdn.tracxn.com/images/seo/social/companies/finkraft-overview-1710013556285.webp" />
                <Card.Body>
                  <Card.Title>Overview</Card.Title>
                  <Card.Text>
                  Finkraft offers advanced SaaS solutions for automated invoice processing and GST compliance.
                  </Card.Text>
                  <Button variant="primary" href='https://finkraft.ai/'>About Finkraft</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://cdn.slidesharecdn.com/ss_thumbnails/pitchdeck-210407165029-thumbnail.jpg?width=640&height=640&fit=bounds" />
                <Card.Body>
                  <Card.Title>Finkraft and AI</Card.Title>
                  <Card.Text>
                 Automatic QR Invoice valitadion by extracting e-invoice data.
                  </Card.Text>
                  <Button variant="primary" href='https://finkraft.ai/'>Click</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://media.licdn.com/dms/image/C5612AQF4zHWT2W5yNQ/article-cover_image-shrink_600_2000/0/1520056027319?e=1720656000&v=beta&t=11uJed744Dqzmw1ntWsAIqaMsDTztxZQ80-g4MQLdgo" />
                <Card.Body>
                  <Card.Title>Renewable energy</Card.Title>
                  <Card.Text>
                  Buying guaranteed renewable energy
                  </Card.Text>
                  <Button variant="primary" href='https://finkraft.ai/'>Go</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
  

        <Container fluid className="p-5 bg-dark text-white text-center">
          <p>© 2024 Finkraft.ai All Right Reserved</p>
        </Container>
      </div>
    );
}
