// src/pages/CartPage.tsx
import {
    Box,
    Button,
    Card,
    Container,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid2,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {CartItem} from "../components/cart";
import {useCart} from "../hooks";

const CartPage = () => {
    const navigate = useNavigate();
    const { carts } = useCart();

    const totalPrice = carts.reduce( // reduce(<콜백 함수>, <초기값>)
        (prev, cur) => prev + (cur.price * cur.count) // <콜백 함수> : 가격 * 개수
        , 0 // <초기값>
    );

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePurchaseProduct = (event: React.FormEvent) => { // [결제하기] 버튼을 클릭할 때 호출
        event.preventDefault();
        setIsModalOpen(true);
    };

    const handlePushHomePage = () => { // [확인] 버튼 클릭하면 메인 페이지로 이동
        setIsModalOpen(false);
        navigate('/');
    }

    return (
        <>
            <Container fixed>
                <Grid2 container spacing={3}>
                    <Grid2 size={{xs:12, sm:8}}>
                        <Typography variant="h4" sx={{ marginBottom: 2 }}>장바구니</Typography>
                        {carts.length === 0 ? (
                            <Typography variant="body1">장바구니에 담긴 상품이 없습니다.</Typography>
                        ) :(
                            carts.map((cart) => (
                                <CartItem key={cart.id} cart={cart} />
                            ))
                        )}
                    </Grid2>

                    <Grid2 size={{ xs:12, sm:4 }}>
                        <Typography variant="h4" sx={{ marginBottom: 2 }}>결제정보</Typography>
                        <Box sx={{ position: "sticky", top: 20 }}>
                            <Card sx={{padding: 2}}>
                                <Typography variant="subtitle1" sx={{marginBottom: 1}}>총 상품 가격: {totalPrice}원</Typography>
                                <Typography variant="subtitle1" sx={{marginBottom: 1}}>배송비: 평생 무료</Typography>
                                <Typography variant="h6" sx={{marginBottom: 2}}>총 결제 금액: {totalPrice}원</Typography>
                                <Button variant="contained" fullWidth onClick={handlePurchaseProduct}>결제하기</Button>
                            </Card>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>

            <Dialog open={isModalOpen} onClose={handlePushHomePage} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">성공적으로 구매했습니다.</DialogTitle>
                <DialogContent>
                    <DialogContentText>메인 페이지로 이동합니다.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePushHomePage} autoFocus>확인</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CartPage;