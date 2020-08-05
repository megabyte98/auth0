import axios from "axios";
import { setAlert } from "./alert"
import { GET_JOB,GET_JOBS,JOB_ERROR,DELETE_JOB } from "./types"



// to add job
export const createJob = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post("http://localhost:5000/api/job/", formData, config)
        console.log(res.data)
        dispatch({
            type: GET_JOB,
            payload: res.data
        })
        dispatch(setAlert('Job Posted Successfully', 'success'))
    } catch (err) {
        console.log(err.response)
        dispatch({
            type: JOB_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}


//to get all jobs
export const getJobs = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:5000/api/job/")
        console.log(res.data)
        dispatch({
            type: GET_JOBS,
            payload: res.data
        })
    }
    catch (err) {
        dispatch({
            type: JOB_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }
}

