import axios from 'axios';

export const BANNER_UPLOAD = 'BANNER_UPLOAD';
export const VIDEO_UPLOAD = 'VIDEO_UPLOAD';
export const CONTACT_INFO_SAVED = 'CONTACT_INFO_SAVED';
export const OTHER_DETAILS_SAVED = 'OTHER_DETAILS_SAVED';
export const CONTACT_INFO_PUB = 'CONTACT_INFO_PUB';
export const FACILITY_IMAGE_UPLOAD = 'FACILITY_IMAGE_UPLOAD';
export const TEACHER_IMAGE_UPLOAD = 'TEACHER_IMAGE_UPLOAD';
export const SUBMIT_FAILURE = 'SUBMIT_FAILURE';
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';


function submitFailure(){
    return {
        type: SUBMIT_FAILURE
    }
}


function submitSuccess(){
    return {
        type: SUBMIT_SUCCESS
    }
}


export function submitCmsContent(bannerImg, mainVideo, contactInfo, moreDetails){
    console.log('got here with save button')
    return  (dispatch) =>{
      
        let cmsOptions = {
            method: 'POST',
            url: `http://localhost:8080/school/info`,
            data:{
                bannerImg: bannerImg,
                mainVideo: mainVideo,
                contactInfo:contactInfo,
                moreDetails: moreDetails
                },
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('cmsToken')
            }
        } 
               
        return axios(cmsOptions).then(response =>{
            console.log('CMS content' + response.data)
            if(!response.data){
                dispatch(submitFailure());
            } else {
                localStorage.setItem('school detail', response.data);
                dispatch(submitSuccess());
            }
        })
        .catch (err=>{
            dispatch(submitFailure());
        })

    }
} 


// export function submitCmsMedia(facility, teacher){
//     console.log('got here with save media button')
//     return  (dispatch) =>{
      
//         let cmsOptions = {
//             method: 'POST',
//             url: `http://localhost:8080/school/api`,
//             data:{
//                 facility: facility,
//                 teacher: teacher,
//                 },
//             headers:{
//                 'Authorization': 'Bearer ' + localStorage.getItem('cmsToken')
//             }
//         } 
               
//         return axios(cmsOptions).then(response =>{
//             console.log('CMS content' + response.data)
//             if(!response.data){
//                 dispatch(submitFailure());
//             } else {
//                 localStorage.setItem('school media', response.data);
//                 dispatch(submitSuccess());
//             }
//         })
//         .catch (err=>{
//             dispatch(submitFailure());
//         })

//     }
// } 


export function uploadMedia(url, caption, uploaderName){
    return (dispatch) => {
        if (uploaderName === 'banner')
        dispatch({
            type: BANNER_UPLOAD,
            payload: url
        }) 
        else if (uploaderName === 'facility')
        dispatch({
            type: FACILITY_IMAGE_UPLOAD,
            payload: {imgUrl: url, caption: caption}
        })
        else if (uploaderName === 'teacher')
        dispatch({
            type: TEACHER_IMAGE_UPLOAD,
            payload:  {imgUrl: url, caption: caption}
        })
        else if(uploaderName === 'mainVideo')
        dispatch({
            type: VIDEO_UPLOAD,
            payload: url
        })
    }

} 


export function saveInput(contactObj, inputType){
    console.log(contactObj)
    return (dispatch) =>{
        if (inputType === 'contact')
        dispatch({
            type: CONTACT_INFO_SAVED,
            payload: contactObj
        })
        else if (inputType === 'other')
        dispatch({
            type: OTHER_DETAILS_SAVED,
            payload: contactObj
        })
        else {
            console.log('error happens here')
        }
    }
}