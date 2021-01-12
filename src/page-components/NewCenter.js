import React, {useState} from 'react'
import { Card, Container, Row, Form, Col, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { createCenter } from '../_actions'


function NewCenter(props) {
  //console.log(props.user)
    const [center, setCenter] = useState({
        name:"",
        address:"",
        email_id:"",
        phone:"",
        description:"",
        password:""
    })

    const handleChange=(e)=>{
      setCenter({
        ...center,
        [e.target.name]:e.target.value
      })
    }

    return (
        <>
        <p>{JSON.stringify(center)}</p>
         <Container>            
            <Row>
                <Col md={11}>
             <Card border="secondary" bg="light" text="dark">
          <Card.Header><h3>Manage Centers</h3></Card.Header>
          <Card.Body>
          <Form>
              <Form.Group ControlId="CName">
                <Form.Label>Center Name </Form.Label>
                <Form.Control type="text" placeholder="Enter Center Name" 
                name="name" value={center.name} onChange={handleChange} />
              </Form.Group>

              <Form.Group ControlId="CAddress">
                <Form.Label>Address </Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Enter Address"
                name="address" value={center.address} onChange={handleChange} />
              </Form.Group>

              <Form.Row>
              <Form.Group as={Col} ControlId="ManagerName">
                <Form.Label>Manager Name </Form.Label>
                <Form.Control type="text" placeholder="Enter Manager Name"
                 />
              </Form.Group>

              <Form.Group as={Col} ControlId="PhoneNum">
                <Form.Label>Phone Number </Form.Label>
                <Form.Control type="number" placeholder="+91 1234567890"
                name="phone" value={center.phone} onChange={handleChange} />
              </Form.Group>

              <Form.Group as={Col} ControlId="Emailaddress">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="xyz@gmail.com" 
                name="email_id" value={center.email_id} onChange={handleChange}/>
              </Form.Group>
              </Form.Row>

              <Form.Group ControlId="Website">
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" placeholder="www.google.com"
                 />
              </Form.Group>

              <Form.Group ControlId="SocialMedia">
                <Form.Label>Social Media Link</Form.Label>
                <Form.Control type="text" placeholder="www.facebook.com/xyz" />
              </Form.Group>

              <Form.Group ControlId="CDescription">
                <Form.Label>Center Description</Form.Label>
                <Form.Control as="textarea" row={5} placeholder="Enter Description"
                name="description" value={center.description} onChange={handleChange} />
              </Form.Group>

              <Button variant="danger" className="float-right" 
              onClick={()=>props.createUser(center)}>
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
    createUser : (center)=>dispatch(createCenter(center))
  }
}

// Step 3
const connectCenter=connect(mapStateToProps, mapDispatchToProps)

export default connectCenter(NewCenter)
