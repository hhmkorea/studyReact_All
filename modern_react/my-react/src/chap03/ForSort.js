import React from "react";

export default function ForSort({ src }) {
    src.sort((m, n) => m.price - n.price); // 가격이 낮은 순서대로 나열

    return (
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