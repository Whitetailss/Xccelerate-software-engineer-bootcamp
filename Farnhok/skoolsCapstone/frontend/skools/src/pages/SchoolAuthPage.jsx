import React from 'react';
import { Login } from '../component/schoolCms/login';
// import {connect} from 'react-redux'

// import { SignUp } from '../component/schoolCms/signUp'
// import{Login} from '../component/login';
// import{SignUp} from '../component/signUp';
import {Jumbotron, Button, Container} from 'reactstrap';


export default class SchoolAuthPage extends React.Component {
    render() {
        return (
            <div>

                <Jumbotron className ='hero' fluid>
                    <Container fluid>
                        <h1>Build A Brand for Your School has never been so much easier</h1>
                        <p>Build A Brand for Your School has never been so much easier</p>
                        <hr/>
                        <ul>
                        <li>Inuitive User Interface</li>
                        <li>Consistent Color and Design Scheme</li>
                        <li>Engaging Parents Community</li>
                        </ul>
                        <p className="lead">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </Container>
                </Jumbotron>
                 <Login /> 
                                  
            </div>
        );
    }
}
