import React, {useState} from "react";
import {useImmer} from "use-immer";

export default function StateNestImmer2() {
    // 폼으로 취급하는 값을 State로 선언
    const [form, setForm] = useImmer({ // useImmer()
        name: '홍길동',
        address: {
            do: '충청남도',
            city: '태안'
        }
    });

    const handleForm = e => {
        // 요소명을 '.'으로 분해(이름이 'xxxx.xxx'라고 가정)
        const ns = e.target.name.split('.'); // name 속성에 계층에 따른 이름을 붙이는 것이 포인트.
        setForm(form => {
            // 계층에 따라 대위임처를 변경.
            if (ns.length === 1) {
                form[ns[0]] = e.target.value;
            } else {
                form[ns[0]][ns[1]] = e.target.value;
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
                <input id="do" name="address.do" type="text" onChange={handleForm} value={form.address.do}/><br/>
            </div>
            <div>
                <label htmlFor="city">주소(시/군/구):</label><br/>
                <input id="city" name="address.city" type="text" onChange={handleForm} value={form.address.city}/><br/>
            </div>
            <button type="button" onClick={show}>보내기</button>
        </form>
    );

}