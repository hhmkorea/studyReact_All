import React, {useState} from "react";

export default function StateNest() { // 중첩된 State

    // 인자 배열을 State로 선언
    const [form, setForm] = useState({
        name: '홍길동',
        address: {
            do: '충청남도',
            city: '태안'
        }
    });

    // 1단계 요소를 업데이트 하는 핸들러
    const handleForm = e => {
        setForm({
            ...form, // 개별 요소로 분해 ---> name: form.name, age: form.age,
            [e.target.id]: e.target.value // 업데이트된 부분만 덮어쓴다.
        });
    };
    // 2단계 요소를 업데이트 하는 핸들러 : address 부분만 떼어 State를 정규화!!!
    const handleFormNest = e => {
        setForm({
            ...form, // 1. form 객체 자체를 복제
            address: {
                ...form.address, // 2. address 프로퍼티를 추가로 복제하는 것.
                [e.target.id]: e.target.value // 3. 복제된 address 프로퍼티에 대해 입력값으로 덮어쓰기
            }
        });
    };

    // [보내기] 버튼으로 로그에 메시지 출력하기
    const show = () => {
        console.log(`${form.name} (${form.address.do} ${form.address.city})`);
    };
    return (
        <form>
            <div>
                <label htmlFor="name">이름:</label><br/>
                <input id="name" name="name" type="text" onChange={handleForm} value={form.name}/><br/>
            </div>
            <div>
                <label htmlFor="do">주소(도):</label><br/>
                <input id="do" name="do" type="text" onChange={handleFormNest} value={form.address.do}/><br/>
            </div>
            <div>
                <label htmlFor="city">주소(시/군/구):</label><br/>
                <input id="city" name="city" type="text" onChange={handleFormNest} value={form.address.city}/><br/>
            </div>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}