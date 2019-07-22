import React from 'react';
import { connect } from 'react-redux';
import '../../assets/css/profile/followList.css'
import { Container, Row, Col } from 'reactstrap';

class PureFollowList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='profileFollowContainer'>
                <div id='profileFollowHeader'>
                    <h5>Follow List</h5>
                </div>
                <div id='profileFollowList'>
                    {this.props.followList.map(followList => {
                        return (
                            <div key={Math.random()} className='profileFollowListSchool'>
                                <Container>
                                    <Row>
                                        <Col  md='12' lg='6'>
                                            <div className='profileFollowListImageBox'>
                                                <img src={followList.profile_pic} alt=''/>
                                            </div>
                                        </Col>
                                        <Col md='12' lg='6' className='profileFollowListFollowBox'>
                                            <div>
                                                <p className='profileFollowListSchoolName'>{followList.school_name}</p>
                                            </div>
                                            <div className='profileFollowListButton'>
                                                <button>Details</button>
                                                <button>Unfollow</button>
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
        followList: state.profile.followList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // logOut: () => {
        //     dispatch(logOut())
        // }
    }
};

export const ProfileFollowList = connect(mapStateToProps, mapDispatchToProps)(PureFollowList)