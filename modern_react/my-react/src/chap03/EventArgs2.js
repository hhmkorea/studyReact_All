import React from "react";

export default function EventArgs2() {
    // 인수대신 고유 데이터 속성 활용. ---> 인수의 값이 미리 정해져 있는 경우 사용.
    const current = e => {
        const type = e.target.dataset.type;
        const d = new Date();
        // type 속성 값에 따라 현재 날짜 및 시각을 로그에 출력.
        switch (type) {
            case 'date':
                console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
                break;
            case 'time':
                console.log(`${e.target.id}: ${d.toLocaleTimeString()}`);
                break;
            default:
                console.log(`${e.target.id}: ${d.toLocaleString()}`);
                break;
        }
    };

    return (
        <div>
            {/* 출력할 날짜 및 시각 유형을 고유 데이터 속성으로 지정 */}
            <button id="dt" data-type="datetime" onClick={current}>현재 날짜 및 시각</button>
            <button id="date" data-type="date" onClick={current}>현재 날짜</button>
            <button id="time" data-type="time" onClick={current}>현재 시각</button>
        </div>
    );
}