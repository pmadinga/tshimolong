// import bootstrap components
import { Container, Form, Button, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Survey = () => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data =>{
        console.log(data)
    }
    return (
        <div className="survey py-5">
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Personal Details</h1>
                    
                    <div className="personal-details responses">
                        <Form.Group>
                            <Form.Label>
                                Surname
                                <Form.Control type="text" required {...register("surname")}/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                First Names
                                <Form.Control type="text" required {...register("firstnames")}/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Contact Number
                                <Form.Control type="text" required {...register("contact-number")}/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Date
                                <Form.Control className="date-picker" type="date" required {...register("date")}/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Age
                                <Form.Control className="age-input" type="number" min="5" max="120" {...register("age")}/>
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
                    <div className="rate-table">
                        <Table striped bordered resource size="lg">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Strongly Agree</th>
                                    <th>Agree</th>
                                    <th>Neutral</th>
                                    <th>Disagree</th>
                                    <th>Strongly Disagree</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>I like to eat out</td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="eat-out" required/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="eat-out"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="eat-out"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="eat-out"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="eat-out"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>I like to watch movies</td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="watch-movies"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="watch-movies"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="watch-movies"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="watch-movies"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="watch-movies"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>I like to watch TV</td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="watch-tv"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="watch-tv"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="watch-tv"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="watch-tv"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="watch-tv"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>I like to listen to the radio</td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="listen-to-radio"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="listen-to-radio"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="listen-to-radio"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="listen-to-radio"/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" name="listen-to-radio"/>
                                    </td>
                                </tr>
                            </tbody> 
                        </Table> 
                    </div>
                    <div className="text-center mt-5">
                        <Button type="submit" className="submit-form m-auto" >Submit</Button>
                    </div>
                    
                </Form>
            </Container> 
        </div>
    );
}

export default Survey;