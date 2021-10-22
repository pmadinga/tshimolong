
import { Container, Form, Button } from "react-bootstrap";


const Survey = () => {
    return (
        <div className="survey pt-4">
            <Container>
                <Form>
                    <h1>Personal Details</h1>
                    <div className="personal-details">
                        <Form.Group>
                            <Form.Label>
                                Surname
                                <Form.Control type="text"/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                First Names
                                <Form.Control type="text"/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Contact Number
                                <Form.Control type="text"/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Date
                                <Form.Control type="date"/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Age
                                <Form.Control className="age-input" type="number" min="5" max="120"/>
                            </Form.Label>
                        </Form.Group>
                    </div>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container> 
        </div>
    );
}

export default Survey;