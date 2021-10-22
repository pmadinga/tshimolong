import { Container, Navbar } from "react-bootstrap";

const SiteHeader = () =>{
    return(
        <div>
            <Navbar className="site-header">
                <Container>
                    <Navbar.Brand className="py-0 m-auto">Tshimolong Surveys</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default SiteHeader;