import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/css/home/stats.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faGraduationCap} from '@fortawesome/free-solid-svg-icons'

export const Stats = () => {
    return (
        <div id='homeStatsContainer'>
            <Container>
                    <Row id='homeStatsBox'>
                        <Col md="6" >
                            <FontAwesomeIcon  size="3x"  icon={faSchool} />
                            <h3>1,033</h3>
                            <h5>Number of Kindergartens and Nursery in Hong Kong</h5>
                        </Col>
                        <Col md="6">
                            <FontAwesomeIcon  size="3x" icon={faGraduationCap} />
                            <h3>174,420</h3>
                            <h5>Number of enrollment 2018/2019 in Hong Kong</h5>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}