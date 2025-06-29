import React from "react";
import wrapPromise from "./wrapPromise";

// Promise의 상태를 관리하는 객체를 가져옴
const info = getInfo();
// Promise의 상태에 따라 결과를 표시하는 컴포넌트
export default function ThrowResult() {
    const result = info.get();
    return <p>{result}</p>;
}

// 비동기적으로 데이터를 취득하기 위한 함수
function getInfo() {
    return wrapPromise(new Promise((resolve, reject) => {
        // 2000밀리초 후 50% 확률로 성공/실패 메시지를 생성
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Succeeded!!');
            } else {
                reject('Error!!');
            }
        }, 2000);
    }));
}