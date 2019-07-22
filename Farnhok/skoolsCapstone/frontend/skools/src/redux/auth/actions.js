import axios from 'axios';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export function checkLogin() {
    if (localStorage.getItem('token')) {
        return {
            type: CHECK_LOGIN
        };
    } else {
       return {
           type: LOGIN_FAILURE
        }
    }
}

function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

function loginFailure() {
    return {
        type: LOGIN_FAILURE,
    }
}

 function logOutAction() {
    return {
        type: LOGOUT
    }
}

export function loginUser(email, password) {
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/login`,
            {
                email: email,
                password: password
            }
        )
        .then(response => {
            console.log(response)
            if(response.data == null){
                dispatch(loginFailure());
            } else if (!response.data.token){
                dispatch(loginFailure());
            } else {
                localStorage.setItem('token', response.data.token);
                dispatch(loginSuccess());
            }
        });
    };
}

export function loginFacebook(userInfo){
    return(dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/login/facebook`,
        {   
            userInfo: userInfo,
            access_token: userInfo.accessToken
        })
        .then(response => {
            if(response.data == null){
                dispatch(loginFailure('UnKnown Error'));
            } else if (!response.data.token){
                dispatch(loginFailure(response.data.message || "Token not generated!"));
            } else {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userPicture', userInfo.picture.data.url)
                dispatch(loginSuccess())
            }
        });
    };
}



export function logOut(){
    return (dispatch)=> {
        localStorage.removeItem('token');
        localStorage.removeItem('userPicture');
        dispatch(logOutAction());
    };
}


function signUpFailure() {
    return {
        type: SIGNUP_FAILURE,
    }
}

export function signUpUser(email, password) {
    return (dispatch) => {
        return axios.post(`http://localhost:8080/api/signup`,
            {
                email: email,
                password: password
            }
        )
        .then(response => {
            console.log('signup' + response);
            if(!response.data){
                dispatch(signUpFailure());
            } else {
                localStorage.setItem('token', response.data.token);
                dispatch(loginSuccess());
            }
        })
        .catch(err => {
            dispatch(signUpFailure());
        })
    };
}