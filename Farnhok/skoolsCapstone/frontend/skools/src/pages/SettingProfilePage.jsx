import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { SettingNavBar } from '../component/setting/navBar';
import { SettingEditProfile } from '../component/setting/editProfile';
import '../assets/css/setting/common.css'

export default class SearchPage extends React.Component {
    render() { 
        return (  
            <div>
                <Container id='settingPageContainer'>
                    <Row>
                        <Col md='3'>
                            <SettingNavBar/>
                        </Col>
                        <Col md='9'>
                            <SettingEditProfile />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}