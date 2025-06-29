import styled from "styled-components";
import PanelBase from './css/StyledCommon.css';

const MyPanel = styled.div`
    ${PanelBase} // css 함수로 정의된 스타일 개별 컴포넌트 파일로 가져와서 인용.
    width: 300px; // 개별 스타일 추가 
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
`;

export default function StyledCommon() {
    return (
        <MyPanel>
            <b>Styled Components</b>는 styled 객체를 이용하여 스타일을 정의하는 형식의 라이브러리입니다.
        </MyPanel>
    );
}