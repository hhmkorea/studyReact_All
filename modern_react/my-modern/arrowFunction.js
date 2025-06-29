// 화살표 함수 : 모던 자바스크립트 코드의 상징적인 존재

function circle1(radius) {
    return (radius ** 2) * Math.PI;
}

const circle2 = (radius) => {
    return (radius ** 2) * Math.PI;
}

// 블록 생략할 경우

// 1. 함수 본문이 한 문장인 경우 블록 생략.
const circle3 = (radius) => (radius ** 2) * Math.PI;

// 2. 매개변수가 한개인 경우 괄호도 생략 가능.
const circle4 = radius => (radius ** 2) * Math.PI;

// but! 매개변수가 없는 경우 괄호 생략 불가능.
const circle5 = () => console.log('Hello, World');

// 선언문과 대입문 분리하기
const func1 = () => { title: '리액트 기초' };
const func2 = () => ({ title: '리액트 기초' }); // 대입문 : 앞뒤를 ()로 묶어야 리터럴로 인식.

console.log(func1()); // undefined
console.log(func2()); // { title: '리액트 기초' }
