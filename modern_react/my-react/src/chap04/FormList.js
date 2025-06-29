import React, {useState} from "react";

export default function FormList() {
    // State 초기화
    const [form, setForm] = useState({
        animal: ['dog', 'hamster'] // 초기값으로 리스트에서 dog, hamster가 선택되어 있음
    });

    // 셀렉트 박스 변경 시 입력값을 State에 반영
    const handleFormList = e => {
        // 선택값을 저장하기 위한 배열
        const data = [];
        // <option> 요소를 순차적으로 스캔하여 선택 상태의 값을 배열에 추가한다.
        const opts = e.target.options; // 리스트로 지정된 옵션을 담는 변수
        for (const opt of opts) {
            if (opt.selected) {
                data.push(opt.value);
            }
        }
        // 최종 결과를 State에 반영
        setForm({
            ...form,
            [e.target.name]: data
        });
    };

    // [보내기] 버튼 클릭 시 입력값 로그 출력
    const show = () => {
        console.log(`좋아하는 동물:${form.animal}`);
    };

    return (
        <form>
            <label htmlFor="animal">좋아하는 동물:</label><br/>
            <select id="animal" name="animal" value={form.animal} size="4" multiple={true} onChange={handleFormList}>
                <option value="dog">개</option>
                <option value="cat">고양이</option>
                <option value="hamster">햄스터</option>
                <option value="rabbit">토끼</option>
            </select>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}