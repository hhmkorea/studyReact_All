import React from "react";

// 도서 정보는 Props(src)를 통해 수신
export default function ForList({ src }) {

    return (
        // 도서 정보(src 속성)를 <dt>/<dd> 목록으로 정형화
        <dl>
            {src.map(elem => (
                <React.Fragment key={elem.isbn}>{/* Fragment : 여러 요소를 그룹화 */}
                    <br/>
                    <dl>
                        <dt>
                            <a href={`https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/${elem.isbn}.jpg`}>
                                {elem.title} ({elem.price}원)
                            </a>
                        </dt>
                        <dt>
                            <img src={`https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/${elem.isbn}.jpg`}
                                 width="200px" alt={elem.isbn}/>
                        </dt>
                        <dd>{elem.summary}</dd>
                    </dl>
                    <br/>
                </React.Fragment>
            ))}
        </dl>
    );
}