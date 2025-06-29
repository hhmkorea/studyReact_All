import React from "react";

export default function EventArgs() {
    // 자체 인수를 추가한 이벤트 핸들러(EventBasic.js 참고.) ---> 실행시 인수의 값이 변하는 경우 사용.
    const current = (e, type) => { // 페이지에서 발생한 이벤트를 트리거로 하여 처리를 실행
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
            {/* 화살표 함수(직접 이벤트 핸들러)를 통해 핸들러를 호출 */}
            {/* 이벤트 속성(e)에 전달하는 것은 함수 자체여야 함, 인수를 전달하기 위해 화살표 함수 한번 더 거침 */}
            <button id="dt" onClick={e => current(e, 'datetime')}>현재 날짜 및 시각</button>
            <button id="date" onClick={e => current(e, 'date')}>현재 날짜</button>
            <button id="time" onClick={e => current(e, 'time')}>현재 시각</button>
        </div>
    );
}