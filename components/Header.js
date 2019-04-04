import { Container, Row, Col } from 'react-bootstrap';
import '../static/css/bootstrap.min.css';
import '../static/css/style.css';
import Cart from './Cart';

const Header = () => {
    return(
        <React.Fragment>
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col>Left</Col>
                    <Col>
                        <h3 className="text-center">Logo here</h3>
                    </Col>
                    <Col>
                        <Cart />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Header;