import { ADD_EVENT_NAME } from "./action";

const initialState = {
    event_name: null
}

export function eventModalReducer (state = initialState, action) {
    switch(action.type ) {
        case ADD_EVENT_NAME:
        return {
            ...state,
            
        }

        default:
        return state;
    }
}


