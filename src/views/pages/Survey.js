
import { Container, Form, Button } from "react-bootstrap";


const Survey = () => {
    return (
        <div className="survey pt-4">
            <Container>
                <Form autoComplete="off" autoComplete="off">
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
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Pizza</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Pasta</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Pap and Wors</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Chicken Stir Fry</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Beef Stir Fry</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Other</label>
                        </div>
                    </div>
                    <h1 className="mt-4">On a scale of 1 to 5 indicate whether you strongly agree to strongly disagree</h1>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container> 
        </div>
    );
}

export default Survey;