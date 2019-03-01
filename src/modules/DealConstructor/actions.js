import __types from "./types";

const dealParamsAdded = (prop, value) =>({
  type: __types.DEAL_PARAMS_ADDED,
  prop,
  value,
});

export default {
  dealParamsAdded
}