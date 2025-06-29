// components/ProductList.tsx
import {CircularProgress, Grid2} from "@mui/material";
import {useAsync} from "../../hooks";
import {ProductItem} from ".";
import {getProducts} from "../../utils/api";
import {NotFoundPage} from "../../pages";

const ProductList = () => {
    const { loading, data } = useAsync(getProducts);

    if (loading)
        return <CircularProgress />;
    if (!data)
        return <NotFoundPage />;

    return (
        <Grid2 container spacing={3}>
            {data.data.products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                />
            ))}
        </Grid2>
    );
};

export default ProductList;