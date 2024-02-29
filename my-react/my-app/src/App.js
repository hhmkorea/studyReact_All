import './App.css';
import Wood from "./Wood";
import {useState} from "react";
import Sub from "./Sub";

function App() {

    console.log("App 실행됨");

    const [ num, setNum] = useState(5);

    let sample = [ // 초기값 세팅을 제일 위로 해둬야 referece 변경 안됨.
        {id: 1, name: "홍길동"},
        {id: 2, name: "임꺽정"},
        {id: 3, name: "장보고"},
        {id: 4, name: "김영수"},
    ];

    // 다운로드 받음
    const [users, setUsers] = useState(sample); // reference 변경되야 동작!

    const download = () => {
        //fetch().then().then()
        // 기존 데이터 세팅
        setUsers([...sample, {id:num, name: "조자룡"}]);
        setNum(num + 1);
    };

    return (
        <div>
            <button onClick={download}>다운로드</button>
            {users.map(u => (
                <h1>
                    {u.id}, {u.name}
                </h1>
            ))}
        </div>
    );
}

export default App;
