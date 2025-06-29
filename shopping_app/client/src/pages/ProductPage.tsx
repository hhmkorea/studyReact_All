// ProductPage.tsx
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {API_SERVER_DOMAIN} from "../constants";
import {
    Box,
    Button,
    ButtonGroup, CircularProgress,
    Container,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";
import {useAsync, useCart} from "../hooks";
import {deleteProduct, getProduct, modifyProduct} from "../utils/api";
import {NotFoundPage} from "./index";
import type {AxiosResponse} from "axios";

// type ReturnType<T> = Promise<AxiosResponse<T>>;

const ProductPage = () => {
    const navigate = useNavigate();
    const {productId} = useParams<{ productId: string }>(); // App.tsx에서 라우팅되어 넘어온 URL 매개변수

    const { addCarts } = useCart();

    const {
        loading: getProductLoading,
        data
    } = useAsync(() => getProduct(productId!));

    const {
        request: deleteProductRequest,
        loading: deleteProductLoading
    } = useAsync(() => deleteProduct(productId!), {
        initialRequest: false
    });

    // const {
    //     request: modifyProductRequest,
    //     loading: modifyProductLoading
    // } = useAsync(() => modifyProduct(product!));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [isModifyModal, setIsModifyModal] = useState(false);

    const handleAddCard = () => { // CartItems가 없는 경우 [CartItems] 형식으로 첫 번째 index에 할당, 있는 경우에는 기존 장바구니 정보에 붙여넣기

        if (product) {
            addCarts(product.id);
            setIsModalOpen(true);
        }
    }

    const handlePushPurchasePage = () => { // [구매하기] 버튼 누르면 구매하기 페이지지로 이동
        if (productId) {
            navigate(`/purchase/${productId}`)
        }
    }

    const handlePushHomePage = () => {
        navigate(`/`)
    }

    const handlePushCartPage = () => { // [장바구니 이동] 버튼 누르면 장바구니 페이지로 이동
        navigate(`/cart`);
    }

    const handleDeleteProduct = async () => {
        setIsDeleteModal(false)
        await deleteProductRequest();
        handlePushHomePage();
    }

    // const handleModifyProduct = async () => {
    //     setIsModifyModal(false)
    //     await modifyProductRequest();
    //     handlePushHomePage();
    // }

    if (!productId || !data)
        return <NotFoundPage />;
    // if (getProductLoading || deleteProductLoading || modifyProductLoading)
    if (getProductLoading || deleteProductLoading)
        return <CircularProgress />;

    const product = data.data.product;
    const test = data.data.product.thumbnail?.replaceAll("\\","/");
    //console.log("--------------------- : ", test);
    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{display: "flex", justifyContent: "center", mb: 4}}>
                    {product?.thumbnail && (
                        <img src={`${API_SERVER_DOMAIN}/${test}`}
                             alt={product?.name}
                             style={{width: "100%", maxWidth: 400}}
                        />
                    )}
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 2
                }}>
                    <Typography variant="h4" sx={{fontWeight: 'bold'}}>
                        {product?.name}
                    </Typography>
                    <ButtonGroup orientation="horizontal">
                        <Button variant="text" onClick={() => setIsDeleteModal(true)} color="error">
                            <Delete />
                        </Button>
                        <Button variant="text" onClick={() => setIsModifyModal(true)} color="info">
                            <Edit />
                        </Button>
                    </ButtonGroup>
                </Box>
                <Typography variant="h6" sx={{marginBottom: 4}}>
                    {product?.price.toLocaleString("KO-kr")}원
                </Typography>
                <Typography variant="body1" sx={{marginBottom: 4}}>
                    {product?.explanation}
                </Typography>

                <ButtonGroup orientation="vertical" fullWidth>
                    <Button variant="outlined" onClick={handleAddCard}>
                        장바구니 담기
                    </Button>
                    <Button variant="contained" onClick={handlePushPurchasePage}>
                        구매하기
                    </Button>
                </ButtonGroup>
            </Container>

            <Dialog open={isDeleteModal} onClose={() => setIsDeleteModal(false)}
                    aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">
                    상품을 정말로 삭제하시겠습니까?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        이 작업은 되돌릴 수 없습니다.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsDeleteModal(false)}>
                        아니요
                    </Button>
                    <Button onClick={handleDeleteProduct} autoFocus>
                        네
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={isModifyModal} onClose={() => setIsModifyModal(false)}
                    aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">
                    상품을 정말로 수정하시겠습니까?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        이 작업은 되돌릴 수 없습니다.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsModifyModal(false)}>
                        아니요
                    </Button>
                    <Button autoFocus>
                        네
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">
                    장바구니에 성공적으로 추가했습니다.
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        장바구니 페이지로 이동하시겠습니까?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsModalOpen(false)}>
                        아니요
                    </Button>
                    <Button onClick={handlePushCartPage} autoFocus>
                        네
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ProductPage;