// 구조 분해 할당

// 객체
const member = {
    fullname: '홍길동',
    sex: '여성',
    age: 18
};
//const { fullname, sex, memo = '---' } = member;
//console.log(sex, fullname, memo);

// 이름으로 할당할 대상을 결정하기 때문에 순서가 달라도 상관없고, 할당하지 않는 프로퍼티가 있어도 상관없다.
// 프로퍼티가 존재하지 않아도 '변수명 = 기본값' 형식으로 설정하는 것도 가능하다.

// 1. 다른 이름의 변수에 대입하기
const { sex: gender } = member;
console.log(gender);

// 2. 나머지 프로퍼티 취득하기
const { fullname, ...rest } = member;
console.log(fullname);  // 홍길동
console.log(rest);      // { sex: '여성', age: 18 }
