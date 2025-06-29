// src/components/cart/CartItem.tsx
import {Card, CardContent, CardMedia, Grid2, IconButton, Typography} from "@mui/material";
import {Add, Delete, Remove} from "@mui/icons-material";
import {grey} from "@mui/material/colors";
import {ProductType} from "../../types";
import {API_SERVER_DOMAIN} from "../../constants";
import {useCart} from "../../hooks";

type Props = {
    cart: ProductType & { count: number };
}

const CartItem = ({cart}: Props) => {
    const { changeCount } = useCart();

    const test = cart.thumbnail?.replaceAll("\\","/");

    return(
        <Card sx={{display: 'flex', marginBottom: 2}}>
            {cart.thumbnail && (
                <CardMedia sx={{width: 100}} image={`${API_SERVER_DOMAIN}/${test}`} title={cart.name} />
            )}
            <CardContent sx={{width: '100%'}}>
                <Typography variant="h6">{cart.name}</Typography>
                <Typography variant="h6" fontSize={14} color={grey[600]}>{cart.price.toLocaleString('KO-ko')}원</Typography>

                <Grid2 container justifyContent='space-between'>
                    <Grid2>
                        <IconButton onClick={() => changeCount(cart.id, "decrease")}>
                            <Remove />
                        </IconButton>{cart.count}
                        <IconButton onClick={() => changeCount(cart.id, "increase")}>
                            <Add />
                        </IconButton>
                    </Grid2>

                    <Grid2>
                        <IconButton><Delete /></IconButton>
                    </Grid2>
                </Grid2>
            </CardContent>
        </Card>
    );
};

export default CartItem;