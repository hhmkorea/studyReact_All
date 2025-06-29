// 프로퍼티 이름 동적으로 생성하기
// : Computed property names, 프로퍼티 이름을 괄호로 묶어 표현식 값에서 프로퍼티 이름을 생성할 수 있다.

let i = 0;
const member = {
    [`attr${++i}`]: '홍길동',
    [`attr${++i}`]: '남성',
    [`attr${++i}`]: '18세'
};
console.log(member);