import './App.css';
import Wood from "./Wood";
import {useState} from "react";
import Sub from "./Sub";

function App() {

    console.log("App 실행됨");

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

        //setUsers(sample);                     // reference 변경 없음.
        //setUsers([...sample]);                // 깊은 복사로, reference 변경. 강제로 다시 랜더링됨.

        //sample.push({id:5, name: "조자룡"});   // 얇은 복사로, refernce 변경 없이 값만 변경됨. useState() 랜더링 안됨.
        //console.log(sample);
        //setUsers(sample);

        const a = sample.concat({id:5, name: "조자룡"}); // 계속 랜더링됨. but 기존 데이타 sample불변, 똑같은 데이터라 한번만 추가됨.
        console.log(a);
        setUsers(a);

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
