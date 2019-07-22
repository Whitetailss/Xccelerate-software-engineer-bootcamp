import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { ProfileFollowList } from '../component/profile/followList';
import { ProfileEventList } from '../component/profile/eventList';
import '../assets/css/profile/common.css';

export default class ProfilePage extends React.Component {
    render() { 
        return (  
            <div>
                <Container id='profilePageContainer'>
                    <Row>
                        <Col md='6'>
                            <ProfileFollowList/>                      
                        </Col>
                        <Col md='6'>
                            <ProfileEventList/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}