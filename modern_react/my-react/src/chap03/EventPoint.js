import React, {useState} from "react";

import './css/EventPoint.css';

export default function EventPoint() {
    const [screen, setScreen] = useState({ x: 0, y: 0});
    const [page, setPage]     = useState({ x: 0, y: 0});
    const [client, setClient] = useState({ x: 0, y: 0});
    const [offset, setOffset] = useState({ x: 0, y: 0});

    // 포인터 위치를 각각의 기존에 따라 표시
    const handelMousemove = e => {
        setScreen({ x: e.screenX, y: e.screenY});
        setPage({ x: e.pageX, y: e.pageY});
        setClient({ x: e.clientX, y: e.clientY});
        setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY});
    };

    return (
        <div id="main" onMouseMove={handelMousemove}>
            screen: {screen.x}/{screen.y}<br/>
            page: {page.x}/{page.y}<br/>
            client: {client.x}/{client.y}<br/>
            offset: {offset.x}/{offset.y}<br/>
        </div>
    );
}