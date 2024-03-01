import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/home/Home";

const HomePage = () => {
    // http 요청 (fetch, axios(다운)) : jquery ajax와 같은 역할. 여기서는 JS 기준.
    // 통신 데이타는 page가 들고 있게 통일. component에 넣으면 재사용할 위험성이 있으니 page로 통일.
    const [boards, setBoards] = useState([]); // boards는 상태데이타로 해야함!! 상태가 변경되면 랜더링.
    const [number, setNumber] = useState(0);

    useEffect(() => {
        // 다운로드 가정 = fetch(), axios(), ajax()
        let data = [
            {id:1, title:"제목1", content:"내용1"},
            {id:2, title:"제목2", content:"내용2"},
            {id:3, title:"제목3", content:"내용3"},
        ];

        // 다운로드 끝나지 않고 실행하면 빈 데이타가 들어감. 다운로드가 실제로 끝나야 데이터 들어감.
        setBoards([...data]); // <Home />에 뿌려져야함.
    }, []); // 빈 배열 한번만 실행

    return (
        <div>
            <Header />
            <Home boards={boards} setBoards={setBoards} number={number} setNumber={setNumber}/> {/* props */}
            <Footer />
        </div>
    );
};

export default HomePage;