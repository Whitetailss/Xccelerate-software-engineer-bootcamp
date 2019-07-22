import React from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {Container, Row, Col} from 'reactstrap';
import { addCompare, clearCompare, compareButtonTrue, clearOneCompare} from '../../redux/search/actions'
import '../../assets/css/search/schoolList.css'

class PureSchoolList extends React.Component {

    compareSchool = e => {
        this.props.compareButtonTrue();
        const id = e.target.value;

        if (this.props.compare.length === 0) {
            this.props.addCompare(this.props.result[id]);
        } else if ((this.props.compare.length < 2) && (this.props.compare[0].school_name !== e.target.name)){
            this.props.addCompare(this.props.result[id]);
        } else if ((this.props.compare[0].school_name === e.target.name) || (this.props.compare[1].school_name === e.target.name)) {
            if (this.props.compare.length === 1) {
                this.props.clearCompare();
            } else if (this.props.compare.length === 2) {
                var school = this.props.compare.find(school => school.school_name === e.target.name);
                var index = this.props.compare.indexOf(school);
                var newCompare = this.props.compare.filter((i, j) => j !== index)
                this.props.clearOneCompare(newCompare);
            }
        }
        console.log(this.props.compare) 
    }

    render() {
        return (
            <div className={!this.props.compareButtonStatus? '': 'searchSchoolContainerMargin'}> 
                {this.props.result.map((school, index) => {
                    return (
                        <div key={Math.random()} className="searchSchoolContainer">
                            <Container>
                                <Row>
                                    <Col className='searchSchoolBoxImg' md="3" sm='12'>
                                        {school.profile_pic === null? 
                                            <div>
                                                <p>no image</p>
                                            </div>
                                        :
                                            <img src={school.profile_pic} alt='school'/>
                                        }
                                    </Col>
                                    <Col className='searchSchoolBoxTitle' md="4" sm='12'>
                                        <p className='searchSchoolTitle searchSchoolHr'>{school.school_name}</p>
                                        <p className='searchSchoolWord searchSchoolHr'>{school.location}</p>
                                        <p className='searchSchoolWord'>School size: <span>{school.school_size}</span> square meter.</p>
                                    </Col>
                                    <Col className='searchSchoolBoxStats' md="3"  sm='9' xs='6'>
                                        <p className='searchSchoolWordTop searchSchoolHr'>No. of teachers: <span>{school.no_of_teacher}</span></p>
                                        <p className='searchSchoolWord searchSchoolHr'>Followers: <span>{school.follower}</span></p>
                                        <p className='searchSchoolWord'>Score: <span>{school.score}</span></p>
                                    </Col>
                                    <Col className='searchSchoolBoxButton' md="2" sm='3' xs='6'>
                                        <button key={index} className='searchSchoolButton'>Details</button>
                                        {!this.props.compareButtonStatus? (
                                            <button value={index} name={school.school_name} 
                                            className='searchSchoolButton' 
                                            onClick={e => this.compareSchool(e)}>Compare</button>
                                        ): this.props.compare.length === 1? (
                                            <button value={index} name={school.school_name}
                                            className={(this.props.compare[0].school_name === school.school_name)? 'searchSchoolButtonClick' :'searchSchoolButton'}
                                            onClick={e => this.compareSchool(e)}>{(this.props.compare[0].school_name === school.school_name)? 'Remove' :'Compare'}</button>
                                        ): this.props.compare.length >= 2? (
                                            <button value={index} name={school.school_name}
                                            className={((this.props.compare[0].school_name === school.school_name) || (this.props.compare[1].school_name === school.school_name))? 'searchSchoolButtonClick' :'searchSchoolButtonNA'}
                                            onClick={e => this.compareSchool(e)}>{((this.props.compare[0].school_name === school.school_name) || (this.props.compare[1].school_name === school.school_name))? 'Remove' :'N/A'}</button>
                                        ) : (null)}
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.search.result,
        compare: state.search.compare,
        compareButtonStatus: state.search.compareButtonStatus,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCompare: (school) => {
            dispatch(addCompare(school))
        },
        clearCompare: () => {
            dispatch(clearCompare());
        },
        clearOneCompare: (newCompare) => {
            dispatch(clearOneCompare(newCompare));
        },
        compareButtonTrue: () => {
            dispatch(compareButtonTrue())
        }
    }
};

export const SearchSchoolList = withRouter(connect(mapStateToProps, mapDispatchToProps)(PureSchoolList))