import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { searchSchool } from '../../redux/search/actions';
import Loading from '../loading';
import '../../assets/css/search/searchBar.css';

class PureSearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            selectedLocation: [],
            selectedDay: [],
            collapse: true,
            searchStyle: 'searchSearchDropButton',
            arrow: faChevronUp,
            loading: false
        };
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.loading) {
            this.props.history.push('/search');
            this.setState({
                loading: false,
                name: '',
                selectedLocation: [],
                selectedDay: [],
            })
            return true;
        }
        return true;
    }

    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }));
        if (this.state.collapse === false) {
            this.setState({
                searchStyle: 'searchSearchDropButton',
                arrow: faChevronUp
            })
        } else {
            this.setState({
                searchStyle: 'searchSearchDropButton searchSearchDropBottom',
                arrow: faChevronDown
            })
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLocation = selectedLocation => {
        this.setState({selectedLocation});
    }

    handleDay = selectedDay => {
        this.setState({selectedDay});
    }

    onSearch = e => {
        this.setState({
            loading: true
        })
        var location = [];
        var selectedLocation = this.state.selectedLocation;
        var selectedDay = this.state.selectedDay;
        var day1;
        var day2;
        var day3; 
        var day4;
        for (let i = 0; i < selectedLocation.length; i++) {
            location.push(selectedLocation[i].value);
        }
        for (let i = 0; i < selectedDay.length; i++) {
            for (let j = 1; j <= 4; j++) {
                if (selectedDay[i].value[j] === true) {
                    if (j === 1) {
                        day1 = true
                    } else if (j === 2) {
                        day2 = true
                    } else if (j === 3) {
                        day3 = true
                    } else if (j === 4) {
                        day4 = true
                    } 
                } 
            }
        }
        const searchResult = {
            schoolName: this.state.name,
            selectedLocation: location,
            day1: day1,
            day2: day2,
            day3: day3,
            day4: day4,
        }
        console.log(searchResult)
        this.props.searchSchool(searchResult);
    };

    render() {
        const { selectedLocation, selectedDay } = this.state;

        return (
            <div> 
                <div className='searchSearchButtonDrop'>
                    <div className={this.state.searchStyle} onClick={this.toggle}>
                        <h5 className="searchSearchArrow">What can we help you to find?</h5>
                        <FontAwesomeIcon  className="searchSearchArrow" size="lg" icon={this.state.arrow} color='#0FACF3'/>
                    </div>
                </div>
                <Collapse isOpen={this.state.collapse}>
                <div id='searchSearchForm'>
                    <Container>
                        <Row>
                            <Col md="3">
                                    <label>School Name?</label>
                                    <input className='searchSearchInput' type="text" name="name" placeholder="All School" value={this.state.name} onChange={e => this.onChange(e)}/>
                            </Col>
                            <Col md="3">
                                    <label>Location?</label>
                                    <Select isMulti 
                                        placeholder='Select All'
                                        value={selectedLocation}
                                        name='selectedLocation'
                                        onChange={this.handleLocation}
                                        options={this.props.location}
                                        closeMenuOnSelect={false}
                                    />
                            </Col>
                            <Col md="3">
                                    <label>Half / Full-Day?</label>
                                    <Select isMulti 
                                        placeholder='Select All'
                                        value={selectedDay}
                                        name='selectedDay'
                                        onChange={this.handleDay}
                                        options={this.props.day}
                                        closeMenuOnSelect={false}
                                    />
                            </Col>
                            <Col id='searchSearchButtonBox' md="3">
                                <button className='searchSearchButton' onClick={this.onSearch}>Search</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </Collapse>
                {this.state.loading? <Loading />: null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        day: state.search.day,
        location: state.search.location,
        result: state.search.result
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchSchool: (result) => {
            dispatch(searchSchool(result))
        }
    }
};

export const SearchSearchBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(PureSearchBar))