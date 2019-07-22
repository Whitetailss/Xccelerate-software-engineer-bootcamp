import React from 'react';
import { Login } from '../component/login';
import {Container, Row, Col} from 'reactstrap';

export default class LoginPage extends React.Component {
    render() { 
        return (  
            <div>
                <Container>
                    <Row>
                        <Col id='homeSearchLeftImg' md="6">

                        </Col>
                        <Col md="6">
                            <Login />
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}