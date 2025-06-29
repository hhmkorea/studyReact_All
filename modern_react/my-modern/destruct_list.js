// 구조 분해 할당

// 배열
const list = [10, 20, 30];
const [x, y, z] = list;
console.log(x, y, z);

const [a, b] = list; // 대입할 개수가 적으면 나머지 요소 무시.
console.log(a, b);

const [l, m, n, o] = list; // 대입할 개수 이상이면 underfined
console.log(l, m, n, o);

const [p, , r] = list; // 두번째 요소 건너 뛰고 작성
console.log(p, r);

