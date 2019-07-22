import React from 'react';
import {DetailMain} from '../component/detail/main'
import {TeacherInfoDisplay} from '../component/schoolCms/mixInputList'
import {FacilityInfoDisplay} from '../component/schoolCms/mixInputList'

export default class SchoolDetailPage extends React.Component {
    render() { 
        return (  
            <div>
                <DetailMain />
                <TeacherInfoDisplay />
                <FacilityInfoDisplay />
                {/* <Container id='settingPageContainer'>
                    <Row>
                        <Col md='3'>
                            <SettingNavBar/>
                        </Col>
                        <Col md='9'>
                            <SettingEditProfile />
                        </Col>
                    </Row>
                </Container> */}
            </div>
        );
    }
}