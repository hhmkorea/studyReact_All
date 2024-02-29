import './App.css';
import Wood from "./Wood";
import {useState} from "react";
import Sub from "./Sub";

function App() {
    //let number = 1; // 상태 값

    const [number, setNumber] = useState(2); // 2가 default값
    // React안에 hooks 라이브러리 상태값이 됨. React 엔진이 상태값 체크!

    const add = () => {
        //number++; // 자기에게 다시 +1넣는것
        setNumber(number + 1); // React한테 number값 변경할께 라고 요청.
        console.log("add", number);
    }

    // 랜더링 시점 = 상태값 변경, setNumber 호출될때, Dom은 신경 안쓰고 상태값만 변경.
    return (
        <div>
            <h1>숫자 : {number}</h1>
            <button onClick={add}>더하기</button>
            {/* onClick={add()}로 넣으면 바로 실행하는 것 */}
            <Sub />
        </div>
    );
}

export default App;
