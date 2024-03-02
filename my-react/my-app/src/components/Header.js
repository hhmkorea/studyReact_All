import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

// 하나의 컴포넌트를 생성(재사용)

// styled-components => js파일과 css파일 관리!!!
const StyledHeadBtnDiv = styled.div`
    border: 1px solid black;
    height: 300px;
    background-color: ${(props) => props.backgroundcolor}
`;
// styled에 없는 Link는 상속해서 사용!
const StyledHeadLink = styled(Link)`
    color: red;
`;

const Header = () => {
    return (
        <div>
            <StyledHeadBtnDiv backgroundcolor="yellow">
                <ul>
                    <li>
                        <StyledHeadLink to="/">홈</StyledHeadLink> {/* a href는 전체 랜더링됨. Link to를 사용해서 객체만 변경함 */}
                    </li>
                    <li>
                        <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
                    </li>
                </ul>
            </StyledHeadBtnDiv>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link"> 홈</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br/>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <br/>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;