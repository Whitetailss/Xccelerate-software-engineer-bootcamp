//what states need to be set up?
import {BANNER_UPLOAD, VIDEO_UPLOAD, CONTACT_INFO_SAVED, FACILITY_IMAGE_UPLOAD, 
    TEACHER_IMAGE_UPLOAD, OTHER_DETAILS_SAVED, SUBMIT_FAILURE, SUBMIT_SUCCESS} from './action'

const initialState = {
    bannerImgUrl:'' ,
    mainVideoUrl:'',
    facility:[],
    teacher: [],
    contactInfo:{
            name: '',
            address: '',
            location: '',
            contactNumber: '',
            website: '',
            email: '',
    },
    moreDetails:{
            isAM: false,
            isPM: false,
            isFullDay: false,
            isLongFullDay: false,
            noOfStudentAM: '',
            tuitionAM: '',
            noOfStudentPM: '',
            tuitionPM: '',
            noOfStudentFD:'',
            tuitionFD: '',
            noOfStudentLFD: '',
            tuitionLFD: '',
            hasSubsidy: false,
            subsidyAmt:'',
            noOfTeacher: ''
    },
    cmsErrMsg:''
    
}


export function cmsDetailReducer (state = initialState, action){
    switch(action.type){

        case BANNER_UPLOAD:
        return {
            ...state,
            bannerImgUrl: action.payload
        }

        case VIDEO_UPLOAD:
        return {
            ...state,
            mainVideoUrl: action.payload
        }

        case FACILITY_IMAGE_UPLOAD:
        return {
            ...state,
            facility: state.facility.concat(action.payload)
        }

        case TEACHER_IMAGE_UPLOAD:
        return {
            ...state,
            teacher: state.teacher.concat(action.payload)
        }

        case CONTACT_INFO_SAVED:
        return {
            ...state,
            contactInfo: Object.assign({}, 
                state.contactInfo, action.payload)
        }

        case OTHER_DETAILS_SAVED:
        return{
            ...state,
            moreDetails: Object.assign({}, 
                state.moreDetails, action.payload)
        }

        case SUBMIT_FAILURE:
        return{
            ...state,
            cmsErrMsg: 'Server Error: Fail to submit data to server'
        }

        case SUBMIT_SUCCESS:
        return state;


        default:
        return state;
    }

}
