import React, {useState} from "react";

export default function FormCheck() {

    // State 초기화
    const [ form, setForm ] = useState({
        agreement: true // 초기값으로 checked 속성이 true로 되어 있음.
    });

    // 체크박스 변경 시 입력값을 State에 반영
    const handleFormCheck = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    }

    // [보내기] 버튼 클릭 시 입력값 로그 출력
    const show = () => {
        console.log(`동의 확인: ${form.agreement ? '동의':'동의하지 않음'}`);
    }

    return (
        <form>
            <label htmlFor="agreement">동의합니다:</label>
            <input id="agreement" name="agreement" type="checkbox" checked={form.agreement} onChange={handleFormCheck}/>
            <br/>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}