import React from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {Container, Row, Col, Collapse} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faMinus} from '@fortawesome/free-solid-svg-icons'
import '../../assets/css/search/sortBar.css'
import { teacherClick, followerClick, scoreClick, sizeClick, teacherClickReverse, followerClickReverse, scoreClickReverse, sizeClickReverse } from '../../redux/search/actions.js';

class PureSortBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collapse: true,
            sortStyle: 'searchSortDropButton',
            sortArrow: faChevronUp,
            teacherArrow: faChevronDown,
            teacherArrowState: true,
            followerArrow: faMinus,
            followerArrowState: false,
            scoreArrow: faMinus,
            scoreArrowState: false,
            sizeArrow: faMinus,
            sizeArrowState: false,
            sortMessage: ' - Greatest to least'
        };
    };

    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }));
        if (this.state.collapse === false) {
            this.setState({
                sortStyle: 'searchSortDropButton',
                sortArrow: faChevronUp
            })
        } else {
            this.setState({
                sortStyle: 'searchSortDropButton searchSearchDropBottom',
                sortArrow: faChevronDown,
            })
        };
    };

    teacherClick = () => {
        if (this.state.teacherArrowState) {
            this.props.teacherClickReverse(this.props.result);
            this.setState({
                teacherArrow: faChevronUp,
                teacherArrowState: false,
                followerArrow: faMinus,
                followerArrowState: false,
                scoreArrow: faMinus,
                scoreArrowState: false,
                sizeArrow: faMinus,
                sizeArrowState: false,
                sortMessage: ' - Least to greatest'            
            })
        } else {
            this.props.teacherClick(this.props.result);
            this.setState({
                teacherArrow: faChevronDown,
                teacherArrowState: true,
                followerArrow: faMinus,
                followerArrowState: false,
                scoreArrow: faMinus,
                scoreArrowState: false,
                sizeArrow: faMinus,
                sizeArrowState: false,
                sortMessage: ' - Greatest to least'
            })
        }
    }

    followerClick = () => {
        if (this.state.followerArrowState) {
            this.props.followerClickReverse(this.props.result);
            this.setState({
                teacherArrow: faMinus,
                teacherArrowState: false,
                followerArrow: faChevronUp,
                followerArrowState: false,
                scoreArrow: faMinus,
                scoreArrowState: false,
                sizeArrow: faMinus,
                sizeArrowState: false,
                sortMessage: ' - Least to greatest'
            })
        } else {
            this.props.followerClick(this.props.result);
            this.setState({
                teacherArrow: faMinus,
                teacherArrowState: false,
                followerArrow: faChevronDown,
                followerArrowState: true,
                scoreArrow: faMinus,
                scoreArrowState: false,
                sizeArrow: faMinus,
                sizeArrowState: false,
                sortMessage: ' - Greatest to least'
            })
        }
    }

    scoreClick = () => {
        if (this.state.scoreArrowState) {
            this.props.scoreClickReverse(this.props.result);
            this.setState({
                teacherArrow: faMinus,
                teacherArrowState: false,
                followerArrow: faMinus,
                followerArrowState: false,
                scoreArrow: faChevronUp,
                scoreArrowState: false,
                sizeArrow: faMinus,
                sizeArrowState: false,
                sortMessage: ' - Least to greatest'
            })
        } else {
            this.props.scoreClick(this.props.result);
            this.setState({
                teacherArrow: faMinus,
                teacherArrowState: false,
                followerArrow: faMinus,
                followerArrowState: false,
                scoreArrow: faChevronDown,
                scoreArrowState: true,
                sizeArrow: faMinus,
                sizeArrowState: false,
                sortMessage: ' - Greatest to least'
            })
        }
    }

    sizeClick = () => {
        if (this.state.sizeArrowState) {
            this.props.sizeClickReverse(this.props.result);
            this.setState({
                teacherArrow: faMinus,
                teacherArrowState: false,
                followerArrow: faMinus,
                followerArrowState: false,
                scoreArrow: faMinus,
                scoreArrowState: false,
                sizeArrow: faChevronUp,
                sizeArrowState: false,
                sortMessage: ' - Least to greatest'
            })
        } else {
            this.props.sizeClick(this.props.result);
            this.setState({
                teacherArrow: faMinus,
                teacherArrowState: false,
                followerArrow: faMinus,
                followerArrowState: false,
                scoreArrow: faMinus,
                scoreArrowState: false,
                sizeArrow: faChevronDown,
                sizeArrowState: true,
                sortMessage: ' - Greatest to least'
            })
        }
    }

    render() {
        return (
            <div> 
                <div className='searchSearchButtonDrop'>
                    <div className={this.state.sortStyle} onClick={this.toggle}>
                        <h5 className="searchSearchArrow">Sort By<span>{this.state.sortMessage}</span></h5>
                        <FontAwesomeIcon  className="searchSearchArrow" size="lg" icon={this.state.sortArrow} color='#0FACF3'/>
                    </div>
                </div>
                <Collapse isOpen={this.state.collapse}>
                    <div id='sortContainer'>
                        <Container>
                            <Row>
                                <Col className='sortBox' md="3" xs="6" onClick={this.teacherClick}>
                                     <p className="searchSearchArrow">Teachers</p>
                                     <FontAwesomeIcon  className="searchSearchArrow" color='#0FACF3' size="lg" icon={this.state.teacherArrow}/>
                                </Col>
                                <Col className='sortBox1' md="3" xs="6" onClick={this.followerClick}>
                                    <p className="searchSearchArrow">Followers</p>
                                     <FontAwesomeIcon className="searchSearchArrow" size="lg" color='#0FACF3' icon={this.state.followerArrow} />
                                </Col>
                                <Col className='sortBox2' md="3" xs="6" onClick={this.scoreClick}>
                                    <p className="searchSearchArrow">Score</p>
                                     <FontAwesomeIcon className="searchSearchArrow" size="lg"  color='#0FACF3' icon={this.state.scoreArrow} />
                                </Col>
                                <Col className='sortBox3' md="3" xs="6" onClick={this.sizeClick}>
                                    <p className="searchSearchArrow">Size</p>
                                     <FontAwesomeIcon className="searchSearchArrow" size="lg" color='#0FACF3' icon={this.state.sizeArrow} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.search.result
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        teacherClick: (result) => {
            dispatch(teacherClick(result))
        },
        followerClick: (result) => {
            dispatch(followerClick(result))
        },
        scoreClick: (result) => {
            dispatch(scoreClick(result))
        },
        sizeClick: (result) => {
            dispatch(sizeClick(result))
        },
        teacherClickReverse: (result) => {
            dispatch(teacherClickReverse(result))
        },
        followerClickReverse: (result) => {
            dispatch(followerClickReverse(result))
        },
        scoreClickReverse: (result) => {
            dispatch(scoreClickReverse(result))
        },
        sizeClickReverse: (result) => {
            dispatch(sizeClickReverse(result))
        }
    }
};

export const SearchSortBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(PureSortBar))