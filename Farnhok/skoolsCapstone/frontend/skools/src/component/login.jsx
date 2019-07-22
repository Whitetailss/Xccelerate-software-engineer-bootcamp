import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import { NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginFacebook, loginUser} from '../redux/auth/actions';
import {Input} from 'reactstrap';
import './../assets/css/login.css';


class PureLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            modal: false,
            email: '',
            password: '',
            errorMessage: '',
            errorStyle: 'loginInput',
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

    responseFacebook = (userInfo) => {
        if(userInfo.accessToken){
            this.props.loginFacebook(userInfo);
        }
        return null;
    };

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    login = e => {
        e.preventDefault();
        this.props.loginUser(this.state.email, this.state.password)
        this.checkLogin();
    };

    checkLogin = () => {
            if (this.props.isAuthenticated) {
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
            <div id='loginContainer'>
                <form id='loginForm'>
                    <div className='loginText'>
                        <h3>Hello Parents!</h3>
                        <p>Sign into your account here.</p>
                    </div>
                    <div>
                        <FacebookLogin  
                        className='loginButton'
                        appId ='339253950099115'
                        autoLoad={false}
                        cookies={false}
                        fields="name,email,picture"
                        onClick={this.componentClick}
                        callback={this.responseFacebook}
                        /> 
                    </div> 
                    <br />
                    <div className='loginText' id='loginOr'>
                        <h6>OR</h6>
                    </div>
                    <div>
                        <label>Email</label>
                        <Input className={this.state.errorStyle} type="text" name="email" placeholder='Enter your email' onChange={e => this.onChangeValue(e)} value={this.state.username}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Input className={this.state.errorStyle} type="password" name="password" placeholder='Enter your password' onChange={e => this.onChangeValue(e)} value={this.state.password}/>
                    </div>
                    <div id='loginButtonBox'>
                        <button className='loginButton' type='submit' onClick={this.login}>LOGIN</button>
                    </div>
                    <div className='loginText' id='loginNotRegister'>
                        <p id='errorMessage'>{this.state.errorMessage}</p>
                        <p>Not registered? <NavLink to="/signup" className='loginLink'>Sign up</NavLink></p>
                    </div>
                </form>
            </div>
        );
    };
};
 
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => {
            dispatch(loginUser(email, password))
        },    
        loginFacebook: (accessToken) => {
            dispatch(loginFacebook(accessToken))
        }
    }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(withRouter(PureLogin))