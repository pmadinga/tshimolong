import { useEffect, useState } from 'react';
// import bootstrap
import { Container, Table } from 'react-bootstrap'

// import charts
import Chart from "react-google-charts";
import Loader from "react-loader-spinner";

// firebase imports
import db from '../../controller/Config';
import {getDocs, collection} from 'firebase/firestore'

const Results = () =>{

    // hook states
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [size, setSize] = useState();
    // const [ages, setAges] = useState([]);
    const [ageAverage, setAverage] = useState();
    const [oldestParticipant, setOldestParticipant] = useState();
    const [youngestParticipant, setYoungestParticipant] = useState()
    const [foods, setFoods] = useState([])
    
    // initialize arrays
    const ageArr = [];
    const foodsArr = [];
    
   
    
   
    //queries
    useEffect(() => {
        const getData =  async () => {
            setLoading(true)
            try {
                // instance of the database documents
                const surveyData = await getDocs(collection(db, "surveys"));
                // iterate throu all the documents
                surveyData.forEach((doc) => {
                    
                    ageArr.splice(ageArr.length, 0, parseInt(doc.data().survey.age));
                    foodsArr.splice(foodsArr.length, 0, doc.data().survey.foods)
                       
                })
                // set states
                setSize(surveyData.size);
                // setAges(ageArr)
                setAverage(() => {
                    let total = 0;
                    for(let i = 0; i < ageArr.length; i++){
                        total += ageArr[i];
                    }
                    return (total / ageArr.length).toFixed(1);
                })
                setOldestParticipant(Math.max(...ageArr));
                setYoungestParticipant(Math.min(...ageArr));
                setFoods(() => {
                    let concatFoodArr = [];
                    for(let i = 0; i < foodsArr.length; i++){
                        concatFoodArr.push(...foodsArr[i])
                       
                    }
                    return concatFoodArr;
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

    // console.log(size)
    // // console.log(ages)
    // console.log(ageAverage)
    // console.log(foods);
    if(loading) return <Loader
        type="ThreeDots"
        color="#1F4863"
        height={100}
        width={100}
        className="center"
        //3 secs
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
                <div className="results-pie-chart">
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={
                            <Loader
                                type="ThreeDots"
                                color="#1F4863"
                                height={100}
                                width={100}
                                className="center"
                                //3 secs
                            />
                            
                        }
                        data={[
                            ['Food', 'Percentages'],
                            ['Pizza', 40],
                            ['Pasta', 40],
                            ['Pap and Wors', 20],
                        
                        ]}
                        options={{
                            title: 'Percentages of food preferences',
                        }}
                        
                    />
                </div>
                <div className="results-bar-char">
                    <Chart
                        width={'550px'}
                        height={'300px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Activity', 'Average' ],
                            ['Eat out', 5],
                            ['Watch movies', 20],
                            ['Watch TV', 16],
                            ['Listen to radio', 12],
                        ]}
                        options={{
                            // Material design options
                            chart: {
                            title: 'Time spending preferences',
                            
                            },
                        }}
                        // For tests
                        rootProps={{ 'data-testid': '2' }}
                    />
                </div>
            </Container>
        </div>
    )
}

export default Results;
