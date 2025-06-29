import styled from 'styled-components';

// 표준 <div> 요소를 확장한 MyPanel 컴포넌트를 정의한다.
const MyPanel = styled.div` // <div> 요소를 확장하여 지정된 스타일을 적용한 사례
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    color: white;
    border-radius: ${ props => (props.theme.radius ? '10px' : '0px')}; // prop에 접근하기 위해 화살표 함수를 경유. 
    background-color: ${ props => props.theme.color };
`;

export default function StyledProps({ theme }) {
    return (
        <MyPanel theme={
            {
                radius: true,
                color: 'royalblue'
            }
        }><b>Styled Components</b>는 styled 객체를 이용하여 스타일을 정의하는 형식의 라이브러리입니다.</MyPanel>
    );
}