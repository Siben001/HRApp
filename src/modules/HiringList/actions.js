import types from "./types";

const getData = (hr_list) => ({
    type: types.GOT_DATA,
    hr_list,
});


export default {
    getData,
}