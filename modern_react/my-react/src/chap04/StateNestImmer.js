import React, {useState} from "react";
import {useImmer} from "use-immer";

export default function StateNestImmer() {
    // 폼으로 취급하는 값을 State로 선언
    const [form, setForm] = useImmer({ // useImmer()
        name: '홍길동',
        address: {
            do: '충청남도',
            city: '태안'
        }
    });

    // 1단계 요소를 업데이트 하는 핸들러
    const handleForm = e => {
        setForm(form => {
            form[e.target.name] = e.target.value; // useImmer 함수로 생성된 세터, State를 인수로 받고, 함수 내부에서 State를 업데이트 할 수 있다. 
        });
    };
    // 2단계 요소를 업데이트 하는 핸들러 : address 부분만 떼어 State를 정규화!!!
    const handleFormNest = e => {
        setForm(form => {
            form.address[e.target.name] = e.target.value;
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