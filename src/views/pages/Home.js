import { Nav, Row, Col, Container } from "react-bootstrap";

const Home = () =>{
    return(
        <div className="home">
            <Container className="center">
                
                <Row className="links">
                    <Col sm="12" md="6" lg="6" >
                        <Nav.Link href="/survey" className="fill-survey">Fill out survey</Nav.Link>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                        <Nav.Link href="/results" className="view-survey">View Survey results</Nav.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;