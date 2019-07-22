import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../redux/auth/actions';
import { logOutCms } from '../redux/cmsAuth/actions';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import '../assets/css/navBar.css';
import userBlue from '../assets/image/userBlue.svg'


class PureNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userPicture: null,
            isOpen: false
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!this.props.isAuthenticated && nextProps.isAuthenticated) {
            let userPicture = localStorage.getItem('userPicture');
            this.setState({
                userPicture: userPicture
            })
            return true;
        } else {
            return true;
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logOut = () => {
        this.userPicture = null;
        this.props.logOut()
    }

    render() {
        return (
            <div>
                {/* fixed={`top`} */}
                <Navbar id='nav' light expand="md" >
                    <NavbarBrand id='navLogo' href="/">Farnhook</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>

                        {this.props.isAuthenticated ? (
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink activeClassName="navBarActive" className='navText' to="/search">Search</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='navText' to="/profile">Schools & Events</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        {this.state.userPicture !== null ?
                                            <img id='navBarIcon' src={this.state.userPicture} alt='empty' />
                                            :
                                            <img id='navBarIcon' src={userBlue} alt='' />
                                        }
                                    </DropdownToggle>
                                    <DropdownMenu >
                                        <DropdownItem>
                                            <NavLink className='navText' to="/setting">Setting</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className='navText' to="/" onClick={this.logOut}>Logout</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        ) : this.props.isSchoolAuthenticated ? (
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className='navText' to="/cms/school_details">Main Page</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='navText' to="/cms/events">Events</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='navText' to="/cms/social">Social Feed</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='navText' to="/cms/socialTest/6">Social Test</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='navText' to="/" onClick={this.props.logOutCms}>Logout</NavLink>
                                </NavItem>
                            </Nav>
                        ) : (<Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className='navText' to="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navText' to="/signup">Sign Up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink id='navSchoolArea' to="/cmsAuth">School Area</NavLink>
                            </NavItem>
                        </Nav>)}
                    </Collapse>
                </Navbar>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isSchoolAuthenticated: state.cmsAuth.isSchoolAuthenticated,
        userName: state.auth.userName,
        userPicture: state.auth.userPicture,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut())
        },
        logOutCms: () => {
            dispatch(logOutCms())
        }
    }
};

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(PureNavBar)