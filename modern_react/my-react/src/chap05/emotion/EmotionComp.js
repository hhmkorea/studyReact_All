/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

// 스타일링된 컴포넌트 준비
const MyPanel = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
`;

export default function EmotionComp() {
    return (
        <MyPanel>
            <b>Emotion JSX</b>는 Styled Components와 비슷한 방식으로 작성이 가능하며 표현력이 자유로운 특징이 있는 라이브러리입니다.
        </MyPanel>
    );
}