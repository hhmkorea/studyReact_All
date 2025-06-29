import React, {useState} from "react";

export default function EventOnce() { // 첫 번째 클릭 시 한 번만 표시, 두 번 이상 클리 시 변동 없음.
    // 클릭 여부를 관리하기 위한 플래그
    const [clicked, setClicked] = useState(false); // 초기값 false
    // 오늘의 운세(점수)
    const [result, setResult] = useState('-');
    const handleClick = e => {
        // 클릭하지 않은 경우에만 운세를 계산
        if (!clicked) { // false 일때만 실행
            setResult(Math.floor(Math.random() * 100 + 1 ));
            // 플래그 반전
            setClicked(true); // 클릭한 순간 true
        }
    };

    return (
        <>
            <button onClick={handleClick}>결과 보기</button>
            <p>오늘의 운세는 {result}점 입니다.</p>
        </>
    );
}