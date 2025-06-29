import React from "react";

export default function TitlePanel({ children }) {
    // key 속성이 title/body인 요소를 가져온다.
    const title = children.find(elem => elem.key === 'title'); // find() : 배열을 스캔하여 true를 반환하는 요소를 검색. --> 권장 표기법.
    const body = children.find(elem => elem.key === 'body');

    return (
        <div style={
            {
                margin: 50,
                padding: 5,
                border: '1px solid #000',
                width: 'fit-content',
                boxShadow: '10px 5px 5px #999',
                backgroundColor: '#fff'
            }
        }>
            {title}
            <hr/>
            {body}
        </div>
    );
}