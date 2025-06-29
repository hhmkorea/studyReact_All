import styled from 'styled-components';

// 표준 <div> 요소를 확장한 MyPanel 컴포넌트를 정의한다.
const MyPanel = styled.div` // <div> 요소를 확장하여 지정된 스타일을 적용한 사례
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: royalblue;
  color: white;
`;

export default function StyledComp() {
    return ( // MyPanel은 스타일이 적용된 요소, 즉 컴포넌트임.
        <MyPanel><b>Styled Components</b>는 styled 객체를 이용하여 스타일을 정의하는 형식의 라이브러리입니다.</MyPanel>
    );
}