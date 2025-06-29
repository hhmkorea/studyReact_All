// 구조 분해 할당

// 3. 중첩된 객체 분해하기

// 객체
const member = {
    fullname: '홍길동',
    address: {
        prefecture: '경기도',
        city: '수원시'
    }
};

const { address, address: { city } } = member; // 대입할 변수도 {}로 중첩한다.
console.log(address); // { prefecture: '경기도', city: '수원시' }
console.log(city);    // 수원시

// 4. 선언문과 대입문 분리하기
let fullname, sex, memo;                    // 선언문.
({fullname, sex, memo = '---'} = member);   // 대입문 : 앞뒤를 ()로 묶어야 리터럴로 인식.

console.log({fullname, sex, memo = '---'} = member);