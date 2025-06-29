// 가변 인자 함수 : 매개변수 앞에 ... 를 붙이면 가변 길이의 인자가 된다.

function sum(...nums) {
    let result = 0;
    for (const num of nums) {
        result += num;
    }
    return result;
}

console.log(sum(10, 25, 2));
console.log(sum(7, 13, 25, 6, 100));

// 가변 길이 인자, 일반 인자와 함께 사용 가능.
// but 목록 맨 뒤에 배치. 안그러면 모든 인자 가변 길이 인자에 흡수됨.

// 스프레드 문법에 의한 인수전개
console.log(sum([10, 25, 2]));  // 010, 25, 2 --> 여러 값을 묶는 역할로 함수 계산을 통과 못하고 묶은 값 그대로 출력함.
console.log(sum(...[10, 25, 2]));     // 37 ---> 배열을 개발 요소로 전개하는 역할

