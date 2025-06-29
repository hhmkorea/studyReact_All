import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';

// a. ng 규칙 추가
yup.addMethod(yup.string, 'ng', function () {
        return this.test('ng',
            ({label}) => `${label}에 적절하지 않은 단어가 포함되어 있습니다.`,
            value => {
                const ngs = ['폭력', '죽음', '그로테스크'];
                for (const ng of ngs) {
                   if (value.includes(ng)) {
                        return false;
                    }
                }
                return true;
            }
        );
    }
);

/* eslint-disable no-template-curly-in-string */
// 1. 스키마 설정 : 검증 규칙 준비
const schema = yup.object({
    name: yup
        .string()
        .label('이름')
        .trim().lowercase()
        .required('${label}은 필수 입력입니다.')
        .max(20, '${label}은 ${max}자 이내로 입력하세요.'),
    gender: yup
        .string()
        .label('성별')
        .required('${label}은 필수 입력입니다.'),
    email: yup
        .string()
        .label('이메일 주소')
        .required('${label}은 필수 입력입니다.')
        .email('${label}의 형식이 잘못되었습니다.'),
    // memo 필드에 ng 규칙 적용.
    memo: yup
        .string()
        .label('비고')
        .required('${label}은 필수 입력입니다.')
        .min(20, '${label}는 ${min}자 이내로 입력하세요.')
        .ng(), // b. 검증 규칙 할당
});

export default function FormYup() {
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
                <input id="memo" type="text"
                       {...register('memo')} />
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit">제출하기</button>
            </div>
        </form>
    );
}