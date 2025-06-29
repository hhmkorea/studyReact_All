
// 1. 블록 스코프 대응
if (true) {
    var a = 10;
    let b = 13;
}
console.log(a); // var a는 () 밖에도 존재
//console.log(b); // error! let b는 {}안에만 존재.
// ==> 변수의 유효범위는 일반적으로 좁게 설정해야함. let을 이용해야 한다.


// 2. 동일한 변수 중복 선언 불가능
let msg = 'Hello!';
let msg = 'Good Bye!';
// console.log(msg); // error! 중복 선언 불가능.