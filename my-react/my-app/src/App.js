import React, {useMemo, useState} from 'react';
import './App.css';

// useMemo => memorization(기억)
function App(props) {
    const [list, setList] = useState([1, 2, 3, 4]);
    const [str, setStr] = useState("합계");

    const getAddResult = () => {
        // 1초
        let sum = 0;
        list.forEach(i => sum = sum +i);
        console.log("sum 함수 실행됨. : ", sum);
        return sum;
    }
    // interpreter방식으로 한줄씩 내려가며 읽으므로 useMemo는 관리할 함수보다 아래에 있어야 함.
    const addResult = useMemo(() => getAddResult(), [list]);

    return (
        <div>
            <button onClick={() => {
                setStr("Total");
            }}>
                문자 변경
            </button>
            <button onClick={() => {
                setList([...list, 10])
            }}>리스트값 추가</button>
            <div>
                {list.map((i) => (
                    <h1>{i}</h1>
                ))}
            </div>
            <div>{str} : {addResult}</div>
        </div>
    );
}

export default App;