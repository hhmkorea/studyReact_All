import {Button, Container, Form} from "react-bootstrap";

const ContactPage : React.FC = () => {
    return (
        <Container>
            <h1 className="text-center">Business Contact</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label className="text-start w-100">이름</Form.Label> {/* w-100 : 버튼을 컨테이너의 전체 너비에 맞게 확장하는 역할 */}
                    <Form.Control type="text" placeholder="이름 입력" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="text-start w-100">이메일</Form.Label>
                    <Form.Control type="email" placeholder="이메일 입력" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContent">
                    <Form.Label className="text-start w-100">내용</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder="내용 입력" />
                </Form.Group>
                <Button type="submit" variant="warning" className="w-100" style={{ height: '60px' }}>접수하기</Button>
            </Form>
        </Container>
    )
}

export default ContactPage;