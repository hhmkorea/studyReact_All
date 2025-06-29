import React from "react";
import './css/EventPropagation.css';

export default function EventPropagation() {
    const handleParent = () => alert('#parent run...');
    const handleMy = () => alert('#my run...');
    const handleChild = e => {
        // e.stopPropagation(); // 전파 방지
        e.preventDefault(); // 이벤트 기본 동작 취소하기 -> 페이지로 이동 안함.
        alert('#child run...');
    }

    return (
        <div id="parent" onClick={handleParent}>
            부모 요소
            <div id="my" onClick={handleMy}>
                현재 요소
                <a id="child" href="https://www.google.co.kr/" onClick={handleChild}>
                    자식 요소
                </a>
            </div>
        </div>
    );
}