import {Button, Col, Container, Row, Table} from "react-bootstrap";
import {type CartArray, increase, minusCount, plusCount, resetCart} from "../data/store.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";

interface  CartState { // cart 상태를 설명하는 인터페이스
    cart : CartArray; // cart데이터에 store의 CartArray 객체를 지정.
    user : {id: number, name : string, job : string };
}

const CartPage : React.FC = () => {
    const cartState = useSelector((state : CartState) => state); // useSelector : Redux Store 상태를 읽어 화면에 바인딩 

    const getTotalAmount = useMemo(() => { // useMemo : cartState.cart가 변경될때만 계산.
        return cartState.cart.cart.reduce((total, item) => total + item.quantity * item.price, 0);
    }, [cartState.cart]);

    const dispatch = useDispatch(); // useDispatch : Action을 dispatch하여 상태를 업데이트.

    return (
        <Container>
            <h2>장바구니</h2>
            <Table bordered>
                <thead>
                <tr>
                    <th>상품정보</th>
                    <th>수량</th>
                    <th>상품금액</th>
                    <th>주문하기</th>
                </tr>
                </thead>
                <tbody>
                {cartState.cart.cart.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity * item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <Button className="btn-warning" style={{ marginRight : '10px'}} onClick={() => {dispatch(plusCount(item.id))}}>+</Button>
                            <Button className="btn-warning" style={{ marginRight : '10px'}} onClick={() => {dispatch(minusCount(item.id))}}>-</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Row>
                <Col>
                    <h5>총 상품금액: {getTotalAmount}원</h5>
                </Col>
                <Col>
                    <Button variant="success" style={{ marginRight: '10px'}} onClick={() => {
                        dispatch(increase(10))
                    }}>주문하기</Button>
                    <Button variant="primary" onClick={() => {
                        dispatch(resetCart())
                    }}>카트 비우기</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CartPage;