import { useState } from "react";
// import bootstrap components
import { Container, Form, Button, Table } from "react-bootstrap";

// import form handler
import { useForm } from "react-hook-form";

// firebase imports
import {  collection, addDoc } from "firebase/firestore";
import db from "../../controller/Config";

// 
import { Redirect } from "react-router";

const Survey = () => {
    const {register, handleSubmit, formState: {errors} } = useForm();
    const [redirect, setRedirect] = useState(false)
    const onSubmit = data =>{

        if(errors !== " "){
            console.log(data)
            try{   
                const docRef = addDoc(collection(db, "surveys"),{
                    survey: data
                });
                console.log("Document witten with ID : ", docRef)
                setRedirect(true)
            }catch (error){
                console.log(error);
                console.log(errors);
            } 
        }else{
            console.log(errors)
        }
       
    }
    if(redirect) return <Redirect to="/"/>
    
    return (
        <div className="survey py-5 mb-5">
            <Container>
                <h2 className="mb-3">Please fill in the form</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Personal Details</h1>
                    {/* PERSONAL DETAILS RESPONSES */}
                    <div className="personal-details responses">
                        <Form.Group>
                            <Form.Label>
                                Surname
                                <Form.Control type="text" {...register("surname", {pattern: /^[A-Za-z]+$/i, required: true})}/>
                                <div className="line"></div>
                                <div className="display-errors">
                                    {errors.surname && <span>Invalid surname</span>}
                                </div>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                First Names
                                <Form.Control type="text" required {...register("firstnames", {pattern: /^[A-Za-z]+$/i, required: true})}/>
                                <div className="line"></div>
                                <div className="display-errors">
                                    {errors.firstnames && <span>Invalid surname</span>}
                                </div>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Contact Number
                                <Form.Control className="contact" type="number" {...register("contactNo", {pattern: /^[0-9]+$/i, required: true, maxLength: 10, minLength: 10})}/>
                                <div className="line"></div>
                                <div className="display-errors">
                                    {errors.contactNo && <span>Invalid contact number</span>}
                                </div>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Date
                                <Form.Control className="date-picker" type="date" {...register("date", {required: true})}/>
                                <div className="line"></div>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Age
                                <Form.Control className="age-input" type="number" min="5" max="120" {...register("age")}/>
                                <div className="line age-input"></div>
                            </Form.Label>
                        </Form.Group>
                    </div>

                    <h1 className="mt-3">What is your favourite food? (You can choose more than 1 answer)</h1>

                    {/* CHECKBOX FOOD RESPONSES */}
                    <div className="foods responses">

                        <div class="form-check">
                            
                            <label class="form-check-label" for="exampleCheck1"><input type="checkbox" className="form-check-input" value="Pizza" {...register('foods')}/>Pizza</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" value="Pasta" {...register('foods')}/>
                            <label class="form-check-label" for="exampleCheck1">Pasta</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" value="Pap and Wors"{...register('foods')}/>
                            <label class="form-check-label" for="exampleCheck1">Pap and Wors</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" value="Chicken Stir Fry" {...register('foods')}/>
                            <label class="form-check-label" for="exampleCheck1">Chicken Stir Fry</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" value="Beef Stir Fry" {...register('foods')}/>
                            <label class="form-check-label" for="exampleCheck1">Beef Stir Fry</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" value="Other" {...register('foods')}/>
                            <label class="form-check-label" for="exampleCheck1">Other</label>
                        </div>
                        {}
                        
                    </div>

                    <h1 className="mt-4">On a scale of 1 to 5 indicate whether you strongly agree to strongly disagree</h1>

                    {/* RATED DATA TABLE */}
                    <div className="rate-table">
                        <Table striped bordered responsive size="lg">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Strongly Agree (1)</th>
                                    <th>Agree (2)</th>
                                    <th>Neutral (3)</th>
                                    <th>Disagree (4)</th>
                                    <th>Strongly Disagree (5)</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr >
                                    <td>I like to eat out</td>
                                    <td>
                                        <input type="radio" className="form-radio-input" required value="1" {...register('eatout')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="2" {...register('eatout')} />
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="3" {...register('eatout')}
                                        />
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="4" {...register('eatout')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="5" {...register('eatout')}/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>I like to watch movies</td>
                                    <td>
                                        <input type="radio" className="form-radio-input" required value="1" {...register('watchmovies')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="2" {...register('watchmovies')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="3" {...register('watchmovies')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="4" {...register('watchmovies')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="5" {...register('watchmovies')}/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>I like to watch TV</td>
                                    <td>
                                        <input type="radio" className="form-radio-input" required value="1" {...register('watchtv')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="2" {...register('watchtv')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="3" {...register('watchtv')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="4" {...register('watchtv')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="5" {...register('watchtv')}/>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>I like to listen to the radio</td>
                                    <td>
                                        <input type="radio" className="form-radio-input" required value="1" {...register('listentoradio')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="2" {...register('listentoradio')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="3" {...register('listentoradio')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="4" {...register('listentoradio')}/>
                                    </td>
                                    <td>
                                        <input type="radio" className="form-radio-input" value="5" {...register('listentoradio')}/>
                                    </td>
                                </tr>
                            </tbody> 
                        </Table> 
                    </div>
                    <div className="text-center mt-4">
                        <Button type="submit" className="submit-form m-auto" >Submit</Button>
                    </div>
                    
                </Form>
            </Container> 
        </div>
    );
}

export default Survey;