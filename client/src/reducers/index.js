import { combineReducers } from "redux";
import alert from "./alert"
import auth from "./auth"
import profile from "./profile"
import post from "./post"
import job from "./job"
import collab from "./collab"

export default combineReducers({
    alert,
    auth,
    profile,
    post,
    job,
    collab
});