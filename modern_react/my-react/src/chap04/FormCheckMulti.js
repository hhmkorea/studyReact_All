import React, {useState} from "react";

export default function FormCheckMulti() {

    // State 초기화
    const [ form, setForm ] = useState({
        animal: ['dog', 'hamster'] // 초기값으로 dog, hamster가 체크 되어 있음.
    });

    // 체크박스 변경 시 입력값을 State에 반영
    const handleFormMulti = e => {
        const fa = form.animal;
        // 체크 시 배열에 값 추가, 체크 해제 시 삭제
        if (e.target.checked) { // 대상 요소가 체크 상태인 경우 해당 값 추가.
            fa.push(e.target.value);
        } else { // 대상 요소에서 체크가 해제된 경우 해당 값을 배열에서 제거.
            fa.splice(fa.indexOf(e.target.value), 1);
        }
        // 편집된 배열을 State에 반영
        setForm({
            ...form,
            [e.target.name]: fa
        });
    }

    // [보내기] 버튼 클릭 시 입력값 로그 출력
    const show = () => {
        console.log(`좋아하는 동물: ${form.animal}`);
    }

    // 개별 체크박스에 체크 여부 반영
    return (
        <form>
            <fieldset>
                <legend>좋아하는 동물:</legend>
                <label htmlFor="animal_dog">개</label><br/>
                <input id="animal_dog" name="animal" type="checkbox" value="dog" checked={form.animal.includes('dog')}
                       onChange={handleFormMulti}/><br/>
                {/* State값인 form.animal은 배열이므로 includes()에서 해당 값이 배열에 포함되는지 판단하여 그 결과 값을 반영. */}
                <label htmlFor="animal_cat">고양이</label><br/>
                <input id="animal_cat" name="animal" type="checkbox" value="cat" checked={form.animal.includes('cat')}
                       onChange={handleFormMulti}/><br/>
                <label htmlFor="animal_hamster">햄스터</label><br/>
                <input id="animal_hamster" name="animal" type="checkbox" value="hamster" checked={form.animal.includes('hamster')}
                       onChange={handleFormMulti}/><br/>
                <label htmlFor="animal_rabbit">토끼</label><br/>
                <input id="animal_rabbit" name="animal" type="checkbox" value="rabbit" checked={form.animal.includes('rabbit')}
                       onChange={handleFormMulti}/><br/>
            </fieldset>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}