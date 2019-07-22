import React from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {Container, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import {} from '../../redux/search/actions'
import '../../assets/css/compare/compareList.css';
import GoBack from '../goBack';

class PureCompareList extends React.Component {

    componentDidMount() {
        if (this.props.compare.length === 0) {
            this.props.history.push('/search');
        }
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <div>
                <div id='compareListContainer' >
                    <Container>
                        <Row id='compareListBoxFixed'>
                            <Col md='2' sm="12" id='compareListButtonBox'>
                                <div className='compareListButtonBoxMargin'>
                                    <GoBack goBack='Back To Search Page' goBackClass='compareListButton'/>
                                </div>
                            </Col>

                            {this.props.compare.map((school, index) => {
                                return (
                                    <Col key={Math.random()} md='5' sm='6' xs='6' className={`compareListBoxHeader${index}`}>
                                        <div className='compareListImageBox compareListMargin'>
                                            {school.profile_pic === null? 
                                             (<div>
                                                <p>no image</p>
                                            </div>
                                             ) : 
                                            <img src={school.profile_pic} alt='pic'/>
                                                }
                                        </div>
                                        <div className='compareListMargin'>
                                            <h5>{school.school_name}</h5>
                                        </div>
                                        <div className='compareListMargin'>
                                            <button className='compareListButton'>Details</button>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row id='compareListBoxPadding'>
                            <Col md='2' sm='12' className='compareListBox'>
                                <div>
                                    <p>Location</p>
                                </div>
                            </Col>
                            {this.props.compare.map((school, index) => {
                                return (
                                    <Col key={Math.random()} md='5' sm='6' xs='6' className={`compareListBox${index}`}>
                                        <p>{school.address}</p>
                                        <p>{school.location}</p>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <Col md='2' sm='12' className='compareListBox'>
                                <div>
                                    <p>School Size</p>
                                </div>
                            </Col>
                            {this.props.compare.map((school, index) => {
                                return (
                                    <Col key={Math.random()} md='5' sm='6' xs='6' className={`compareListBox${index}`}>
                                        <div>
                                            {index === 0? (
                                                <div>
                                                    {(school.school_size > this.props.compare[1].school_size) ? (
                                                        <p>{school.school_size} m<sup>2</sup><span> <FontAwesomeIcon  size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                    ) : <p>{school.school_size} m<sup>2</sup></p>} 
                                                </div>
                                            ) : (
                                                <div>
                                                    {(school.school_size > this.props.compare[0].school_size) ? (
                                                        <p >{school.school_size} m<sup>2</sup><span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                        ) : <p>{school.school_size} m<sup>2</sup></p>}
                                                </div>
                                            )}
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <Col md='2' sm='12'className='compareListBox'>
                                <div>
                                    <p>No. of Followers</p>
                                </div>
                            </Col>
                            {this.props.compare.map((school, index) => {
                                return (
                                    <Col key={Math.random()} md='5' sm='6' xs='6' className={`compareListBox${index}`}>
                                        <div>
                                            {index === 0? (
                                                <div>
                                                    {(school.follower > this.props.compare[1].follower) ? (
                                                        <p>{school.follower}<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                    ) : <p>{school.follower}</p>}
                                                </div>
                                            ) : (
                                                <div>
                                                    {(school.follower > this.props.compare[0].follower) ? (
                                                        <p>{school.follower}<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                        ) : <p>{school.follower}</p>}
                                                </div>
                                            )}                                        
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <Col md='2' sm='12'className='compareListBox'>
                                <div>
                                    <p>Average Score</p>
                                </div>
                            </Col>
                            {this.props.compare.map((school, index) => {
                                return (
                                    <Col key={Math.random()} md='5' sm='6' xs='6' className={`compareListBox${index}`}>
                                        <div>
                                            {index === 0? (
                                                <div>
                                                    {(school.score > this.props.compare[1].score) ? (
                                                        <p>{school.score}<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                    ) : <p>{school.score}</p>}
                                                </div>
                                            ) : (
                                                <div>
                                                    {(school.score > this.props.compare[0].score) ? (
                                                        <p>{school.score}<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                        ) : <p>{school.score}</p>}
                                                </div>
                                            )}    
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <Col md='2' sm='12'className='compareListBox'>
                                <div>
                                    <p>No. of Teachers</p>
                                </div>
                            </Col>
                            {this.props.compare.map((school, index) => {
                                return (
                                    <Col key={Math.random()} md='5' sm='6' xs='6' className={`compareListBox${index}`}>
                                        <div>
                                            {index === 0? (
                                                <div>
                                                    {(school.no_of_teacher > this.props.compare[1].no_of_teacher) ? (
                                                        <p>{school.no_of_teacher}<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                    ) : <p>{school.no_of_teacher}</p>}
                                                </div>
                                            ) : (
                                                <div>
                                                    {(school.no_of_teacher > this.props.compare[0].no_of_teacher) ? (
                                                        <p>{school.no_of_teacher}<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                        ) : <p>{school.no_of_teacher}</p>}
                                                </div>
                                            )}    
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <Col md='2' sm='12'className='compareListBox'>
                                <div>
                                    <p>No. of Students</p>
                                </div>
                            </Col>
                            {this.props.compare.map((school, index) => {
                                var totalStudent = school.am_student + school.pm_student + school.full_day_student + school.long_full_day_student;
                                var totalStudent0 = this.props.compare[0].am_student + this.props.compare[0].pm_student + this.props.compare[0].full_day_student + this.props.compare[0].long_full_day_student;
                                var totalStudent1 = this.props.compare[1].am_student + this.props.compare[1].pm_student + this.props.compare[1].full_day_student + this.props.compare[1].long_full_day_student;
                                return (
                                    <Col key={Math.random()} md='5' sm='6' xs='6' className={`compareListBox${index}`}>
                                        <div>
                                            {index === 0? (
                                                <div>
                                                    {(totalStudent > totalStudent1) ? (
                                                        <p>{totalStudent}<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                    ) : <p>{totalStudent}</p>}
                                                </div>
                                            ) : (
                                                <div>
                                                    {(totalStudent > totalStudent0) ? (
                                                        <p>{totalStudent}<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                    ) : <p>{totalStudent}</p>}
                                                </div>
                                            )}    
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <Col md='2' sm='12' className='compareListBox'>
                                <div>
                                    <p>Morning Class</p>
                                </div>
                            </Col>
                            {this.props.compare.map((school, index) => {
                                return (
                                    <Col key={Math.random()} md='5' sm='6' xs='6' className={`compareListBox${index}`}>
                                        <div>
                                            {school.has_am? (
                                                <div className='compareListClass'>
                                                    {index === 0? (
                                                        <div>
                                                            {((school.am_student > this.props.compare[1].am_student) || (!this.props.compare[1].has_am)) ? (
                                                                <p>{school.am_student} students<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>{school.am_student} students</p>}
                                                            {((school.half_day_tuition < this.props.compare[1].half_day_tuition) || (!this.props.compare[1].has_am)) ? (
                                                                <p>${school.half_day_tuition}  per year<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>${school.half_day_tuition}  per year</p>}
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            {((school.am_student > this.props.compare[0].am_student) || (!this.props.compare[0].has_am)) ? (
                                                                <p>{school.am_student} students<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>{school.am_student} students</p>}
                                                            {((school.half_day_tuition < this.props.compare[0].half_day_tuition) || (!this.props.compare[0].has_am)) ? (
                                                                <p>${school.half_day_tuition}  per year<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>${school.half_day_tuition}  per year</p>}
                                                        </div>
                                                    )}    
                                                </div>
                                            ):(
                                                <FontAwesomeIcon size="lg" icon={faTimes}/>
                                            )}
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <Col md='2' sm='12' className='compareListBox'>
                                <div>
                                    <p>Afternoon Class</p>
                                </div>
                            </Col>
                            {this.props.compare.map((school, index) => {
                                return (
                                    <Col key={Math.random()} md='5' sm='6' xs='6' className={`compareListBox${index}`}>
                                        <div>
                                            {school.has_pm? (
                                                <div className='compareListClass'>
                                                    {index === 0? (
                                                        <div>
                                                            {((school.pm_student > this.props.compare[1].pm_student) || (!this.props.compare[1].has_pm)) ? (
                                                                <p>{school.pm_student} students<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>{school.pm_student} students</p>}
                                                            {((school.half_day_tuition < this.props.compare[1].half_day_tuition) || (!this.props.compare[1].has_pm)) ? (
                                                                <p>${school.half_day_tuition}  per year<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>${school.half_day_tuition}  per year</p>}
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            {((school.pm_student > this.props.compare[0].pm_student) || (!this.props.compare[0].has_pm)) ? (
                                                                <p>{school.pm_student} students<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>{school.pm_student} students</p>}
                                                            {((school.half_day_tuition < this.props.compare[0].half_day_tuition) || (!this.props.compare[0].has_pm)) ? (
                                                                <p>${school.half_day_tuition}  per year<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>${school.half_day_tuition}  per year</p>}
                                                        </div>
                                                    )}    
                                                </div>
                                            ):(
                                                <FontAwesomeIcon size="lg" icon={faTimes}/>
                                            )}
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <Col md='2' sm='12' className='compareListBox'>
                                <div>
                                    <p>Full Day Class</p>
                                </div>
                            </Col>
                            {this.props.compare.map((school, index) => {
                                return (
                                    <Col key={Math.random()} md='5' sm='6' xs='6' className={`compareListBox${index}`}>
                                        <div>
                                            {school.has_full_day? (
                                                <div className='compareListClass'>
                                                    {index === 0? (
                                                        <div>
                                                            {((school.full_day_student > this.props.compare[1].full_day_student) || (!this.props.compare[1].has_full_day)) ? (
                                                                <p>{school.full_day_student} students<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>{school.full_day_student} students</p>}
                                                            {((school.full_day_tuition < this.props.compare[1].full_day_tuition) || (!this.props.compare[1].has_full_day)) ? (
                                                                <p>${school.full_day_tuition}  per year<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>${school.full_day_tuition}  per year</p>}
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            {((school.full_day_student > this.props.compare[0].full_day_student) || (!this.props.compare[0].has_full_day)) ? (
                                                                <p>{school.full_day_student} students<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>{school.full_day_student} students</p>}
                                                            {((school.full_day_tuition < this.props.compare[0].full_day_tuition) || (!this.props.compare[0].has_full_day)) ? (
                                                                <p>${school.full_day_tuition}  per year<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>${school.full_day_tuition}  per year</p>}
                                                        </div>
                                                    )}    
                                                </div>
                                            ):(
                                                <FontAwesomeIcon size="lg" icon={faTimes}/>
                                            )}
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <Col md='2' sm='12' className='compareListBox'>
                                <div>
                                    <p>Long Full Day Class</p>
                                </div>
                            </Col>
                            {this.props.compare.map((school, index) => {
                                return (
                                    <Col key={Math.random()} md='5' sm='6' xs='6' className={`compareListBox${index}`}>
                                        <div>
                                            {school.has_long_full_day? (
                                                <div className='compareListClass'>
                                                    {index === 0? (
                                                        <div>
                                                            {((school.long_full_day_student > this.props.compare[1].long_full_day_student) || (!this.props.compare[1].has_long_full_day)) ? (
                                                                <p>{school.long_full_day_student} students<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>{school.long_full_day_student} students</p>}
                                                            {((school.long_full_day_tuition < this.props.compare[1].long_full_day_tuition) || (!this.props.compare[1].has_long_full_day)) ? (
                                                                <p>${school.long_full_day_tuition}  per year<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>${school.long_full_day_tuition}  per year</p>}
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            {((school.long_full_day_student > this.props.compare[0].long_full_day_student) || (!this.props.compare[0].has_long_full_day)) ? (
                                                                <p>{school.long_full_day_student} students<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>{school.long_full_day_student} students</p>}
                                                            {((school.long_full_day_tuition < this.props.compare[0].long_full_day_tuition) || (!this.props.compare[0].has_long_full_day)) ? (
                                                                <p>${school.long_full_day_tuition}  per year<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>${school.long_full_day_tuition}  per year</p>}
                                                        </div>
                                                    )}    
                                                </div>
                                            ):(
                                                <FontAwesomeIcon size="lg" icon={faTimes}/>
                                            )}
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <Col md='2' sm='12' className='compareListBox'>
                                <div>
                                    <p>Subsidy</p>
                                </div>
                            </Col>
                            {this.props.compare.map((school, index) => {
                                return (
                                    <Col key={Math.random()} md='5' sm='6' xs='6' className={`compareListBox${index}`}>
                                        <div>
                                            {school.has_subsidy? (
                                                <div>
                                                    {index === 0? (
                                                        <div>
                                                            {((school.subsidy_amt < this.props.compare[1].subsidy_amt) || (!this.props.compare[1].has_subsidy)) ? (
                                                                <p>${school.subsidy_amt}  per year<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>${school.subsidy_amt}  per year</p>}
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            {((school.subsidy_amt < this.props.compare[0].subsidy_amt) || (!this.props.compare[0].has_subsidy)) ? (
                                                                <p>${school.subsidy_amt}  per year<span> <FontAwesomeIcon size="1x" icon={faThumbsUp} color='#0FACF3'/></span></p>
                                                            ) : <p>${school.subsidy_amt}  per year</p>}
                                                        </div>
                                                    )}    
                                                </div>
                                            ) : (
                                                <FontAwesomeIcon size="lg" icon={faTimes}/>
                                            )}
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        compare: state.search.compare
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export const CompareCompareList = withRouter(connect(mapStateToProps, mapDispatchToProps)(PureCompareList))