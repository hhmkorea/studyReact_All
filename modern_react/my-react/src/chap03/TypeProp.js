import PropTypes from "prop-types";

export function Member() {}

function TypeProp(props) {
    console.log(props);
    return <p>결과는 콘솔에서 확인</p>;
}

TypeProp.propTypes = {
    // Member형 프로퍼티
    prop1: PropTypes.instanceOf(Member),
    // 남성, 여성, 기타 중 하나
    prop2: PropTypes.oneOf(['남성', '여성', '기타']),
    // 문자열, 숫자, 부울 값 중 선택 가능
    prop3: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    // 숫자형 배열
    prop4: PropTypes.arrayOf(PropTypes.number),
    // 숫자형 객체
    prop5: PropTypes.objectOf(PropTypes.number),
    // name, age, sex 프로퍼티를 가진 객체
    prop6: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.oneOf(['남성', '여성', '기타']),
    }),
};

export default TypeProp;