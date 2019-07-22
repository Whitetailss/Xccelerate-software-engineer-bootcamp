import React from 'react';
import { connect } from 'react-redux';
import '../../assets/css/detail/main.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import userBlue from '../../assets/image/userBlue.svg'

class PureDetailMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_pic: '',
            school_name: 'Harrow International School Hong Kong',
            location: 'Central and Western',
            description: 'Harrow International School Hong Kong is the first and only British international boarding and day school in Hong Kong. It opened in September 2012 and now has a combined roll of c.1300 pupils aged 3 to 18.',
            address: '101, kindergarten road, CWB, Hong Kong',
            day: 'Half day',
            school_size: 10000,
            no_of_teacher: 100,
            follower: 1000,
            score: 4.5,
            has_am: true,
            has_pm: false,
            has_full_day: true,
            has_long_full_day: true,
            am_student: 250,
            pm_student: 250,
            full_day_student: 250,
            long_full_day_student: 250,
            half_day_tuition: 1000,
            full_day_tuition: 2000,
            long_full_day_tuition: 4000,
            has_subsidy: true,
            subsidy_amt: 5000,
            star1: '#bdbcbc',
            star2: '#bdbcbc',
            star3: '#bdbcbc',
            star4: '#bdbcbc',
            star5: '#bdbcbc',
            countScore: 0,
            review: ''
        }
    }

    clickStar = e => {
        var starId = e.target.id;
        var id = starId[4]

        for (let i = id; i < 6; i++) {
            this.setState({
                [`star${i}`]: '#bdbcbc'
            })
        }
        for (let i = id; i > 0; i--) {
            this.setState({
                [`star${i}`]: '#0FACF3'
            })
        }

        this.setState({
            countScore: id
        })
        console.log(this.state.countScore)
    }

    onReview = e => {
        this.setState({
            review: e.target.value
        })
        console.log(this.state.review)
    }

    render() {
        return (
            <div id='detailMainContainer'>
                <div id='detailMainPhotosContainer'>
                    <div id='detailMainBanner'>
                        <img src='https://scontent.fhkg3-1.fna.fbcdn.net/v/t31.0-8/15110355_187051528423689_5044838082769033789_o.jpg?_nc_cat=100&_nc_oc=AQkPS4oKC8FUFvLKGur2gGJq3mdPBnMtXeKOU5eEMCSzD1c4sF3sVCe4XpmxWCgAni4&_nc_ht=scontent.fhkg3-1.fna&oh=76d02505b1af937c03f8b9afdbe63cb3&oe=5D844EF2' alt='' />
                    </div>
                    <div id='detailMainPhotos' >
                        <img src='https://www.ewa.org/sites/main/files/imagecache/medium/main-images/bigstock-pretty-teacher-smiling-at-came-69887626.jpg' alt='' />
                        <img src='https://i1.wp.com/iiwminnesota.com/wp-content/uploads/2015/05/Kennedy-1.jpg?ssl=1' alt='' />
                    </div>
                    <div id='detailMainPhotosButton'>
                        <button>View Photos</button>
                    </div>
                </div>


                <Container id='detailMain'>
                    <Row>
                        <Col md="4">
                            <div id='detailMainVideo'>
                                <h4>Principal's Words</h4>
                                <video controls />
                            </div>
                        </Col>
                        <Col md="8">
                            <div id='detailMainText'>
                                <div id='detailMainTextFollow'>
                                    <h3>{this.state.school_name} <span>
                                        <FontAwesomeIcon color='#0FACF3' size="1x" icon={faStar} /> {this.state.score}</span> </h3>
                                    <div id='detailMainFollowButton'>
                                        <button>Follow</button>
                                    </div>
                                </div>
                                <div id='detailMainTextPadding'>
                                    <h5>{this.state.location}</h5>
                                    <div id='detailMainTextDescription'>
                                        <p>{this.state.description}</p>
                                    </div>
                                    <p><b>Address: </b>{this.state.address}</p>
                                    <p><b>School Size: </b>{this.state.school_size} m<sup>2</sup></p>
                                    <p><b>Number of Teacher: </b>{this.state.no_of_teacher}</p>
                                    <p><b>Number of Followers: </b>{this.state.follower}</p>

                                    {this.state.has_subsidy ? (
                                        <div>
                                            <p><b>Subsidy Amount: </b>{this.state.subsidy_amt}</p>
                                        </div>
                                    ) : null}
                                </div>

                                <div id='detailMainClassContainer'>
                                    <h4>Type of Classes</h4>
                                </div>

                                <Container>
                                    <Row>
                                        <Col md='6'>
                                            <div className='detailMainClass'>
                                                <p className='detailMainClassTitle'><b>Morning Class</b></p>
                                                {this.state.has_am ? (
                                                    <div>
                                                        <p><b>Number of Students: </b>{this.state.am_student}</p>
                                                        <p><b>Tuition Fee: </b>{this.state.half_day_tuition}</p>
                                                    </div>
                                                ) : (
                                                        <div className='detailMainClassCross'>
                                                            <FontAwesomeIcon color='#0FACF3' size="2x" icon={faTimes} />
                                                        </div>
                                                    )}
                                            </div>
                                        </Col>

                                        <Col md='6'>
                                            <div className='detailMainClass'>
                                                <p className='detailMainClassTitle'><b>Afternoon Class</b></p>
                                                {this.state.has_pm ? (
                                                    <div>
                                                        <p><b>Number of Students: </b>{this.state.pm_student}</p>
                                                        <p><b>Tuition Fee: </b>{this.state.half_day_tuition}</p>
                                                    </div>
                                                ) : (
                                                        <div className='detailMainClassCross'>
                                                            <FontAwesomeIcon color='#0FACF3' size="2x" icon={faTimes} />
                                                        </div>
                                                    )}
                                            </div>
                                        </Col>

                                        <Col md='6'>
                                            <div className='detailMainClass'>
                                                <p className='detailMainClassTitle'><b>Full Day Class</b></p>
                                                {this.state.has_full_day ? (
                                                    <div>
                                                        <p><b>Number of Students: </b>{this.state.full_day_student}</p>
                                                        <p><b>Tuition Fee: </b>{this.state.full_day_tuition}</p>
                                                    </div>
                                                ) : (
                                                        <div className='detailMainClassCross'>
                                                            <FontAwesomeIcon color='#0FACF3' size="2x" icon={faTimes} />
                                                        </div>
                                                    )}
                                            </div>
                                        </Col>

                                        <Col md='6'>
                                            <div className='detailMainClass'>
                                                <p className='detailMainClassTitle'><b>Long Full Day Class</b></p>
                                                {this.state.has_long_full_day ? (
                                                    <div>
                                                        <p><b>Number of Students: </b>{this.state.long_full_day_student}</p>
                                                        <p><b>Tuition Fee: </b>{this.state.long_full_day_tuition}</p>
                                                    </div>
                                                ) : (
                                                        <div className='detailMainClassCross'>
                                                            <FontAwesomeIcon color='#0FACF3' size="2x" icon={faTimes} />
                                                        </div>
                                                    )}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div id='detailMainReviewContainer'>
                                <div id='detailMainReviewTitle'>
                                    <h4>Reviews</h4>
                                </div>
                                <div id='detailMainReviewBox'>
                                    <div id='detailMainReviewBoxScore'>
                                        <h5>Rate this school: {'  '}</h5>

                                        <div id='star1' className='detailMainReviewBoxScoreDiv' name='1' onClick={e => this.clickStar(e)}>
                                            <FontAwesomeIcon className='detailMainReviewBoxStar' color={this.state.star1} size="lg" icon={faStar} />
                                        </div>
                                        <div id='star2' className='detailMainReviewBoxScoreDiv' name='2' onClick={e => this.clickStar(e)}>
                                            <FontAwesomeIcon className='detailMainReviewBoxStar' color={this.state.star2} size="lg" icon={faStar} />
                                        </div>
                                        <div id='star3' className='detailMainReviewBoxScoreDiv' name='3' onClick={e => this.clickStar(e)}>
                                            <FontAwesomeIcon className='detailMainReviewBoxStar' color={this.state.star3} size="lg" icon={faStar} />
                                        </div>
                                        <div id='star4' className='detailMainReviewBoxScoreDiv' name='4' onClick={e => this.clickStar(e)}>
                                            <FontAwesomeIcon className='detailMainReviewBoxStar' color={this.state.star4} size="lg" icon={faStar} />
                                        </div>
                                        <div id='star5' className='detailMainReviewBoxScoreDiv' name='5' onClick={e => this.clickStar(e)}>
                                            <FontAwesomeIcon className='detailMainReviewBoxStar' color={this.state.star5} size="lg" icon={faStar} />
                                        </div>
                                    </div>

                                    <textarea placeholder='Type in your comment of this school...' value={this.state.review} onChange={e => this.onReview(e)} rows="3"></textarea>

                                    <div id='detailMainReviewButton'>
                                        <button>Submit</button>
                                        <button>Clear</button>
                                    </div>
                                </div>

                                <div className='detailMainReviewUser'>
                                    <div className='detailMainReviewUserInfo'>
                                        <img src={userBlue} alt=''/>
                                        <div>
                                            <h5>Dennis</h5>
                                            <p>4 <FontAwesomeIcon color='#0FACF3' size="1x" icon={faStar} /></p>
                                        </div>
                                    </div>
                                    <p className='detailMainReviewUserComment'>Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. </p>
                                </div>                     

                                <div className='detailMainReviewUser'>
                                    <div className='detailMainReviewUserInfo'>
                                        <img src={userBlue} alt=''/>
                                        <div>
                                            <h5>Eric</h5>
                                            <p>5 <FontAwesomeIcon color='#0FACF3' size="1x" icon={faStar} /></p>
                                        </div>
                                    </div>
                                    <p className='detailMainReviewUserComment'>Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good Good .</p>
                                </div> 
                                <div className='detailMainReviewUser'>
                                    <div className='detailMainReviewUserInfo'>
                                        <img src={userBlue} alt=''/>
                                        <div>
                                            <h5>Sebastian</h5>
                                            <p>4 <FontAwesomeIcon color='#0FACF3' size="1x" icon={faStar} /></p>
                                        </div>
                                    </div>
                                    <p className='detailMainReviewUserComment'>I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it I like it .</p>
                                </div> 
                                <div className='detailMainReviewUser'>
                                    <div className='detailMainReviewUserInfo'>
                                        <img src={userBlue} alt=''/>
                                        <div>
                                            <h5>Dennis</h5>
                                            <p>4 <FontAwesomeIcon color='#0FACF3' size="1x" icon={faStar} /></p>
                                        </div>
                                    </div>
                                    <p className='detailMainReviewUserComment'>Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. Good Kindergarten, Good teachers. </p>
                                </div>    
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // logOut: () => {
        //     dispatch(logOut())
        // }
    }
};

export const DetailMain = connect(mapStateToProps, mapDispatchToProps)(PureDetailMain)