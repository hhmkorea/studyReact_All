// ProductItem.tsx
import {Box, Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ProductType} from "../../types";
import {Grid2} from "@mui/material";
import {API_SERVER_DOMAIN} from "../../constants";

interface ProductItemProps {
    product: ProductType;
}

function ProductItem({product}: ProductItemProps) {
    const navigate = useNavigate();

    const handlePushProductPage = () => navigate(`/product/${product.id}`);
    const handlePushPurchasePage = () => navigate(`/purchase/${product.id}`);

    const test = product.thumbnail?.replaceAll("\\","/");

    return (
        <Grid2 size={{xs: 12, sm: 6, md: 4}}>
            <Card sx={{maxWidth: 345, padding: 3, height: 300}}
                  onClick={handlePushProductPage}>

                {product.thumbnail && (
                    <CardMedia
                        sx={{height: 140}}
                        image={`${API_SERVER_DOMAIN}/${test}`}
                        title={product.name}
                    />
                )}
                <CardContent sx={{padding: 0}}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}>
                        {product.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            height: 30,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {product.explanation}
                    </Typography>
                </CardContent>
                <Box sx={{display: "flex", justifyContent: "flex-end", marginTop: 3}}>
                    <Button size="small"
                            onClick={handlePushPurchasePage}
                            variant="contained"
                    >
                        구매하기
                    </Button>
                </Box>
            </Card>
        </Grid2>
    );
}

export default ProductItem;