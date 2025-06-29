import React, {useRef} from "react";

export default function StateFormUC() {
    // 리액트 요소에 대한 참조 준비
    const name = useRef(null); // 요소에 연결할때는 null로 설정.
    const age = useRef(null);

    // 요소(참조)를 통해 입력값 준비
    const show = () => {
        console.log(`안녕하세요, ${name.current.value} (${age.current.value}세) 님!`);
    };

    // 폼 랜더링
    return (
        <form>
            {/* 준비된 레퍼런스를 각 요소에 연결 */}
            <div>
                <label htmlFor="name">이름: </label>
                <input id="name" name="name" type="text" ref={name} defaultValue="홍길동"/>
            </div>
            <div>
                <label htmlFor="age">나이: </label>
                <input id="age" name="age" type="text" ref={age} defaultValue="18"/>
            </div>
            <div>
                <button type="button" onClick={show}>보내기</button>
            </div>
        </form>
    );
}