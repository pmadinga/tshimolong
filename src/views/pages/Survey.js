
import { Container, Form, Button, InputGroup } from "react-bootstrap";


const Survey = () => {
    return (
        <div className="survey pt-4">
            <Container>
                <Form >
                    <h1>Personal Details</h1>
                    
                    <div className="personal-details responses">
                        <Form.Group>
                            <Form.Label>
                                Surname
                                <Form.Control type="text" required  autoComplete="off" />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                First Names
                                <Form.Control type="text" required/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Contact Number
                                <Form.Control type="text" required/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Date
                                <Form.Control className="date-picker" type="date" required/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Age
                                <Form.Control className="age-input" type="number" min="5" max="120"/>
                            </Form.Label>
                        </Form.Group>
                    </div>
                    <h1 className="mt-3">What is your favourite food? (You can choose more than 1 answer)</h1>
                    <div className="foods responses">
                        <Form.Group className="option">
                            <Form.Check/>
                            <Form.Label>Pizza</Form.Label>
                        </Form.Group>
                        <Form.Group >
                            <Form.Check/>
                            <Form.Label>Pasta</Form.Label>
                        </Form.Group>
                        <Form.Group >
                            <Form.Check/>
                            <Form.Label>Pap and Wors</Form.Label>
                        </Form.Group>
                        <Form.Group >
                            <Form.Check/>
                            <Form.Label>Chicken Stir Fry</Form.Label>
                        </Form.Group>
                        <Form.Group >
                            <Form.Check/>
                            <Form.Label>Beef Stir Fry</Form.Label>
                        </Form.Group>
                        <Form.Group >
                            <Form.Check/>
                            <Form.Label>Other</Form.Label>
                        </Form.Group>
                    </div>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container> 
        </div>
    );
}

export default Survey;