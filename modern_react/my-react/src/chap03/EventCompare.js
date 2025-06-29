import React, {useState} from "react";
import './css/EventCompare.css';

export default function EventCompare() {
    // 현재 표시 중인 이미지
    const [result, setResult] = useState('');
    // mouseover/mouseleave 이벤트 정보를 result에 반영
    const handleIn = e => setResult(r => `${r}Enter : ${e.target.id}<br />`);
    const handleOut = e => setResult(r => `${r}Leave : ${e.target.id}<br />`);

    return (
        <>
            {/*<div id="outer" onMouseEnter={handleIn} onMouseLeave={handleOut}>*/}
            <div id="outer" onMouseOver={handleIn} onMouseOut={handleOut}>
                외부 (outer)
                <p id="inner">
                    내부 (inner)
                </p>
            </div>
            <div dangerouslySetInnerHTML={{__html: result}}></div>
        </>
    );
}