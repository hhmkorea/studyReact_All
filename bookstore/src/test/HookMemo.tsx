import React, {useMemo, useState} from "react";

const HookMemo: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [show, setShow] = useState<boolean>(true);

    // useMemo : 특정 값이나 함수가 변경될 때만 연산을 재실행.
    const excal = useMemo<number>(() => { // 콜백 함수
        console.log('Calculating... ');
        return count * 2;
    }, [count]); // count 가 변경될때만 재실행

    return (
        <div>
            <p>계산 결과 : {excal}</p>
            <button onClick={() => setCount(count + 1)}>카운트 증가</button>
            <button onClick={() => setShow(!show)}>토글 버튼</button>
            {show && <p>Show is true</p>}
        </div>
    );
};

export default HookMemo;