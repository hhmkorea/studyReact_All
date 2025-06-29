import React, {useState} from "react";

export default function FormSelect() {
    // State 초기화
    const [ form, setForm ] = useState({
        animal: 'dog'
    });

    // 선택 상자 변경 시 입력값을 State에 반영
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    // [보내기] 버튼 클릭 시 입력값 로그 출력
    const show = () => {
        console.log(`좋아하는 동물: ${form.animal}`);
    }

    return (
        <form>
            <label htmlFor="animal">좋아하는 동물: </label><br/>
            <select id="animal" name="animal" value={form.animal} onChange={handleForm}>
                <option value="dog">개</option>
                <option value="cat">고양이</option>
                <option value="hamster">햄스터</option>
                <option value="rabbit">토끼</option>
            </select>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}