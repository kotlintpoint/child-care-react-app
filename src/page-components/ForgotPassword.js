
import React from 'react'
import { Container, Col, Card, Form, Button } from 'react-bootstrap'

function ForgotPassword() {
    return (
        <>
          <Container>
              <Col md={10}>
                  <Card bg="light" border="Secondary" text="dark">
                      <Card.Header> 
                     <h3>Forgot Password</h3> 
                      </Card.Header>
                   <Card.Body>
                   <Form>
                   <Form.Group as={Col} controlId="forgotpass">
                   <Form.Label>You forgot your password? Here you can easily retrieve a new password.</Form.Label>
                   <Form.Control type="email" placeholder="Email"></Form.Control>   
                   <span>Enter your E-Mail</span> 
                   </Form.Group>

                   <Button variant="primary">
                       Request New Password
                   </Button>
                   <br></br>
                   <br></br>
                   <a href="#"><h6>Log-In</h6></a>
                   
                   <a href="#"><h6>Register as a new user</h6></a>
                   </Form>


                   </Card.Body>

                  





                  </Card>


              </Col>
              
              
              </Container>  
        </>
    )
}

export default ForgotPassword
