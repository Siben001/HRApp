import {connect} from 'react-redux'
import operations from "./operations";
import HiringList from "../../pages/HiringList"


function mapStateToProps(state, ownProps) {
    return {
        hr_list: state.HiringListReducer.hr_list,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getData: () => dispatch(operations.getFreelancers()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HiringList)