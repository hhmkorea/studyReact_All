import React, {useState} from "react";

export default function FormTextarea() {
    // State 초기화
    const [ form, setForm ] = useState({
        comment: `다양한 폼 요소를...`
    });

    // 텍스트 영역 변경 시 입력 값을 State에 반영
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    
    // [보내기] 버튼 클릭시 입력값 로그 출력
    const show = () => {
        console.log(`댓글: ${form.comment}`);
    }
    
    return (
        <form>
            <label htmlFor="comment">댓글: </label><br/>
            <textarea id="comment" name="comment" cols="30" rows="7" value={form.comment} onChange={handleForm} onClick={show}></textarea><br/>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}