import { useState } from "react";

export default function StateBasic({ init }) {
    const [count, setCount] = useState(init);
    // [카운트] 버튼 클릭 시 카운트 값을 증가시킨다.
    const handleClick = () => {
        // 함수를 두번 호출해도 카운터는 1식 변함. 리엑트는 State를 비동기적으로 업데이트
        // State에 새로운 값이 반영되는 것은 이벤트 핸들러가 끝난 후.
        // setCount(count + 1);
        // setCount(count + 1);

        // 항상 새로운 값으로 연산
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    return (
        <>
            <button onClick={handleClick}>카운트</button>
            <p>{count}번 클릭했습니다.</p>
        </>
    );
}