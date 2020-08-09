import {ADD_COLLAB,COLLAB_ERROR } from "../actions/types"

const initialState = {
    collab: null,
    loading: true,
    error: {}
}


export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case ADD_COLLAB:
            return {
                ...state,
                collab: payload,
                loading: false
            };
        case COLLAB_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        // case DELETE_JOB:
        //     return {
        //         ...state,
        //         job: null,
        //         loading: false
        //     }
        default:
            return state;}}