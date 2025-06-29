// 메서드의 간단한 구문

const member = {
    name: '홍길동',
    greet: function () {
        console.log(`안녕하세요, ${this.name} 님!`);
    }
}

const member1 = {
    name: '홍길동',
    greet() {
        console.log(`안녕하세요, ${this.name} 님!`);
    }
}