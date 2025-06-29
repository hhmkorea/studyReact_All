import React from "react";
import * as yup from 'yup';

// 오류 메시지 정보 선언
const krLocale = {
    mixed: {
        required: param => `${param.label}은/는 필수입니다.`,
        oneOf: param => `${param.label}은/는 ${param.values} 중 하나여야 합니다.`,
    },
    string: {
        length: param => `${param.label}은/는 ${param.length}글자여야 합니다.`,
        min: param => `${param.label}은/는 ${param.min}글자 이상이어야 합니다.`,
        max: param => `${param.label}은/는 ${param.max}글자 이하여야 합니다.`,
        matches: param => `${param.label}은/는 ${param.regex} 형식과 일치해야 합니다.`,
        email: param => `${param.label}은/는 이메일 주소 형식이어야 합니다.`,
        url: param => `${param.label}은/는 URL 형식이어야 합니다.`,
    },
    number: {
        min: param => `${param.label}은/는 ${param.min}글자 이상이어야 합니다.`,
        max: param => `${param.label}은/는 ${param.max}글자 이하여야 합니다.`,
        lessThan: param => `${param.label}은/는 ${param.less}보다 작아야 합니다.`,
        moreThan: param => `${param.label}은/는 ${param.more}보다 커야 합니다.`,
        positive: param => `${param.label}은/는 양수여야 합니다.`,
        negative: param => `${param.label}은/는 음수여야 합니다.`,
        integer: param => `${param.label}은/는 정수여야 합니다.`,
    },
    date: {
        min: param => `${param.label}은/는 ${param.min}보다 미래여야 합니다.`,
        max: param => `${param.label}은/는 ${param.max}보다 이전이어야 합니다.`,
    },
};
// 메시지 정보 설정
yup.setLocale(krLocale);
// 설정된 Yup 내보내기
export default yup;