import axios from "axios";
import { setAlert } from "./alert"
import {
    REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE
} from "./types";
import setAuthToken from "../utils/setAuthToken"
// load user
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('http://localhost:5000/api/auth/')
        console.log(res.data)
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })

    } catch (err) {
        console.error(err.response.data)
        dispatch({
            type: AUTH_ERROR
        })
    }
}



// register a user
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password });
    try {
        const res = await axios.post('http://localhost:5000/api/user/', body, config)
        console.log(res.data)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        })
        dispatch(loadUser());
    } catch (err) {

        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}


// login a user
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post('http://localhost:5000/api/auth/', body, config)
        console.log(res.data)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        })
        dispatch(loadUser());

    } catch (err) {

        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

// logout

export const logout = () => dispatch => {
    dispatch({
        type: CLEAR_PROFILE
    })
    dispatch({
        type: LOGOUT
    })
}