import { GET_JOB,GET_JOBS,JOB_ERROR,DELETE_JOB, UPDATE_JOB,GET_MY_POSTINGS } from "../actions/types"

const initialState = {
    job: null,
    jobs: [],
    MyPostings : [],
    loading: true,
    error: {}
}


export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATE_JOB:
        case GET_JOB:
            return {
                ...state,
                job: payload,
                loading: false
            };
        case GET_JOBS:
            return {
                ...state,
                jobs: payload,
                loading: false
            };
        case GET_MY_POSTINGS:
                return {
                    ...state,
                    MyPostings: payload,
                    loading: false
                };
        case JOB_ERROR:
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
            return state;
    }
}