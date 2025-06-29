import {Container, Nav, Navbar} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import AboutPage from "../pages/AboutPage.tsx";
import ListPage from "../pages/ListPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import CartPage from "../pages/CartPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import DetailPage from "../pages/DetailPage.tsx";
import {BasketFill, PersonFill} from "react-bootstrap-icons";

const Content : React.FC = () => {
    return (
        <div>
            <Navbar style={{ backgroundColor: '#4169E1'}} data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/"><h1>BookStore</h1></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/list">Product</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login" className="d-flex align-items-center">
                            <PersonFill size={20} className="me-2" />Login
                        </Nav.Link>
                        <Nav.Link href="/cart" className="d-flex align-items-center">
                            <BasketFill size={20} className="me-2" />Cart
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/list" element={<ListPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/detail/:id" element={<DetailPage />} /> {/* :id 값을 동적으로 보냄 */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={'페이지가 존재하지 않습니다. 확인해주세요.'} />
            </Routes>
        </div>
    );
};
export default Content;