import axios from 'axios';

export const DELETE_CARD = "DELETE_CARD";

export function deleteThunk(name) {
    return (dispatch) => {
  
      let arrayName = { name: name }
      return axios.post('http://localhost:5000/user', arrayName).then((res) => {
        console.log(arrayName)
        let name = res.data.name
        console.log(name)
        dispatch(addName(name))
      })
    }
  }