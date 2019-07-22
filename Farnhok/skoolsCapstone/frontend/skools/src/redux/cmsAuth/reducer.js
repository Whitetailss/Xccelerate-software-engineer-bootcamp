import { CMS_LOGIN_SUCCESS, CMS_LOGOUT, CMS_CHECK_LOGIN, CMS_SIGNUP_FAILURE} from './actions';

const initialState = {
    isSchoolAuthenticated: false,
    isSchoolSignUp: false,
   
};

export function cmsAuthReducer (state = initialState, action){
    switch(action.type){
        case CMS_CHECK_LOGIN:
        return {
            ...state,
            isSchoolAuthenticated: true
        };

        case CMS_LOGIN_SUCCESS:
        return {
            ...state,
            isSchoolAuthenticated: true
        };

        case CMS_LOGOUT:
        return {
            ...state,
            isSchoolAuthenticated: false
        };
        
        case CMS_SIGNUP_FAILURE:
        return {
            ...state,
            signUpMessage: false
        };

        default:
        return state;
    }
}