import {connect} from 'react-redux'
import Offer from "../pages/Offer"



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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Offer)