import { LOGIN_SUCCESS, LOGOUT, CHECK_LOGIN, SIGNUP_FAILURE} from './actions';

const initialState = {
    isAuthenticated: false,
    userName: null,
    isSignUp: false,
    isSignUpBox: false
};

export function authReducer (state = initialState, action){
    switch(action.type){
        case CHECK_LOGIN:
        return {
            ...state,
            isAuthenticated: true
        };

        case LOGIN_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,

        };

        case LOGOUT:
        return {
            ...state,
            isAuthenticated: false
        };
        
        case SIGNUP_FAILURE:
        return {
            ...state,
            signUpMessage: false
        };

        default:
        return state;
    }
}