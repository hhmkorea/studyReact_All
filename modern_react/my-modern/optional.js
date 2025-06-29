// 옵셔널 체이닝 연산자(?.) -------------------------

// str.substring()
// 수신자.발신자
// 메서드를 호출한다, 객체에 어떤 지시, 메시지를 보내는것.

const str = null;
// console.log(str.substring(1)); // error!

// if (str !== null && str !== undefined) {
//     console.log(str.substring(1));
// }

// obj?.title?.length : ? 비어있어도 통과
console.log(str?.substring(1)); // undefined, ?표를 붙이면 null이어도 에러없이 undefined 값을 보여줌.


// null 병합 연산자(??) -------------------------
let value = null;
// console.log(value ?? '기본값');

value ??= '기본값'; // value = value ?? '기본값';
console.log(value ?? '기본값');

