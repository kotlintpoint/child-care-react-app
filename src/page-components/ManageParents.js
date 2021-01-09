import React from 'react'
import {Card, Container,Form, Col, Button } from 'react-bootstrap'

function ManageParents() {
    return (
        <>
          <Container>
            <Col md={11}>
      <Card border="secondary" bg="light" text="dark">
        <Card.Header>
              <h3>Manage Parents</h3>

        </Card.Header>
        <Card.Body>
              <Form>
                          
                    <Form.Row>
                      <Form.Group as={Col} controlId="f_name">
                        <Form.Label>Father Name</Form.Label>
                        
                        <Form.Control type="text" placeholder="Enter Father's Name" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="m_name">
                        <Form.Label>Mother Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mother's Name" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="child_name">
                        <Form.Label>Child Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Child's Name" />
                      </Form.Group>
                    </Form.Row>

                      <Form.Group controlId="c_detail">
                       <Form.Label>Contact Details</Form.Label>
                       <Form.Control type="number" placeholder="+91 1234567890" />
                      </Form.Group>

                    <Form.Row>
                      <Form.Group as={Col} controlId="idproof">
                        <Form.Label>ID Proof</Form.Label>
                        <Form.Control as="select" >
                          <option>Select...</option>
                          <option>AADHAR CARD</option>
                          <option>RATION CARD</option>
                          <option>PAN CARD</option> 
                          <option>PASSPORT</option>
                          <option>ELECTION CARD</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="id_input">
                      <Form.Label>ID No.</Form.Label>
                      <Form.Control placeholder="Enter ID Number" />
                    </Form.Group>

                    </Form.Row>

                    <Form.Group  controlId="add_detail">
                      <Form.Label>Address</Form.Label>
                      <Form.Control as="textarea" placeholder="Enter Address here" />
                    </Form.Group>

                    <Form.Row>

                      <Form.Group as={Col} controlId="Country_detail">
                        <Form.Label>Country</Form.Label>
                        <Form.Control as="select" >
                          <option>Select...</option>
                          <option>India</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="State_detail">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                          <option>Select...</option>
                          <option>Andaman and Nicobar Islands</option>
                          <option>Andhra Pradesh</option>
                          <option>Arunachal Pradesh</option>
                          <option>Assam</option>
                          <option>Bihar</option>
                          <option>Chandigarh</option>
                          <option>Chandigarh</option>
                          <option>Dadra and Nagar Haveli</option>
                          <option>Daman and Diu</option>
                          <option>Delhi</option>
                          <option>Goa</option>
                          <option>Gujarat</option>
                          <option>Haryana</option>
                          <option>Himachal Pradesh</option>
                          <option>Jammu and Kashmir</option>
                          <option>Jharkhand</option>
                          <option>Karnataka</option>
                          <option>Kerala</option>
                          <option>Lakshadweep</option>
                          <option>Madhya Pradesh</option>
                          <option>Maharashtra</option>
                          <option>Manipur</option>
                          <option>Meghalaya</option>
                          <option>Mizoram</option>
                          <option>Nagaland</option>
                          <option>Orissa</option>
                          <option>Pondicherry</option>
                          <option>Punjab</option>
                          <option>Rajasthan</option>
                          <option>Sikkim</option>
                        </Form.Control>  
                       
                      </Form.Group>

                      

                      <Form.Group as={Col} controlId="city_detail">
                        <Form.Label>City/Village</Form.Label>
                        <Form.Control type="text" placeholder="Enter City/Village">
                          
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="zip_detail">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" placeholder="6-digit only"/>
                      </Form.Group>
                    </Form.Row>

                    

                    <Button variant="danger" className="float-right">
                      Add Details
                    </Button>
               </Form>
        </Card.Body>
      </Card>
      </Col>

    </Container>
        </>
    )
}

export default ManageParents
