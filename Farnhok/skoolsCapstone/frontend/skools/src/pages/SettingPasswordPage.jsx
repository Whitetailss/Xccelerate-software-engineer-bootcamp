import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { SettingNavBar } from '../component/setting/navBar';
import { SettingPassword } from '../component/setting/password';
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
                            <SettingPassword />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}