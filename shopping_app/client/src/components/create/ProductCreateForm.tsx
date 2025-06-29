// ProductCreateForm.tsx
import {
    Button,
    Container,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import {ThumbnailUploader} from ".";
import {useNavigate} from "react-router-dom";
import {createProduct, modifyThumbnail} from "../../utils/api";
import useAsync from "../../hooks/useAsync";

const ProductCreateForm = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [explanation, setExplanation] = useState("");
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [createdProductId, setCreatedProductId] = useState(""); // 성공적으로 생성된 상품 상태 저장.
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const handleNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setName(event.target.value);
    };

    const handlePriceChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPrice(Number(event.target.value));
    };

    const handleExplanationChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setExplanation(event.target.value);
    };

    const { request: createProductRequest } = useAsync(createProduct, {
        initialRequest: false,
    });

    const { request: thumbnailUploadRequest } = useAsync(modifyThumbnail, {
        initialRequest: false,
    });

    const handlePushProdcutPage = () =>  {
        setIsModalOpen(false);
        navigate(`/product/${createdProductId}`);
    };

    // 상품 등록
    const handleCreateProduct = async (event: React.FormEvent) => {
        event.preventDefault();

        const createProductResponse = await createProductRequest({
            name,
            explanation,
            price,
        });

        if (thumbnail) {
            await thumbnailUploadRequest(
                createProductResponse.data.product.id,
                thumbnail
            );
        }
        setCreatedProductId(createProductResponse.data.product.id);
        setIsModalOpen(true);
    };

    return (
        <>
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>상품 생성</Typography>
                <form onSubmit={handleCreateProduct}>
                    <TextField label="상품 이름" fullWidth value={name} onChange={handleNameChange} />
                    <TextField label="상품 가격" fullWidth value={price} onChange={handlePriceChange} margin="normal" />
                    <TextField label="상품 설명" fullWidth multiline rows={4} value={explanation} onChange={handleExplanationChange} margin="normal" />
                    <ThumbnailUploader value={thumbnail} onChange={(file) => setThumbnail(file)} /> {/* [파일선택] 선택된 파일 없음. */}
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{
                        marginTop: 6
                    }}>생성</Button>
                </form>
            </Container>
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">
                    상품을 성공적으로 추가했습니다.
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        확인을 누르면 상품 상세 페이지로 이동합니다.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePushProdcutPage} autoFocus>
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ProductCreateForm;