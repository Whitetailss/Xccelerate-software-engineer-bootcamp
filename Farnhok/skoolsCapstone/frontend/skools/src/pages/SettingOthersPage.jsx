import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { SettingNavBar } from '../component/setting/navBar';
import { SettingOthers } from '../component/setting/others';
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
                            <SettingOthers/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}