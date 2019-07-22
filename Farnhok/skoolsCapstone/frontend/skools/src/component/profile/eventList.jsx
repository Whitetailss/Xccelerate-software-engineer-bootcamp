import React from 'react';
import { connect } from 'react-redux';
import '../../assets/css/profile/eventList.css';
import { Container, Row, Col } from 'reactstrap';

class PureEventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div id='profileEventContainer'>
                <div id='profileEventHeader'>
                    <h5>Event List</h5>
                </div>
                <div id='profileEventList'>
                    {this.props.eventList.map(eventList => {
                        return (
                            <div key={Math.random()} className='profileEventListSchool'>
                                <Container>
                                    <Row>
                                        <Col className='profileEventListSchoolBox' md='12' lg='7'>
                                            <div>
                                                <p className='profileEventListSchoolName'>{eventList.event_name}</p>
                                            </div>
                                            <div>
                                                <p className='profileEventListSchoolName'>Venue: <span>{eventList.event_venus}</span></p>
                                            </div>
                                            <div>
                                                <p className='profileEventListSchoolName'>Date: <span>{eventList.event_date}</span></p>
                                            </div>
                                            <div>
                                                <p className='profileEventListSchoolName'>Status: <span>{eventList.event_status}</span></p>
                                            </div>
                                        </Col>
                                        <Col md='12' lg='5' className='profileEventListEventBox'>
                                            <div className='profileEventListButton'>
                                                <button>Details</button>
                                                <button>Delete</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        )
                    })}
                </div>
            </div>
          );
    }
}
 
const mapStateToProps = (state) => {
    return {
        eventList: state.profile.eventList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // logOut: () => {
        //     dispatch(logOut())
        // }
    }
};

export const ProfileEventList = connect(mapStateToProps, mapDispatchToProps)(PureEventList)