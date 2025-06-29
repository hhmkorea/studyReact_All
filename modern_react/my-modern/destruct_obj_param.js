// 구조 분해 할당을 통한 객체 리터럴 분해

function greet({name, age}) { // 구조 분해 할당
    console.log(`안녕하세요. 저는 ${name}, ${age}세 입니다.`);
}

const my = { name: '이영희', sex: '여성', age: 18 };
greet(my);

function greet1(obj) {
    console.log(`안녕하세요. 저는 ${obj.name}, ${obj.age}세 입니다.`);
}
greet1(my);