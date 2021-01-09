import React from 'react'
import {Card, Container, Form, Col, Button } from 'react-bootstrap';
import { 
    BrowserRouter as 
    Link
    
} from "react-router-dom";

function LogInPage() {
    return (
        <>
            <Container>
              <Col md={10}>
            <Card border="dark" bg="light" text="dark">
            <Card.Header>
              <h3>Admin Login</h3>

        </Card.Header>
        <Card.Body >
              <Form>
                        
                      
                          <Form.Group as={Col} controlId="emailid">
                            <Form.Label>Email</Form.Label>
                        
                            <Form.Control type="email" placeholder="Enter Email" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                      </Form.Group>

                      <a href="#">
                          <h6>Forgot Password</h6></a>
                      <br></br>
                      
      
                    <Button variant="success">
                      Login
                    </Button>
               </Form>
        </Card.Body>
      </Card>
      </Col>
        </Container>
        </>
    )
}

export default LogInPage
