import Axios from "axios";

export const ADD_EVENT_NAME = "ADD_EVENT_NAME"
// export const ADD_DATE = "ADD_DATE"
// export const ADD_START_TIME = "ADD_START_TIME"
// export const ADD_VENUE = "ADD_VENUE"
// export const ADD_DESCRIPTION = "ADD_DESCRIPTION"
// export const ADD_PRICE = "ADD_PRICE"
// export const ADD_AMOUNT= "ADD_AMOUNT"

export function addEventName(result) {
    return (dispatch) => {
        // axios.post ("url", ({result:result}).then 
        console.log("success")

        dispatch({
            type: ADD_EVENT_NAME,
            
        })
    }
}
