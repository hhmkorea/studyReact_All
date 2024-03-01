import React from 'react';
import styled from "styled-components";

// 하나의 컴포넌트를 생성(재사용)

// styled-components => js파일과 css파일 관리!!!
const StyledHeaderBtnDiv = styled.div`
    border: 1px solid black;
    height: 300px;
    background-color: ${(props) => props.backgroundColor}
`;

const Header = () => {
    return (
        <StyledHeaderBtnDiv backgroundColor="blue">
            <ul>
                <li>메뉴1</li>
                <li>메뉴2</li>
            </ul>
        </StyledHeaderBtnDiv>
    );
};

export default Header;