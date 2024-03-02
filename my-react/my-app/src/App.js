import React from 'react';
import {Route, Routes} from "react-router-dom";
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";
import Navigation from "./components/Navigation";

// 글쓰기, 글삭제, 글목록보기
function App(props) {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" exact={true} element={<ListPage />} />
                <Route path="/write" exact={true} element={<WritePage />} />
            </Routes>
        </div>
    );
}

export default App;