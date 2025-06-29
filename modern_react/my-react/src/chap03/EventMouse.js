import React, {useState} from "react";

export default function EventMouse({ beforeSrc, afterSrc, alt }) {
    // 현재 표시 중인 이미지
    const [current, setCurrent] = useState(beforeSrc);
    // mouseover/mouseleave 이벤트 핸들러를 준비
    const handleEnter = () => setCurrent(afterSrc);
    const handleLeave = () => setCurrent(beforeSrc);

    return (
        <img src={current} alt={alt} onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
    );
}