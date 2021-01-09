import React from 'react'
import { Card,Container, Row, Form, Col, Button} from 'react-bootstrap'

function CenterFacilities() {
    return (
        <>
         <Container>
                  <Col md={10}>
                  <Card bg="light">
                   <Card.Header>Facilities</Card.Header>
                   <Card.Body>
                  
              <Form>
              
              <Form.Group as={Col} ControlId="CFacility">
              <Form.Label>Facility</Form.Label>
              <Form.Control type="text" placeholder="Enter Facility"/>
              </Form.Group>

              <Button variant="danger" className="float-right">
                  Add Facility
              </Button>
              
        
              </Form>
              </Card.Body>
              
              </Card>
              </Col>
              </Container>
              </>
    )
}

export default CenterFacilities
