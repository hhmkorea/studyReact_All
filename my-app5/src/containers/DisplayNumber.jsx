import DisplayNumber from "../components/DisplayNumber";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        number:state.number
    }
}

function mapDispatchToProps() {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayNumber);
// mapStateToProps : 첫번째 인자, store 변경사항 통보받아 컴포넌트의 props로 전달하는 역할.
// mapDispatchToProps : 두번째 인자, dispatch를 리엑트 컴포넌트의 props로 연결하는 역할.

/*

export default class extends Component {
    state = {number:store.getState().number}
    constructor(props) {
        super(props);
        store.subscribe(function () {
            this.setState({number:store.getState().number});
        }.bind(this));
    }
    render() {
        return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
    }
}*/
