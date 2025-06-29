import React from "react";

export default function ForFilter({ src }) {
    const lowPrice = src.filter(book => book.price <= 35000);
    return (
        <dl>
            {lowPrice.map(elem => (
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