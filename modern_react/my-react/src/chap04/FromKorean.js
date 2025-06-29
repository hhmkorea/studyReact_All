import React from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import yup from './yup.kr.js'; // 한글 메세지 설정 완료된 파일 import
import {useForm} from "react-hook-form";


const schema = yup.object({
    name: yup
        .string()
        .label('이름')
        .trim().lowercase()
        .required()
        .max(20),
    gender: yup
        .string()
        .label('성별')
        .required(),
    email: yup
        .string()
        .label('이메일 주소')
        .required()
        .email(),
    // memo 필드에 ng 규칙 적용.
    memo: yup
        .string()
        .label('비고')
        .required()
        .min(10),
});

export default function FromKorean() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: '홍길동',
            email: 'admin@example.com',
            gender: 'male',
            memo: ''
        },
        // 2. Yup에게 검증을 맡기다 : 유효성 검사 규칙을 React Hook Form에 연결
        resolver: yupResolver(schema),
    });

    // 제출 시 처리 준비
    const onsubmit = data => console.log(data);
    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <label htmlFor="name">이름:</label><br/>
                <input id="name" type="text"
                       {...register('name')} /> {/* 3. 유효성 검사 규칙 적용, register에서 유효성 검사 규칙 선언 제거되고 위의 schema에 정의되어 있음. */}
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor="gender">성별:</label><br/>
                <label>
                    <input type="radio" value="male"
                           {...register('gender')} />남성
                </label>
                <label>
                    <input type="radio" value="female"
                           {...register('gender')} />여성
                </label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor="email">이메일 주소:</label><br/>
                <input id="email" type="text"
                       {...register('email')} />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">비고:</label><br/>
                <textarea id="memo" type="text"
                       {...register('memo')} />
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit">제출하기</button>
            </div>
        </form>
    );
}