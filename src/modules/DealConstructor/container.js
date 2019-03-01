import {connect} from 'react-redux'
import Actions from "./actions";
import DealConstructor from "../../pages/DealConstructor";



function mapStateToProps(state, ownProps) {
  return {
    budget: state.Deal.budget,
    duration: state.Deal.duration,
    amount: state.Deal.amount,
    region: state.Deal.region,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dealParamsAdded: (prop) => (value) => dispatch(Actions.dealParamsAdded(prop, value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DealConstructor)