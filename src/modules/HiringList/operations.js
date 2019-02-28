import axios from "axios";
import {backendUrl} from "../backendUrl";
import actions from "./actions";

const getFreelancers = () => (dispatch) => {
    axios.get(`${backendUrl}/getListHRs`)
        .then(res => {
            console.log(res)
            dispatch(actions.getData(res.data))
        })
        .catch(res => console.log({res}))
}


export default {
    getFreelancers,
}