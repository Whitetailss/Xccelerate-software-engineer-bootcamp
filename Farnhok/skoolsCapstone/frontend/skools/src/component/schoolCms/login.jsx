import * as React from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginCmsUser, signUpCmsUser} from '../../redux/cmsAuth/actions';
import {Input} from 'reactstrap';
import './../../assets/css/cmsLogin.css';


class PureLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            modal: false,
            isSignUpBox: false,
            signUpEmail: '',
            signUpPassword: '',
            loginEmail: '',
            loginPassword: '',
            errorMessage: '',
            errorStyle: 'loginInput',
            errorStyleUser: 'loginInput',
            errorStylePassword: 'loginInput',
        }
    };

    toggle = () => {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    } 

    componentClick = () => {
        return null;
    };


    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    validateEmail = (email) => {
        var emailAddress = /\S+@\S+\.\S+/;
        return emailAddress.test(email);
    }

    isSignUpBox = e => {
        e.preventDefault();
        this.setState(prevState => ({
            isSignUpBox: !prevState.isSignUpBox
        }));
    };

    signUpCms = e => {
        e.preventDefault();
        console.log('signing up');
        var email = this.state.signUpEmail
        var lengthPassword = this.state.signUpPassword.length
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
            this.props.signUpCmsUser(this.state.signUpEmail, this.state.signUpPassword)
            setTimeout(this.checkCmsSignUp(), 500)
        }
    }

    checkCmsSignUp = () => {
        if (this.props.isSchoolSignUp) {
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

  
    loginCms = e => {
        e.preventDefault();
        this.props.loginCmsUser(this.state.loginEmail, this.state.loginPassword)
        this.checkCmsLogin();
    };

    checkCmsLogin = () => {
            if (this.props.isSchoolAuthenticated) {
                this.props.history.push("/");
            } else {
                this.setState({
                    errorMessage: 'Please check your Email and password',
                    errorStyle: 'errorStyle',
                    password: ''
                })
            }
    }

    render() {
        return (
            <div>
                {this.state.isSignUpBox ? (<div>
                    <form id='cmsLoginForm'>
                        <div>
                            <Input className={this.state.errorStyleUser} type="email" name="signUpEmail" placeholder='Enter your email' onChange={e => this.onChangeValue(e)} value={this.state.signUpEmail} />
                        </div>
                        <div>
                            <Input className={this.state.errorStylePassword} type="password" name="signUpPassword" placeholder='Enter your password (At least 6 characters)' onChange={e => this.onChangeValue(e)} value={this.state.signUpPassword} />
                        </div>
                        <div id='cmsLoginButtonBox'>
                            <button className='cmsSignupButton' onClick={this.signUpCms}>Start Branding</button>
                        </div>
                        <div className='loginText' id='loginNotRegister'>
                            <p id='errorMessage'>{this.state.errorMessage}</p>
                            <p className='toSignup' onClick={this.isSignUpBox}>Already registered? Login</p>
                        </div>
                    </form>
                </div>)
                    :
                    (<div>
                        <form id='cmsLoginForm'>
                            <div>
                                <Input className={this.state.errorStyle} type="text" name="loginEmail" placeholder='Enter your email' onChange={e => this.onChangeValue(e)} value={this.state.loginEmail} />
                            </div>
                            <div>
                                <Input className={this.state.errorStyle} type="password" name="loginPassword" placeholder='Enter your password' onChange={e => this.onChangeValue(e)} value={this.state.loginPassword} />
                            </div>
                            <div id='cmsLoginButtonBox'>
                                <button className='cmsLoginButton' type='submit' onClick={this.loginCms}>Manage School Brand</button>
                            </div>
                            <div className='loginText' id='loginNotRegister'>
                                <p id='errorMessage'>{this.state.errorMessage}</p>
                                <p className='toSignup' onClick={this.isSignUpBox}>Not registered? Sign up</p>
                            </div></form>
                    </div>)
                }

            </div>
        );
    };
};
         
const mapStateToProps = (state) => {
    return {
        isSchoolAuthenticated: state.cmsAuth.isSchoolAuthenticated,
        isSchoolSignUp: state.cmsAuth.isSchoolSignUp
        // isSignUpBox: state.auth.isSignUpBox
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginCmsUser: (email, password) => {
            dispatch(loginCmsUser(email, password))
        },
        signUpCmsUser: (email, password) => {
            dispatch(signUpCmsUser(email, password))
        } 
}
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(withRouter(PureLogin))

