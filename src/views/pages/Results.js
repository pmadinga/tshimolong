// import bootstrap
import { Container, Table } from 'react-bootstrap'

// import charts
import Chart from "react-google-charts";

const Results = () =>{
    const perc = 40;

    return(
        <div className="results py-3">
            <Container>
                <h2>Results</h2>
                <div className="results-table-data">  
                    <Table striped size="md" responsive>
                        <tr>
                            <td>Total number of surveys</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Average age</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>Oldest person who participated in survey</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Youngest person who participated in survey</td>
                            <td>9</td>
                        </tr>
                    </Table>
                </div>
                <div className="results-pie-chart">
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Food', 'Percentages'],
                            ['Pizza', perc],
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
                        width={'500px'}
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
