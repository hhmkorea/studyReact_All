import React from "react";
import {useForm} from "react-hook-form";

export default function FormBasic() {
    // 기본값 준비
    const defaultValues = {
        name: '홍길동',
        email: 'admin@example.com',
        gender: 'male',
        memo: ''
    };

    // 폼 초기화 : useForm() 함수 사용, isDirty(폼이 변경됨), isValid(유효성 검사 성공), isSubmitting(폼 제출중)
    const { register, handleSubmit, formState: { errors, isDirty, isValid, isSubmitting } } = useForm({
        defaultValues
    });

    // 제출 시 400밀리초로 처리(더미 지연 처리)
    const onsubmit = data => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                console.log(data);
            }, 4000)
        });
    };
    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate> {/* handleSubmit() : 제출 시 호출하는 처리, useForm())에서 가져옴 */}
            {/* 검증 규칙 등을 폼에 연결 */}
            <div>
                <label htmlFor="name">&nbsp;&nbsp;이름:</label><br/>&nbsp;&nbsp;
                <input id="name" type="text"
                       {...register('name', { // register() : 입력 요소에 핸들러 등을 등록
                           required: '이름은 필수 입력 항목입니다.',
                           maxLength: {
                               value: 20,
                               message: '이름은 20자 이내로 작성해주세요.'
                           }
                       })}
                />
                <div>{errors.name?.message}</div>
                {/* error객체 : 검증결과를 참조 */}
            </div>
            <div>
                <label htmlFor="gender">&nbsp;&nbsp;성별:</label><br/>&nbsp;&nbsp;
                <label>
                    <input id="name" type="radio" value="male"
                           {...register('gender', {
                               required: '성별은 필수입니다.',
                           })} />남성
                </label>
                <label>
                    <input id="name" type="radio" value="female"
                           {...register('gender', {
                               required: '성별은 필수입니다.',
                           })} />여성
                </label>
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor="email">&nbsp;&nbsp;이메일 주소:</label><br/>&nbsp;&nbsp;
                <input id="email" type="email"
                       {...register('email', {
                           required: '이메일 주소는 필수 입력 사항입니다.',
                           pattern: {
                               value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
                               message: '이메일 주소 형식이 잘못되었습니다.'
                           }
                       })}
                />
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">&nbsp;&nbsp;비고:</label><br/>&nbsp;&nbsp;
                <input id="memo" type="memo"
                       {...register('memo', {
                           required: '비고는 필수 입력 항목입니다.',
                           minLength: {
                               value: 10,
                               message: '비고는 10자 이상으로 작성해주세요.'
                           },
                           validate: {
                               ng: (value, formValues) => {
                                   // 부적절한 단어 준비
                                   const ngs = ['폭력', '죽음', '그로테스크'];
                                   // 입력 문자열에 부적절한 단어가 포함되어 있는지 판단
                                   for (const ng of ngs) {
                                       if (value.includes(ng)) {
                                           return '비고에 적절하지 않은 단어가 포함되어 있습니다.';
                                       }
                                   }
                                   return true;
                               }
                           },
                       })}
                />
                <div>{errors.name?.message}</div>
            </div><hr/>
            <div>&nbsp;&nbsp;{/* isDirty(폼이 변경됨), isValid(유효성 검사 성공), isSubmitting(폼 제출중) 셋 중 하나여야 버튼 활성화 됨 */}
                <button type="submit" disabled={!isDirty || !isValid || isSubmitting}>제출하기</button>
                {isSubmitting && <div>...제출 중...</div>}
            </div>
        </form>
    );
}