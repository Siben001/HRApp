import types from "./types";

const initialState = {
    hr_list: [],
    interviewer_list: [],
}

function HiringListReducer(state = initialState, action) {
    switch (action.type) {
        case types.GOT_DATA:
            console.log('ALKSJAKLSLASJ')
            return {
                ...state,
                hr_list: action.hr_list,
                interviewer_list: action.interviewer_list,
            };
        default:
            return state
    }
}


export default HiringListReducer;