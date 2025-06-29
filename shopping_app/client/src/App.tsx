// App.tsx
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/shared";
import {CartPage, HomePage, NotFoundPage, ProductCreatePage, ProductPage, PurchasePage} from "./pages";

function App() {

    return (
        <Layout>
            <Routes>
                <Route index element={<HomePage />} /> {/* http://localhost:3000/ --> index URL(/)에 HomePage 컴포넌트 랜더링 */}
                <Route path="create"
                       element={<ProductCreatePage />} /> {/* http://localhost:3000/create 상품 등록 컴포넌트 랜더링 */}
                <Route path="cart"
                       element={<CartPage />} /> {/* http://localhost:3000/create 상품 등록 컴포넌트 랜더링 */}
                <Route path="product/:productId"
                       element={<ProductPage />} /> {/* http://localhost:3000/product/:productId 해당 페이지 상세정보 랜더링 */}
                <Route path="purchase/:productId"
                       element={<PurchasePage />} /> {/* http://localhost:3000/purchase/:productId 해당 페이지 구매정보 랜더링 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
 