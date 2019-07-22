import {followList} from './followList';
import {eventList} from './eventList';

const initialState = {
    followList: followList,
    eventList: eventList
};

export function profileReducer (state = initialState, action){
    switch(action.type){

        default:
        return state;
    }
}