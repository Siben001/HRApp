import __types from "./types";

const initialSrate = { budget: '', amount: '', duration: '', region: 'Санкт-Петербург', comment: ''};

export default (state = initialSrate, action) => {
  switch (action.type) {
    case __types.DEAL_PARAMS_ADDED: {
      const {prop, value} = action;
      return{
        ...state,
        [prop]: value.target.value
      }
    }
    default: return state;
  }
}