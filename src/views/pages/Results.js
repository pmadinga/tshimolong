import { useEffect, useState } from 'react';
// import bootstrap
import { Container, Table } from 'react-bootstrap'

// import loader
import Loader from "react-loader-spinner";

// firebase imports
import db from '../../controller/Config';
import {getDocs, collection} from 'firebase/firestore'
import { Link } from 'react-router-dom';

const Results = () =>{

    // hook states
    // loading and error state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // ages state
    const [size, setSize] = useState();
    const [ageAverage, setAverage] = useState();
    const [oldestParticipant, setOldestParticipant] = useState();
    const [youngestParticipant, setYoungestParticipant] = useState();
    // favourite foods states
    const [numPizza, setNumPizza] = useState();
    const [numPasta, setNumPasta] = useState();
    const [numPapWors, setNumPapWors] = useState();
    // time spending preferences
    const [numEatout, setNumEatout] = useState();
    const [numWatchMovies, setNumWatchMovies] = useState();
    const [numWatchTv, setNumWatchTv] = useState();
    const [numListenToRadio, setNumListenToRadio] = useState();

    //queries
    useEffect(() => {
        const getData =  async () => {
             // initialize base arrays
            const ageArr = [];
            const foodsArr = [];
            const eatoutArr = [];
            const watchMoviesArr = [];
            const watchTvArr = [];
            const listenToRadioArr = [];
            setLoading(true);
            try {
                // instance of the database documents
                const surveyData = await getDocs(collection(db, "surveys"));
                // iterate throu all the documents
                surveyData.forEach((doc) => {
                    // map database response to defined arrays
                    ageArr.splice(ageArr.length, 0, parseInt(doc.data().survey.age));
                    foodsArr.splice(foodsArr.length, 0, doc.data().survey.foods);
                    eatoutArr.splice(eatoutArr.length, 0, parseInt(doc.data().survey.eatout));
                    watchMoviesArr.splice(watchMoviesArr.length, 0, parseInt(doc.data().survey.watchmovies));
                    watchTvArr.splice(watchTvArr.length, 0, parseInt(doc.data().survey.watchtv));
                    listenToRadioArr.splice(listenToRadioArr.length, 0, parseInt(doc.data().survey.listentoradio));
                    setLoading(true); 
                })

                // append survey food arrays into one array
                let concatFoodArr = [];
                for(let i = 0; i < foodsArr.length; i++){
                    concatFoodArr.push(...foodsArr[i])
                }
                // console.log(concatFoodArr)

                // append all eatout rating into one array
                let concatEatoutArr = [];
                for(let i = 0; i < eatoutArr.length; i++){
                    concatEatoutArr.push(eatoutArr[i]);
                } 
                // console.log(concatEatoutArr);

                // append all watch movies rating into into one array
                let concatWatchMovies = [];
                for(let i = 0; i < watchMoviesArr.length; i++){
                    concatWatchMovies.push(watchMoviesArr[i]);
                } 
                // console.log(concatWatchMovies);

                // append all watch TV rating into into one array
                let concatWatchTvArr = [];
                for(let i = 0; i < watchTvArr.length; i++){
                    concatWatchTvArr.push(watchTvArr[i]);
                } 
                // console.log(concatWatchTvArr);

                // append all listen to radion rating into into one array
                let concatListenToRadioArr = [];
                for(let i = 0; i < listenToRadioArr.length; i++){
                    concatListenToRadioArr.push(listenToRadioArr[i]);
                } 
                // console.log(concatListenToRadioArr);

                // SETTING STATES

                // set survey size
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
                setNumPizza(() => {
                    if(concatFoodArr.length === 0) return 0
                    // pizza count
                    let numPizza = 0;
                    // itterate to find people who want pizza
                    for (let i = 0; i < concatFoodArr.length; i++) {
                        if(concatFoodArr[i] === "Pizza"){
                            numPizza++;
                        }
                    }
                    // console.log(numPizza)
                    return numPizza
                })

                // set pasta state
                setNumPasta(() => {
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
                setNumPapWors(() =>{
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

                //accumulate rating  
                setNumEatout(() =>{
                    return eatoutArr.reduce((a, b) => a + b, 0)
                });
                setNumWatchMovies(() => {
                    return watchMoviesArr.reduce((a, b) => a + b, 0)
                })
                setNumWatchTv(() => {
                    return watchTvArr.reduce((a, b) => a + b, 0)
                })
                setNumListenToRadio(() => {
                    return listenToRadioArr.reduce((a, b) => a + b, 0)
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
    if(error) return <p className>error :(</p>
    return(
        <div className="results pt-2 pb-4">
            <Container>
    
                <h2>Results</h2>
                <div className="results-table-data home">  
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
                <div className="results-table-data home">  
                    <Table striped size="md" responsive>
                        <tr>
                            <td>Percentage of people who like Pizza</td>
                            <td>{(numPizza / size * 100).toFixed(1)}%</td>
                        </tr>
                        <tr>
                            <td>Percentage of people who like Pasta</td>
                            <td>{(numPasta / size * 100).toFixed(1)}%</td>
                        </tr>
                        <tr>
                            <td>Percentage of people who like Pap and Wors</td>
                            <td>{(numPapWors / size * 100).toFixed(1)}%</td>
                        </tr>
                        
                    </Table>
                </div>
                <div className="results-table-data home">  
                    <Table striped size="md" responsive>
                        <tr>
                            <td>People like to eat out</td>
                            <td>{parseFloat(numEatout / size).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>People like to watch movies:</td>
                            <td>{parseFloat(numWatchMovies / size).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>People like to watch TV</td>
                            <td>{parseFloat(numWatchTv / size).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>People like to listen to the radio</td>
                            <td>{parseFloat(numListenToRadio / size).toFixed(2)}</td>
                        </tr>
                    </Table>
                </div>
                

                <Link to="/" className="view-survey nav-link m-auto my-4">OK</Link>
            </Container>
        </div>
    )
}

export default Results;
