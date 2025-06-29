import React, {useState} from "react";

export default function FormRadio() {
    // State 초기화
    const [ form, setForm ] = useState({
        os: 'windows' // 초기값으로 Radio가 windows에 체크되어 있음.
    });

    // 라디오 버튼 변경 시 입력값을 State에 반영
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    // [보내기] 버튼 클릭 시 입력값 로그 출력
    const show = () => {
        console.log(`사용OS: ${form.os}`);
    }

    return (
        <form>
            <fieldset>
                <legend>사용OS:</legend>
            <label htmlFor="os_win">Windows </label><br/>
            <input id="os_win" name="os" type="radio" value="windows" checked={form.os === 'windows'}
                   onChange={handleForm}/><br/>
                {/* State의 현재값(form.os)와 라디오 버트의 값(windows, mac, linux)을 비교하여 같은 값을 체크 상태로 결정. */}
            <label htmlFor="os_mac">macOS </label><br/>
            <input id="os_mac" name="os" type="radio" value="mac" checked={form.os === 'mac'}
                   onChange={handleForm}/><br/>
            <label htmlFor="os_lin">Linux </label><br/>
            <input id="os_lin" name="os" type="radio" value="linux" checked={form.os === 'linux'}
                   onChange={handleForm}/><br/>
            </fieldset>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}