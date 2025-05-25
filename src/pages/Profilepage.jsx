import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const Profilepage = () => {
  return (
    <Container>
        <Row className='justify-content-center mt-5'> 
            <Col md={6}>
             <Card className='shadow'>
                <Card.Body>
                    <Card.Title>Reset Password</Card.Title>
                    <Form>
                        <Form.Group controlId='changePassword'>
                            <Form.Label>New Password</Form.Label>
                            <Form.Control placeholder='Enter your new Password' type='password' required />
                        </Form.Group>
                        <Button type='submit' className='mt-2'>Submit</Button>
                    </Form>
                </Card.Body>
             </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Profilepage