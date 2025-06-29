import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const LoginPage : React.FC = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="login-box p-4" style={{
                border: '1px solid #ced4da',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                width: '100%',
                maxWidth: '500px',
                backgroundColor: '#fff'
            }}>
                <h2 className="text-center">로그인</h2>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label className="text-start w-100">아이디</Form.Label>
                        <Form.Control type="email" placeholder="아이디를 입력하세요" />
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword" className="mt-3">
                        <Form.Label className="text-start w-100">비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
                    </Form.Group>
                    <Form.Group controlId="fromBasicCheckbox" className="mt-3">
                        <Form.Check type="checkbox" label="자동 로그인" className="text-start" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 mt-3" style={{ height: '60px'}}>로그인</Button>

                    <Row className="me-3 text-center">
                        <Col>
                            <Link to="/register">회원가입</Link>
                        </Col>
                        <Col>
                            <Link to="/find-account">계정 찾기</Link>
                        </Col>
                        <Col>
                            <Link to="/find-password">비밀번호 찾기</Link>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    )
}

export default LoginPage;