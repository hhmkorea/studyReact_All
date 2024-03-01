import React, {useEffect, useState} from 'react';
import Home from "../components/home/Home";

const HomePage = () => {
    const [boards, setBoards] = useState([]);
    const [user, setUser] = useState(0);

    useEffect(() => {
        // 다운로드 가정 = fetch(), axios(), ajax()
        let data = [
            {id:1, title:"제목1", content:"내용1"},
            {id:2, title:"제목2", content:"내용2"},
            {id:3, title:"제목3", content:"내용3"},
        ];

        setBoards([...data]); // <Home />에 뿌려져야함.
        setUser({id:1, username:'cos'});
    }, []);

    return (
        <div>
            <Home boards={boards} setBoards={setBoards} number={user} /> {/* props */}
        </div>
    );
};

export default HomePage;