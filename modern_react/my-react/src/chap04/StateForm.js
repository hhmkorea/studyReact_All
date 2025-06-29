import React, {useState} from "react";

export default function StateForm() { // 제어 컴포넌트(Controller Component)
    // 폼으로 취급하는 값을 State로 선언
    const [form, setForm] = useState({
        name: '홍길동',
        age: 18
    });
    // 폼 요소의 변경 사항을 State에 반영
    const handleForm = e => {
        setForm({
            ...form, // 개별 요소로 분해 ---> name: form.name, age: form.age,
            [e.target.id]: e.target.value // 업데이트된 부분만 덮어쓴다.
        });
    };

    // 개별 핸들러 설치할 때는 요소 수만큼 핸들러 필요.
    // const [name, setName] = useState('홍길동');
    // const [age, setAge] = useState('18');
    // const handleChangeName = e => setName(e.target.value);
    // const handleChangeAge = e => setAge(e.target.value);

    // [보내기] 버튼으로 로그에 메시지 출력하기
    const show = () => {
        console.log(`안녕하세요, ${form.name} (${form.age}세) 님!`);
    };
    return (
        <form>
            {/* 개별 폼 요소에 State 값 할당 */}
            <div>
                <label htmlFor="name">이름: </label>
                <input id="name" name="name" type="text" onChange={handleForm} value={form.name}/>
            </div>
            <div>
                <label htmlFor="age">나이: </label>
                <input id="age" name="age" type="text" onChange={handleForm} value={form.age}/>
            </div>
            <div>
                <button type="button" onClick={show}>보내기</button>
            </div>
            <p>안녕하세요, {form.name} ({form.age}세) 님!</p>
        </form>
    );
}