import styled from 'styled-components';

// <button> 요소를 생성하는 MyPanel 컴포넌트
export function MyButton({ className, children }) {
    return (
        <button type="button" className={className}> {/* 1. className을 Prop으로 받음 */}
            {children} {/* 2. 이를 하위 요소에 적용 */}
        </button>
    );
}

// MyButton에 스타일을 부여한 MyStyledButton을 정의한다.
export const MyStyledButton = styled(MyButton)` // 3. MyButton 컴포넌트에 스타일 추가 
    display: block;
    background-color: royalblue;
    color: white;
    font-weight: bold;
    width: 80px;
    height: 50px;
`;
