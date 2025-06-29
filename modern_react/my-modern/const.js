// const 특징

const author = '홍길동';
// author = 'WINGS 프로젝트'; // error! const 변수는 상수로 재입력할 수 없다. --> 변경은 가능.
console.log(author);

const list = ['React', 'Vue', 'Angular'];
list[0] = 'Riot'; // 첫번째 배열 값 변경. --> const 변수 우선 사용.

console.log(list);

// --> const로 먼저 작성하고, 값을 변경하고 싶으면 let으로 바꾸면 됨.