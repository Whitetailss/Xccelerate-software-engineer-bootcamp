import { SEARCH_SCHOOL, TEACHER_CLICK, FOLLOWER_CLICK, SCORE_CLICK, SIZE_CLICK, ADD_COMPARE, TEACHER_CLICK_REVERSE, FOLLOWER_CLICK_REVERSE, SCORE_CLICK_REVERSE, SIZE_CLICK_REVERSE, CLEAR_COMPARE, CLEAR_ONE_COMPARE, COMPARE_BUTTON_TRUE } from './actions';
// import { schoolResult } from './result'
// import {schoolCompare} from './compare'
import { dayOptions, locationOptions } from './selection';

const initialState = {
    result: [],
    day: dayOptions,
    location: locationOptions,
    compare: [],
    compareButtonStatus: false
};

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_SCHOOL:
            return {
                ...state,
                result: action.result
            }

        case TEACHER_CLICK:
            return {
                ...state,
                result: action.result
            };

        case FOLLOWER_CLICK:
            return {
                ...state,
                result: action.result
            };

        case SCORE_CLICK:
            return {
                ...state,
                result: action.result
            };

        case SIZE_CLICK:
            return {
                ...state,
                result: action.result
            };

        case TEACHER_CLICK_REVERSE:
            return {
                ...state,
                result: action.result
            };

        case FOLLOWER_CLICK_REVERSE:
            return {
                ...state,
                result: action.result
            };

        case SCORE_CLICK_REVERSE:
            return {
                ...state,
                result: action.result
            };

        case SIZE_CLICK_REVERSE:
            return {
                ...state,
                result: action.result
            };

        case ADD_COMPARE:
            return {
                ...state,
                compare: state.compare.concat(action.compare)
            }

        case CLEAR_COMPARE:
            return {
                ...state,
                compare: [],
                compareButtonStatus: false
            }

        case CLEAR_ONE_COMPARE:
            return {
                ...state,
                compare: action.newCompare
            }

        case COMPARE_BUTTON_TRUE:
            return {
                ...state,
                compareButtonStatus: true
            }

        default:
            return state;
    }
}