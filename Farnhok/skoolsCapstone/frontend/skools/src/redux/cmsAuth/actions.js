import axios from 'axios';
export const CMS_CHECK_LOGIN = 'CMS_CHECK_LOGIN';
export const CMS_LOGIN_SUCCESS = 'CMS_LOGIN_SUCCESS';
export const CMS_LOGIN_FAILURE = 'CMS_LOGIN_FAILURE';
export const CMS_LOGOUT = 'CMS_LOGOUT';
export const CMS_SIGNUP_FAILURE = 'CMS_SIGNUP_FAILURE';

export function checkCmsLogin() {
    if (localStorage.getItem('cmsToken')) {
        return {
            type: CMS_CHECK_LOGIN
        };
    } else {
       return {
           type: CMS_LOGIN_FAILURE
        }
    }
}

function loginCmsSuccess() {
    return {
        type: CMS_LOGIN_SUCCESS
    };
}

function loginCmsFailure() {
    return {
        type: CMS_LOGIN_FAILURE,
    }
}

 function logOutActionCms() {
    return {
        type: CMS_LOGOUT
    }
}

export function loginCmsUser(email, password) {
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/cms/login/`,
            {
                email: email,
                password: password
            }
        )
        .then(response => {
            console.log(response)
            if(response.data == null){
                dispatch(loginCmsFailure());
            } else if (!response.data.token){
                dispatch(loginCmsFailure());
            } else {
                localStorage.setItem('cmsToken', response.data.token);
                dispatch(loginCmsSuccess());
            }
        });
    };
}



export function logOutCms(){
    return (dispatch)=> {
        localStorage.removeItem('cmsToken');
        dispatch(logOutActionCms());
    };
}


function signUpCmsFailure() {
    return {
        type: CMS_SIGNUP_FAILURE,
    }
}

export function signUpCmsUser(email, password) {
    return (dispatch) => {
        return axios.post(`http://localhost:8080/api/cms/signup`,
            {
                email: email,
                password: password
            }
        )
        .then(response => {
            console.log('signup' + response);
            if(!response.data){
                dispatch(signUpCmsFailure());
            } else {
                localStorage.setItem('cmsToken', response.data.token);
                dispatch(loginCmsSuccess());
            }
        })
        .catch(err => {
            dispatch(signUpCmsFailure());
        })
    };
}