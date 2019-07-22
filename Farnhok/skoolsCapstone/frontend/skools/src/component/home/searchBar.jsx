import React from 'react';
import { withRouter }  from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Select from 'react-select';
import '../../assets/css/home/searchBar.css';

class PureSearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            selectedLocation: [],
            selectedDay: []
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
        console.log(this.state)
    }

    onSearch = e => {
        e.preventDefault();
        this.props.history.push("/search");
    }

    render() {
        const { selectedLocation, selectedDay } = this.state;

        return (
            <div id='homeSearchContainer'>
                <div id='homeSearchTextBox'>
                    <h1 id='homeSearchHeader' className='homeSearchTitle'>Find the Best Kindergartens</h1>
                    <p className='homeSearchTitle'>We compare all Kindergartens in Hong Kong and help you find the best one for you and your kids.</p>
                </div>
                <Container>
                    <Row>
                        <Col id='homeSearchLeftImg' md="3"></Col>
                        <Col md="6">
                            <form id='homeSearchForm'>
                                <div>
                                    <label>Which kindergarten are you looking for?</label><br/>
                                    <input className='homeSearchInput' type="text" name="name" placeholder="All School" value={this.state.name} onChange={e => this.onChange(e)}/>
                                </div>
                                <div>
                                    <label>which Location?</label>

                                    <Select isMulti 
                                        placeholder='Select All'
                                        value={selectedLocation}
                                        name='selectedLocation'
                                        onChange={this.handleLocation}
                                        options={this.props.location}
                                        closeMenuOnSelect={false}
                                    />
                                </div>
                                <div>
                                    <label>Half-Day or Full-Day?</label>

                                    <Select isMulti 
                                        placeholder='Select All'
                                        value={selectedDay}
                                        name='selectedDay'
                                        onChange={this.handleDay}
                                        options={this.props.day}
                                        closeMenuOnSelect={false}
                                    />
                                </div>
                                <div id='homeSearchButtonBox'>
                                    <button className='homeSearchButton' onClick={this.onSearch}>Search</button>
                                </div>
                            </form>
                        </Col>
                        <Col id='homeSearchRightImg' md="3"></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        day: state.search.day,
        location: state.search.location
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // searchSchool: () => {
        //     dispatch(searchSchool())
        // }
    }
};

export const HomeSearchBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(PureSearchBar))