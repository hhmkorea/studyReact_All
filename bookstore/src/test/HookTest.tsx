import React, {useRef} from "react";

const HookRef: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null); // useRef : inputRef라는 참조 객체 생성하여 초깃값 null 로 설정.
    
    const focusInput = () => {
        inputRef.current?.focus(); // onClick 이벤트로 DOM 접근 포커스 설정
    };
    
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>포커스 설정</button>
        </div>      
    );
};

export default HookRef;