import * as React from 'react';
import { NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {Input} from 'reactstrap';
import {signUpUser} from '../redux/auth/actions';
import './../assets/css/signUp.css'

class PureSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            errorMessage: '',
            errorStyleUser: 'loginInput',
            errorStylePassword: 'loginInput',
            email: '',
            password: '',
            errorMessgae: ''
        }
    };

    onChangeValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    validateEmail = (email) => {
        var emailAddress = /\S+@\S+\.\S+/;
        return emailAddress.test(email);
    }

    signUp = e => {
        e.preventDefault();
        console.log('signing up');
        var email = this.state.email
        var lengthPassword = this.state.password.length
        console.log(email , lengthPassword)
        if (!this.validateEmail(email)) {
            this.setState({
                errorMessage: 'Make sure you enter a proper email address',
                errorStyleUser: 'errorStyle'
            })
        } else if ((lengthPassword < 6)) {
            this.setState({
                errorMessage: 'Make sure your password has at least 6 letters.',
                errorStylePassword: 'errorStyle',
                errorStyleUser: 'loginInput'
            })
        } else {
            this.setState({
                errorMessage: '',
                errorStyleUser: 'loginInput',
                errorStylePassword: 'loginInput'
            }) 
            this.props.signUpUser(this.state.email, this.state.password)
            setTimeout(this.checkSignUp(), 500)
        }
    }

    checkSignUp = () => {
        if (this.props.isSignUp) {
            this.setState({
                errorMessage: 'Signed up, redirect to login page after 1 second.'
            })
        } else {
            this.setState({
                errorStyleUser: 'errorStyle',
                errorStylePassword: 'loginInput',
                errorMessage: 'Email has been taken.'
            })
        }
    }

    render() { 
        return (
            <div id='loginContainer'>
                <form id='loginForm'>
                    <div className='loginText'>
                        <h3>Join KinderGarten!</h3>
                        <p>Sign up to unlock more features.</p>
                    </div>
                    <div>
                        <label>Email</label>
                        <Input className={this.state.errorStyleUser} type="email" name="email" placeholder='Enter your email' onChange={e => this.onChangeValue(e)} value={this.state.email}/>
                    </div>
                    <div>
                        <label>Password (At least 6 letters)</label>
                        <Input className={this.state.errorStylePassword} type="password" name="password" placeholder='Enter your password' onChange={e => this.onChangeValue(e)} value={this.state.password}/>
                    </div>
                    <div id='loginButtonBox'>
                        <button className='loginButton' onClick={this.signUp}>Sign Up</button>
                    </div>
                    <div className='loginText' id='loginNotRegister'>
                        <p id='errorMessage'>{this.state.errorMessage}</p>
                        <p>Already registered? <NavLink className='loginLink' to="/login">Login</NavLink></p>
                    </div>
                </form>
            </div>
        );
    };
};
 
const mapStateToProps = (state) => {
    return {
        isSignUp: state.auth.signUpMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: (email, password) => {
            dispatch(signUpUser(email, password))
        }    
    }
}

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(withRouter(PureSignUp))