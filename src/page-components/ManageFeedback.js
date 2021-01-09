import React from 'react'
import {Card, Container, Form, Col, Button} from 'react-bootstrap'

function ManageFeedback() {
    return (
        <>
         <Container>
            <Card border="success" bg="light" text="dark">
        <Card.Header>
              <h3>Feedback Form</h3>

        </Card.Header>
        <Card.Body>
                <Form>
                    <Form.Row>
                <Form.Group as={Col} controlId="f_name">
                            <Form.Label>Full Name</Form.Label>
                        
                            <Form.Control type="text" placeholder="Enter Full Name" />
                     </Form.Group>
                     <Form.Group as={Col} controlId="l_name">
                            <Form.Label>E-Mail</Form.Label>
                        
                            <Form.Control type="email" placeholder="xyz@gmail.com" />
                     </Form.Group>    
                     </Form.Row>  
                      
                     <Form.Group as={Col} controlId="feedback">
                            <Form.Label>FeedBack By Parents</Form.Label>
                        
                            <Form.Control type="text" placeholder=" Give feedback here... " />
                     </Form.Group>

                     
                     <Button variant="success">Submit FeedBack</Button>
                     
                
               </Form>
        </Card.Body>
      </Card>
        </Container> 
        </>
    )
}

export default ManageFeedback
