import { Nav, Row, Col, Container } from "react-bootstrap";

const Home = () =>{
    return(
        <div className="home m-auto">
            <Container className="center m-auto">
                
                <Row className="links m-auto">
                    <Col sm="12" md="6" lg="6" className="m-auto">
                        <Nav.Link href="/survey" className="fill-survey m-auto my-2">Fill out survey</Nav.Link>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                        <Nav.Link href="/results" className="view-survey m-auto my-2">View Survey results</Nav.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;