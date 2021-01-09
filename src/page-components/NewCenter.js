import React from 'react'
import { Card, Container, Row, Form, Col, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { createCenter } from '../_actions'


function NewCenter(props) {
  console.log(props.user)
    return (
        <>
         <Container>
            
            <Row>
                <Col md={11}>
             <Card border="secondary" bg="light" text="dark">
          <Card.Header><h3>Manage Centers</h3></Card.Header>
          <Card.Body>
          <Form>
              <Form.Group ControlId="CName">
                <Form.Label>Center Name </Form.Label>
                <Form.Control type="text" placeholder="Enter Center Name" />
              </Form.Group>

              <Form.Group ControlId="CAddress">
                <Form.Label>Address </Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Enter Address" />
              </Form.Group>

              <Form.Row>
              <Form.Group as={Col} ControlId="ManagerName">
                <Form.Label>Manager Name </Form.Label>
                <Form.Control type="text" placeholder="Enter Manager Name" />
              </Form.Group>

              <Form.Group as={Col} ControlId="PhoneNum">
                <Form.Label>Phone Number </Form.Label>
                <Form.Control type="number" placeholder="+91 1234567890" />
              </Form.Group>

              <Form.Group as={Col} ControlId="Emailaddress">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="xyz@gmail.com" />
              </Form.Group>
              </Form.Row>

              <Form.Group ControlId="Website">
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" placeholder="www.google.com" />
              </Form.Group>

              <Form.Group ControlId="SocialMedia">
                <Form.Label>Social Media Link</Form.Label>
                <Form.Control type="text" placeholder="www.facebook.com/xyz" />
              </Form.Group>

              <Form.Group ControlId="CDescription">
                <Form.Label>Center Description</Form.Label>
                <Form.Control as="textarea" row={5} placeholder="Enter Description" />
              </Form.Group>

              <Button variant="danger" className="float-right" 
              onClick={props.createUser}>
                Add Center
              </Button>
             </Form>
             </Card.Body>
             </Card>
             </Col>
            </Row>
        </Container>


        </>
    )
}
// Step 1
const mapStateToProps =(state)=>{
  return {
    user : state.userReducer
  }
}
// Step 2
const mapDispatchToProps=(dispatch)=>{
  return {
    createUser : ()=>dispatch(createCenter({
    
        name:"test123",
        address:"test",
        email_id:"test123",
        phone:"123123",
        description:"test",
        password:"test"
    
    }))
  }
}

// Step 3
const connectCenter=connect(mapStateToProps, mapDispatchToProps)

export default connectCenter(NewCenter)
