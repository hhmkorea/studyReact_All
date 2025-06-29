import React, {useRef} from "react";

export default function FormFile() {
    // 파일 입력창에 대한 참조
    const file = useRef(null);

    // [보내기] 버튼 클릭 후 파일 보 로그 출력
    function show() {
        const fs = file.current.files; // 생성된 Ref 객체에서 current 프롶티로 원하는 요소를 얻을 수 있음. 해당 files 프로퍼티로 지정된 파일군(FileList 객체)를 가져온다.
        // 획득한 파일군을 순서대로 스캔
        for(const f of fs) {
            console.log(`파일명:${f.name}`);
            console.log(`종류:${f.type}`);
            console.log(`크기:${Math.trunc(f.size / 1024)}KB`);
        }
    }

    return (
        <form>
            <input type="file" ref={file} multiple />
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}