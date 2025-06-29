// Proptypes 가져오기
import PropTypes from "prop-types";

function MyHello(props) {
    return (
      <div>안녕하세요, {props.myName}님!</div>
    );
}

// 타입 정보 선언
MyHello.propTypes = {
    myName: PropTypes.string.isRequired
};

export default MyHello;