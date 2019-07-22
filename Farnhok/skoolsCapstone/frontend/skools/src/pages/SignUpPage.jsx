import React from 'react';
import { SignUp } from '../component/signUp';
import {Container, Row, Col} from 'reactstrap';

export default class SignUpPage extends React.Component {
    render() { 
        return (  
            <div>
                <Container>
                    <Row>
                        <Col md="6">
                            <SignUp />
                        </Col>
                        <Col id='homeSearchRightImg' md="6">
                        </Col>
                    </Row>
                </Container>
           </div>
        );
    }
}