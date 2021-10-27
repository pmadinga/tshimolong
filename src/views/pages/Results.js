import { useEffect, useState } from 'react';
// import bootstrap
import { Container, Table } from 'react-bootstrap'

// import charts
import Chart from "react-google-charts";
import Loader from "react-loader-spinner";

// firebase imports
import db from '../../controller/Config';
import {getDocs, collection} from 'firebase/firestore'
import { Link } from 'react-router-dom';

const Results = () =>{

    // hook states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [size, setSize] = useState();
    const [ageAverage, setAverage] = useState();
    const [oldestParticipant, setOldestParticipant] = useState();
    const [youngestParticipant, setYoungestParticipant] = useState();
    
    const [pizzaPerc, setPizzaPerc] = useState();
    const [pastaPerc, setPastaPerc] = useState();
    const [papWors, setPapWors] = useState();
    // initialize arrays
    const ageArr = [];
    const foodsArr = [];

    //queries
    useEffect(() => {
        const getData =  async () => {
            setLoading(true);
            try {
                // instance of the database documents
                const surveyData = await getDocs(collection(db, "surveys"));
                // iterate throu all the documents
                surveyData.forEach((doc) => {
                    ageArr.splice(ageArr.length, 0, parseInt(doc.data().survey.age));
                    foodsArr.splice(foodsArr.length, 0, doc.data().survey.foods);
                    setLoading(true); 
                })

                // append survey arrays into one array
                let concatFoodArr = [];
                for(let i = 0; i < foodsArr.length; i++){
                    concatFoodArr.push(...foodsArr[i])
                }

                console.log(concatFoodArr)
                // SETTING STATES
                // set survey
                setSize(surveyData.size);
                // setAges(ageArr)
                setAverage(() => {
                    let total = 0;
                    for(let i = 0; i < ageArr.length; i++){
                        total += ageArr[i];
                    }
                    return parseFloat((total / ageArr.length)).toFixed(1);
                })
                
                // min and max ages
                setOldestParticipant(Math.max(...ageArr));
                setYoungestParticipant(Math.min(...ageArr));
                
                // set pizza state
                setPizzaPerc(() => {
                    
                    // pizza count
                    let numPizza = 0;
                    // itterate to find people who want pizza
                    for (let i = 0; i < concatFoodArr.length; i++) {
                        if(concatFoodArr[i] === "Pizza"){
                            numPizza++;
                        }
                    }
                    console.log(numPizza)
                    return numPizza
                })

                // set pasta state
                setPastaPerc(() => {
                    // pasta count
                    let numPasta = 0;
                    // itterate to find people who want pasta
                    for(let i = 0; i < concatFoodArr.length; i++){
                        if(concatFoodArr[i] === "Pasta"){
                            numPasta++;
                        }
                    }
                    // console.log(numPasta);
                    return numPasta
                });

                // set pap and wors state
                setPapWors(() =>{
                    // pap and wors count
                    let numPapWors = 0;
                    // iterate to find people with pap and wors
                    for(let i = 0; i < concatFoodArr.length; i++){
                        if(concatFoodArr[i] === "Pap and Wors"){
                            numPapWors++
                        }
                    }
                    return numPapWors
                })
                setLoading(false)  
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(error)
            }
        }
        getData()
    },[])
    
    if(loading) return <Loader
        type="ThreeDots"
        color="#1F4863"
        height={100} 
        width={100}
        className="center"
    />
    if(error) return <p>error :(</p>
    return(
        <div className="results py-3">
            <Container>
    
                <h2>Results</h2>
                <div className="results-table-data">  
                    <Table striped size="md" responsive>
                        <tr>
                            <td>Total number of surveys</td>
                            <td>{size}</td>
                        </tr>
                        <tr>
                            <td>Average age</td>
                            <td>{ageAverage}</td>
                        </tr>
                        <tr>
                            <td>Oldest person who participated in survey</td>
                            <td>{oldestParticipant}</td>
                        </tr>
                        <tr>
                            <td>Youngest person who participated in survey</td>
                            <td>{youngestParticipant}</td>
                        </tr>
                    </Table>
                </div>
                <div className="results-table-data">  
                    <Table striped size="md" responsive>
                        <tr>
                            <td>Percentage of people who like Pizza</td>
                            <td>{(pizzaPerc / size * 100).toFixed(1)}%</td>
                        </tr>
                        <tr>
                            <td>Percentage of people who like Pasta</td>
                            <td>{(pastaPerc / size * 100).toFixed(1)}%</td>
                        </tr>
                        <tr>
                            <td>Percentage of people who like Pap and Wors</td>
                            <td>{(papWors / size * 100).toFixed(1)}%</td>
                        </tr>
                        
                    </Table>
                </div>
                

                <Link to="/" className="submit">ok</Link>
            </Container>
        </div>
    )
}

export default Results;
