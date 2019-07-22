import axios from 'axios';

export const SEARCH_SCHOOL = 'SEARCH_SCHOOL'
export const TEACHER_CLICK = 'TEACHER_CLICK';
export const FOLLOWER_CLICK = 'FOLLOWER_CLICK';
export const SCORE_CLICK = 'SCORE_CLICK';
export const SIZE_CLICK = 'SIZE_CLICK';
export const TEACHER_CLICK_REVERSE = 'TEACHER_CLICK_REVERSE';
export const FOLLOWER_CLICK_REVERSE = 'FOLLOWER_CLICK_REVERSE';
export const SCORE_CLICK_REVERSE = 'SCORE_CLICK_REVERSE';
export const SIZE_CLICK_REVERSE = 'SIZE_CLICK_REVERSE';
export const ADD_COMPARE = 'ADD_COMPARE';
export const CLEAR_COMPARE = 'CLEAR_COMPARE';
export const CLEAR_ONE_COMPARE = 'CLEAR_ONE_COMPARE';
export const COMPARE_BUTTON_TRUE = 'COMPARE_BUTTON_TRUE';

export function searchSchool(result) {
    console.log(result)
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/search`,
        {
            schoolName: result.schoolName,
            selectedLocation: result.selectedLocation,
            day1: result.day1,
            day2: result.day2,
            day3: result.day3,
            day4: result.day4,
        })
        .then(response => {
            console.log(response.data)
            dispatch({
                type: SEARCH_SCHOOL,
                result: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function teacherClick(result) {
    return (dispatch) => {
        var sortedData = [].concat(result)
        .sort((a, b) => b.no_of_teacher - a.no_of_teacher)
        console.log(sortedData)
        dispatch({
            type: TEACHER_CLICK,
            result: sortedData
        })
    };
}

export function followerClick(result) {
    return (dispatch) => {
        var sortedData = [].concat(result)
        .sort((a, b) => b.follower - a.follower)
        console.log(sortedData)
        dispatch({
            type: FOLLOWER_CLICK,
            result: sortedData
        })
    };
}

export function scoreClick(result) {
    return (dispatch) => {
        var sortedData = [].concat(result)
        .sort((a, b) => b.score - a.score)
        console.log(sortedData)
        dispatch({
            type: SCORE_CLICK,
            result: sortedData
        })
    };
}

export function sizeClick(result) {
    return (dispatch) => {
        var sortedData = [].concat(result)
        .sort((a, b) => b.school_size - a.school_size)
        console.log(sortedData)
        dispatch({
            type: SIZE_CLICK,
            result: sortedData
        })
    }
}

export function teacherClickReverse(result) {
    return (dispatch) => {
        var sortedData = [].concat(result)
        .sort((a, b) => a.no_of_teacher - b.no_of_teacher)
        console.log(sortedData)
        dispatch({
            type: TEACHER_CLICK_REVERSE,
            result: sortedData
        })
    };
}

export function followerClickReverse(result) {
    return (dispatch) => {
        var sortedData = [].concat(result)
        .sort((a, b) => a.follower - b.follower)
        console.log(sortedData)
        dispatch({
            type: FOLLOWER_CLICK_REVERSE,
            result: sortedData
        })
    };
}

export function scoreClickReverse(result) {
    return (dispatch) => {
        var sortedData = [].concat(result)
        .sort((a, b) => a.score - b.score)
        console.log(sortedData)
        dispatch({
            type: SCORE_CLICK_REVERSE,
            result: sortedData
        })
    };
}

export function sizeClickReverse(result) {
    return (dispatch) => {
        var sortedData = [].concat(result)
        .sort((a, b) => a.school_size - b.school_size)
        console.log(sortedData)
        dispatch({
            type: SIZE_CLICK_REVERSE,
            result: sortedData
        })
    }
}

export function addCompare(school) {
    return (dispatch) => {
        dispatch({
            type: ADD_COMPARE,
            compare: school
        })
    }
}

export function clearCompare() {
    return (dispatch) => {
        dispatch({
            type: CLEAR_COMPARE
       })
    }
}

export function clearOneCompare(newCompare) {
    return (dispatch) => {
        dispatch({
            type: CLEAR_ONE_COMPARE,
            newCompare: newCompare
       })
    }
}

export function compareButtonTrue() {
    return (dispatch) => {
        dispatch({
            type: COMPARE_BUTTON_TRUE
       })
    }
}
