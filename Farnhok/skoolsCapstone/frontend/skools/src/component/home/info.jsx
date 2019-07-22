import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/css/home/info.css'

export const Info = () => {
    return (
        <div id='homeInfoContainer'>
            <Container>
                <Row className='homeInfoBox'>
                    <Col className='homeInfoCol'>
                        <h2>One-stop solution for finding kindergartens</h2>
                        <p>KinderGarten is a transparent kindergarten guide website that operates in Hong Kong. We compare all Kindergartens in Hong kong and help you find the best one for you and your kids.</p>
                    </Col>
                </Row>
                <Row className='homeInfoBox'>
                    <Col md="4" className='homeInfoCol'>
                        <h3>Search</h3>
                        <p>Search all Kindergartens in Hong Kong</p>
                    </Col>
                    <Col md="4" className='homeInfoCol'>
                        <h3>Compare</h3>
                        <p>Compare between Kindergartens</p>
                    </Col>
                    <Col md="4" className='homeInfoCol'>
                        <h3>Review</h3>
                        <p>Review other users' comments</p>
                    </Col>
                </Row>
                <Row className='homeInfoBox'>
                    <Col md="4" className='homeInfoCol'>
                        <h3>Follow</h3>
                        <p>Follow your favourite Kindergartens</p>
                    </Col>
                    <Col md="4" className='homeInfoCol'>
                        <h3>Rate</h3>
                        <p>Give rating to other Kindergartens</p>
                    </Col>
                    <Col md="4" className='homeInfoCol'>
                        <h3>Apply</h3>
                        <p>Apply for Kindergartens events</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}