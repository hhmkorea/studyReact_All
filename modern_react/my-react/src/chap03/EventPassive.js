import React from "react";
import './css/EventPassive.css';

export default function EventPassive() {
    const handleWheel = e => e.preventDefault();

    return (
        <div className="box" onWheel={handleWheel}>
            예를 들어 Wheel 이벤트를 핸들러에서...
        </div>
    );
}