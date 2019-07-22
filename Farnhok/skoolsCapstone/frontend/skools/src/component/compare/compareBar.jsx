import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import '../../assets/css/compare/compareBar.css';
import { clearCompare, clearOneCompare} from '../../redux/search/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class PureCompareBar extends React.Component {

    clearAll = () => {
        this.props.clearCompare();
    }

    clearFirstCompare = () => {
        if (this.props.compare.length === 1) {
            this.props.clearCompare();
        } else {
            this.props.clearOneCompare([this.props.compare[1]]);
        }
    }

    clearSecondCompare = () => {
        this.props.clearOneCompare([this.props.compare[0]]);
    }

    render() {
        return (
            <div> 
                {!this.props.compareButtonStatus? ("") 
                : (
                    <div id="compareBarContainer">
                        <div id='compareBarBoxContainer'>
                            {this.props.compare[0]? (
                                <button className='compareBarBox compareBarBoxResult' value='0' onClick={this.clearFirstCompare} >
                                    <p className='compareBarWord'>{this.props.compare[0].school_name}</p>
                                    <FontAwesomeIcon className="compareBarDeleteButton" size="md" icon={faTimes} />
                                </button>
                                ) : ("Error")
                            }
                            {this.props.compare[1]? (
                                <button className='compareBarBox compareBarBoxResult'  onClick={this.clearSecondCompare} >

                                    <p className='compareBarWord'>{this.props.compare[1].school_name}</p>
                                    <FontAwesomeIcon  className="compareBarDeleteButton" size="md" icon={faTimes} />

                                </button>
                                ) : (
                                <div className='compareBarBox'>
                                    <p className='compareBarWordEmpty'>Add School To Compare</p>
                                </div>
                                )
                            }
                        </div>
                        <div id='compareBarButtonBox'>
                            <button className='compareBarButtonBoxButton' onClick={this.props.clearCompare}>Clear All</button>
                            {this.props.compare.length === 1? (
                                <p>Compare</p>
                            ) : (
                                <NavLink className='compareBarButtonBoxButton' to="/compare">Compare</NavLink>                                    
                            )}
                        </div>
                    </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        compare: state.search.compare,
        compareButtonStatus: state.search.compareButtonStatus
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearCompare: () => {
            dispatch(clearCompare());
        },
        clearOneCompare: (newCompare) => {
            dispatch(clearOneCompare(newCompare));
        },
    }
};

export const CompareBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(PureCompareBar))