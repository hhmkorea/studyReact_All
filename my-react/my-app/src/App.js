import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <div>
            <Header/>
            <Routes> {/* Roustes를 넣어야함!! Route로 화면에서 객체 바꿔치기 */}
                <Route path="/" exact={true} element={<HomePage/>}/>
                <Route path="/login" exact={true} element={<LoginPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;