import AddNumber from "../components/AddNumber";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        onClick:function (size) {
            dispatch({type:'INCREMENT', size:size});
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNumber);
// 추가만 하는 컴포넌트로, 상태를 전달하는 props가 없어서 첫번째 인자는 null
