import React from 'react'
import {Card, Container, Form, Col, Button} from 'react-bootstrap'

function Registration() {
    return (
        <>
         <Container>
            <Card border="secondary" bg="light" text="dark">
        <Card.Header>
              <h3>Register</h3>

        </Card.Header>
        <Card.Body>
              <Form>
                        
                    <Form.Row>
                        <Form.Group as={Col} controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name " />
                      </Form.Group>

                      <Form.Group as={Col} controlId="middlename">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Middle Name " />
                      </Form.Group>
                    
                    
                    <Form.Group as={Col} controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                      </Form.Group>

                      
                      </Form.Row>
                 
                      <Form.Row>
                      <Form.Group as={Col} controlId="day">
                      <Form.Label>Date Of Birth</Form.Label>
                      <Form.Control as="select">
                      <option>Day</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                      <option>30</option>
                      <option>31</option>
                      

                      
                      </Form.Control>

                      </Form.Group>

                      <Form.Group as={Col} controlId="month">
                      <Form.Label>.</Form.Label>
                      <Form.Control as="select">
                      <option>Month</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="year">
                      <Form.Label>.</Form.Label>
                      <Form.Control as="select">
                      <option>Year</option>
                      <option>2000</option>
                      <option>1999</option>
                      <option>1998</option>
                      <option>1997</option>
                      <option>1996</option>
                      <option>1995</option>
                      <option>1994</option>
                      <option>1993</option>
                      <option>1992</option>
                      <option>1991</option>
                      <option>1990</option>
                      <option>1989</option>
                      </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="gender">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control as="select">
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      </Form.Control>
                      </Form.Group>


                      </Form.Row>

                      <Form.Row>
                      <Form.Group as={Col} controlId="address">
                        <Form.Label>Address</Form.Label>
                        
                        <Form.Control type="text" placeholder="Enter Address here" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="Contact">
                        <Form.Label>Contact Number</Form.Label>
                        
                        <Form.Control type="number" placeholder="+91 1234567890" />
                      </Form.Group>

                      </Form.Row>
                    
                      <Form.Row>
                      <Form.Group as={Col} controlId="emailid">
                        <Form.Label>Email</Form.Label>
                        
                        <Form.Control type="email" placeholder="Enter Email" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="password">
                        <Form.Label> Create Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter New Password" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="re-password">
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Your Password" />
                      </Form.Group>

                        
                      
                    </Form.Row>
                    
                    <Button variant="danger" className="float-right">
                      Login
                    </Button>
               </Form>
        </Card.Body>
      </Card>
        </Container>

        </>
    )
}

export default Registration
