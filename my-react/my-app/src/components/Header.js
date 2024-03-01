import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

// 하나의 컴포넌트를 생성(재사용)

// styled-components => js파일과 css파일 관리!!!
const StyledHeaderBtnDiv = styled.div`
    border: 1px solid black;
    height: 300px;
    background-color: ${(props) => props.backgroundcolor}
`;

const Header = () => {
    return (
        <StyledHeaderBtnDiv backgroundcolor="yellow">
            <ul>
                <li>
                    <Link to="/">홈</Link> {/* a href는 전체 랜더링됨. Link to를 사용해서 객체만 변경함 */}
                </li>
                <li>
                    <Link to="//10">로그인</Link>
                </li>
            </ul>
        </StyledHeaderBtnDiv>
    );
};

export default Header;