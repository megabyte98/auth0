import axios from "axios";
import { setAlert } from "./alert"
import { ADD_COLLAB,COLLAB_ERROR } from "./types"




//to apply for collab
export const collabApply = (formData,history, id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.put(`http://localhost:5000/api/profile/collaborate/${id}`, formData, config);
        console.log(res.data)
        dispatch({
            type: ADD_COLLAB,
            payload: res.data
        });

        dispatch(setAlert('Request Has been Sent,wait for response!!', 'success'));

        history.push('/dashboard');

    } catch (err) {
        const errors = err.response.data.errors;
        console.error(err.response.data)

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: COLLAB_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}