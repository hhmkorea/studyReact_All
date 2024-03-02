import React from 'react';
import ListPage from "./pages/ListPage";

// 글쓰기, 글삭제, 글목록보기
function App() {

    return (
        <div>
            <ListPage /> {/* 상태값을 들고 있음, 글쓰기 기능도 넣음 */}
        </div>
    );
}

export default App;