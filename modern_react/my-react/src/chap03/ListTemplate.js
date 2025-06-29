import React from "react";

export default function ListTemplate({src, render}) {
    return (
        <dl>
            {src.map(elem => (
                <React.Fragment key={elem.isbn}> {/* Fragment : 여러 요소를 그룹화 */}
                    {render(elem)} {/* 렌더링을 위한 함수 전달 */}
                </React.Fragment>
            ))}
        </dl>
    );
}